#!/bin/bash
# Run ty type checker (non-blocking: shows warnings but doesn't fail CI)
# ty is like mypy but much faster. We ignore unresolved-import since
# openai-agents and openai aren't installed in the dev venv.
set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
TY="${PROJECT_ROOT}/.venv/bin/ty"

if [ ! -x "$TY" ]; then
    echo "ty not installed. Install with: pip install ty"
    exit 0
fi

echo "Running ty type check (warnings only, non-blocking)..."
"$TY" check --ignore unresolved-import --no-progress "${PROJECT_ROOT}/backend/" || true
echo "ty check complete."
