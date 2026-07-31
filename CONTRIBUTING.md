# Contributing to ComfyUI-Copilot

Thank you for your interest in contributing! This document describes how to set up your development environment and the conventions used in this project.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Local Development](#local-development)
- [Building](#building)
- [Code Conventions](#code-conventions)
- [Commit Conventions](#commit-conventions)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Branching Strategy](#branching-strategy)

---

## Project Structure

```
ComfyUI-Copilot/
├── __init__.py                  # ComfyUI custom node entry point
├── pyproject.toml               # Python package metadata & Comfy Registry config
├── requirements.txt             # Python dependencies
├── backend/
│   ├── agent_factory.py         # AI agent creation (OpenAI Agents SDK)
│   ├── core.py                  # Agent SDK configuration
│   ├── controller/              # HTTP API endpoints (aiohttp)
│   │   ├── conversation_api.py  # Chat, debug, model download, checkpoints
│   │   ├── expert_api.py        # Expert knowledge management
│   │   └── llm_api.py           # Model listing, API key verification
│   ├── dao/                     # SQLite data access (SQLAlchemy)
│   │   ├── expert_table.py
│   │   ├── session_message_table.py
│   │   └── workflow_table.py
│   ├── service/                 # Business logic / agents
│   │   ├── debug_agent.py       # Workflow error analysis agent
│   │   ├── mcp_client.py        # MCP orchestration (main agent router)
│   │   ├── message_memory.py    # Conversation memory compression
│   │   ├── workflow_rewrite_agent.py
│   │   └── workflow_rewrite_tools.py
│   └── utils/                   # Shared utilities
│       ├── globals.py           # Global state, env config, LLM defaults
│       ├── logger.py            # Custom location-aware logger
│       ├── auth_utils.py        # API key extraction/storage
│       ├── request_context.py   # Per-request context (session, config)
│       └── modelscope_gateway.py
├── ui/                          # React + TypeScript frontend
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── .eslintrc.cjs
│   ├── .prettierrc
│   ├── src/
│   │   ├── App.tsx              # Root React component
│   │   ├── main.tsx             # Entry point (mounts to ComfyUI DOM)
│   │   ├── config.ts            # API base URL, env-aware config
│   │   ├── const.ts             # Application constants
│   │   ├── apis/                # API client modules
│   │   ├── components/          # React components
│   │   │   ├── chat/            # Chat UI (messages, input, modals)
│   │   │   ├── debug/           # GenLab parameter tuning interface
│   │   │   ├── markdown/        # Markdown rendering
│   │   │   └── ui/              # Shared UI primitives
│   │   ├── context/             # React context providers
│   │   ├── hooks/               # Custom React hooks
│   │   ├── types/               # TypeScript type definitions
│   │   ├── utils/               # Frontend utilities
│   │   └── workflowChat/        # Workflow chat feature module
│   ├── public/                  # Static assets served with the app
│   │   ├── workflows/           # Sample workflow JSON files
│   │   └── showcase/            # Showcase data (EN/ZH)
│   └── scripts/
│       └── post-build.js        # Post-build JS path rewriting
├── entry/                       # ComfyUI integration scripts
│   ├── entry.js                 # Loads the built UI into ComfyUI
│   └── comfyui-bridge.js        # Bridge between ComfyUI and Copilot UI
├── dist/copilot_web/            # Built frontend (committed on main/beta)
├── locales/                     # i18n translation files
│   ├── en/
│   └── zh/
├── public/                      # Public data (workflows, showcase)
├── assets/                      # Documentation images/GIFs
└── db/                          # SQLite databases (git-ignored)
```

---

## Development Setup

### Prerequisites

- **Python 3.10+** — Backend runtime
- **Node.js 18+** / **npm** — Frontend tooling
- **ComfyUI** — Must be running for integration testing

### 1. Clone and Install

```bash
# From your ComfyUI custom_nodes directory:
cd ComfyUI/custom_nodes
git clone https://github.com/AIDC-AI/ComfyUI-Copilot.git
cd ComfyUI-Copilot

# Install Python dependencies
pip install -r requirements.txt
```

### 2. Install Frontend Dependencies

```bash
cd ui
npm install
cd ..
```

### 3. Set Up Pre-Commit Hooks (Recommended)

This repo uses [pre-commit](https://pre-commit.com/) to enforce basic code hygiene automatically:

```bash
pip install pre-commit
pre-commit install
```

Pre-commit runs on every `git commit` and checks:
- **Python**: trailing whitespace, missing newlines, merge conflicts, private keys, large files
- **Python (Ruff)**: pyflakes errors, whitespace issues, import sorting
- **Frontend**: ESLint + Prettier auto-fix on `ui/src/`

You can also run manually: `pre-commit run --all-files`

### 4. Set Up Git Hooks

The repo includes a `post-checkout` hook that manages `.git/info/exclude` based on the current branch (controls whether `dist/` is tracked).

```bash
cd ui
npm run setupGithooks
```

### 4. Configure LLM Backend

You have three options for the LLM backend:

| Option | Base URL | API Key |
|--------|----------|---------|
| **Remote (default)** | `https://comfyui-copilot-server.onrender.com/v1` | Required (generated via email) |
| **OpenAI-compatible** | Your API endpoint | Your API key |
| **LMStudio (local)** | `http://localhost:1234/v1` | Leave empty |

Configure via the ComfyUI-Copilot settings UI (gear icon) or by creating a `.env` file in the repo root:

```env
CC_OPENAI_API_KEY=your_api_key
CC_OPENAI_BASE_URL=your_base_url
WORKFLOW_LLM_API_KEY=your_workflow_api_key
WORKFLOW_LLM_BASE_URL=your_workflow_base_url
WORKFLOW_LLM_MODEL=your_model_name
TENANT_ID=your_tenant_id          # If using the remote backend
DISABLE_WORKFLOW_GEN=true|false   # Disable AI workflow generation
```

> **Note:** See [`LMSTUDIO_SETUP.md`](./LMSTUDIO_SETUP.md) and [`HOW_TO_USE_LMSTUDIO.md`](./HOW_TO_USE_LMSTUDIO.md) for detailed LMStudio instructions.

---

## Local Development

### Frontend (Hot-Reload)

The frontend runs in Vite dev mode and proxies ComfyUI API imports to a local ComfyUI instance:

```bash
# Terminal 1: Start ComfyUI (must be running on default port 8188)
cd ComfyUI
python main.py

# Terminal 2: Start the Copilot UI dev server
cd ComfyUI/custom_nodes/ComfyUI-Copilot/ui
npm run dev
```

The dev server runs on `http://localhost:8000` by default (configurable in `ui/src/config.ts`). In development mode, Vite rewrites imports to `/scripts/app.js` and `/scripts/api.js` to point at `http://127.0.0.1:8188`.

### Backend

The backend runs as part of ComfyUI — there is no separate dev server. Restart ComfyUI after making Python changes:

```bash
# In your ComfyUI directory
python main.py
```

Logs are written to `backend/logs/comfyui_copilot.log` and stderr.

### Testing the Integration

1. Start ComfyUI with the custom node installed
2. Open the ComfyUI web UI (`http://localhost:8188`)
3. Click the **Copilot** button on the left panel
4. Configure your API key / LLM settings via the gear icon

---

## Building

### Production Build

```bash
cd ui

# Build with default API base URL
npm run build

# Build with a specific API base URL (used for the remote backend)
npm run build:prod    # Uses https://comfyui-copilot-server.onrender.com
npm run build:pre     # Uses https://comfyui-copilot-server-pre.onrender.com
```

The build outputs to `dist/copilot_web/`. A post-build script (`ui/scripts/post-build.js`) rewrites dynamic import paths for proper loading under ComfyUI's static file server.

### Build Output Structure

```
dist/copilot_web/
├── input.js                    # Main entry (loaded by entry/entry.js)
├── fonts.css
├── App-*.js
├── vendor-react-*.js
├── vendor-markdown-*.js
├── vendor-ui-*.js
├── message-components-*.js
├── workflowChat-*.js
└── assets/
    └── cc-icon-*.svg
```

> **Important:** On `main` and `beta` branches, the `dist/` directory is tracked in git. On feature branches, it is excluded via the post-checkout hook.

---

## Code Conventions

### Python (Backend)

- **Style:** Follow PEP 8 conventions
- **Logging:** Use the project's custom logger from `backend.utils.logger`:
  ```python
  from backend.utils.logger import log
  log.info("message", extra={"key": "value"})
  ```
  The logger automatically includes file location (`filename:function:line`).
- **Imports:** Standard library → third-party → local application
- **Type hints:** Encouraged where practical
- **File headers:** The project uses Chinese-style file headers (author, date, filepath). New files should follow the existing pattern or omit headers — be consistent with the file's surroundings.

### TypeScript / React (Frontend)

Configured via [`ui/.eslintrc.cjs`](./ui/.eslintrc.cjs) and [`ui/.prettierrc`](./ui/.prettierrc):

| Setting | Value |
|---------|-------|
| **Indent** | 2 spaces |
| **Line width** | 80 characters |
| **Quotes** | Double quotes |
| **Semicolons** | Required |
| **Trailing commas** | All (es5) |
| **JSX** | `react-jsx` (no JSX transform) |

Run linting and formatting:

```bash
cd ui
npm run lint          # ESLint (TypeScript + React + Prettier)
npx prettier --write src/    # Format all source files
```

### Component Naming

- **Components:** `PascalCase` (e.g., `ChatInput.tsx`)
- **Utilities:** `camelCase` (e.g., `graphUtils.ts`)
- **Constants:** `UPPER_SNAKE_CASE` (e.g., `COPILOT_EVENTS`)
- **Folders:** `camelCase` or `kebab-case` (follow existing convention per directory)

### CSS / Styling

The UI uses **Tailwind CSS** with scoped styles. The `preflight` base is disabled to avoid conflicting with ComfyUI's styles. Colors use CSS custom properties (`var(--p-panel-background)`, etc.) to adapt to ComfyUI's theme.

---

## Commit Conventions

The project uses a lightweight conventional commit format. Prefix your commit messages with a type:

| Type | Description |
|------|-------------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `refactor:` | Code restructuring (no behavior change) |
| `style:` | Code formatting, missing semicolons, etc. |
| `chore:` | Dependencies, config, tooling |
| `ci:` | CI/CD changes |

Examples from the project:
```
feat: 将模型reload按钮和选择框分离，固定位置。
fix:修复添加节点位置偏移问题
docs: add API service suspension notice to README
refactor: prompt解决message压缩的tool调用bug
```

> Commits may be in English or Chinese — both are used in the project. Pick one and be consistent within your PR.

---

## Submitting a Pull Request

1. **Fork** the repository
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. **Make your changes** and commit following the conventions above
4. **Ensure the build succeeds**:
   ```bash
   cd ui && npm run build
   ```
5. **Test locally** with ComfyUI running
6. **Push and open a PR** against the `main` branch
7. **Reference any related issues** in the PR description

### PR Checklist

- [ ] Code follows the project's linting rules (`npm run lint` in `ui/`)
- [ ] Production build succeeds without errors
- [ ] Changes tested with ComfyUI running locally
- [ ] No sensitive data (API keys, tokens) committed
- `dist/` is **not** included on feature branches (the post-checkout hook handles this)
- [ ] Documentation updated if applicable

---

## Branching Strategy

| Branch | Purpose | `dist/` tracked? |
|--------|---------|-------------------|
| `main` | Production releases | ✅ Yes |
| `beta` | Pre-release / staging | ✅ Yes |
| Feature branches | Development | ❌ No (auto-excluded) |

The `post-checkout` git hook (set up via `npm run setupGithooks`) automatically manages `.git/info/exclude` to include or exclude `dist/` based on the current branch.

---

## Questions?

- Open an [Issue](https://github.com/AIDC-AI/ComfyUI-Copilot/issues) on GitHub
- Join the [Discord](https://discord.gg/rb36gWG9Se)
- Email: ComfyUI-Copilot@service.alibaba.com
