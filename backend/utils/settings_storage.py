"""
Persistent settings storage for ComfyUI-Copilot.

Stores user settings in ComfyUI's user data directory so they survive
plugin reinstalls and updates.
"""

import json
import os
import threading
from pathlib import Path
from typing import Any, Optional

_lock = threading.RLock()

def get_settings_path() -> Path:
    """
    Get the path to the settings file.
    
    Uses ComfyUI's user data directory if available, otherwise falls back
    to the plugin's own directory.
    """
    try:
        import folder_paths
        user_dir = folder_paths.get_user_directory()
        settings_dir = Path(user_dir) / "ComfyUI-Copilot"
    except (ImportError, AttributeError):
        # Fall back to plugin directory if folder_paths is not available
        settings_dir = Path(__file__).parent.parent.parent / ".settings"
    
    settings_dir.mkdir(parents=True, exist_ok=True)
    return settings_dir / "settings.json"

def load_settings() -> dict:
    """Load settings from the persistent storage."""
    with _lock:
        settings_path = get_settings_path()
        if settings_path.exists():
            try:
                with open(settings_path, 'r') as f:
                    return json.load(f)
            except (json.JSONDecodeError, IOError):
                pass
    return {}

def save_settings(settings: dict) -> None:
    """Save settings to persistent storage."""
    with _lock:
        settings_path = get_settings_path()
        settings_path.parent.mkdir(parents=True, exist_ok=True)
        with open(settings_path, 'w') as f:
            json.dump(settings, f, indent=2)

def get_setting(key: str, default: Any = None) -> Any:
    """Get a single setting value."""
    settings = load_settings()
    return settings.get(key, default)

def set_setting(key: str, value: Any) -> None:
    """Set a single setting value."""
    with _lock:
        settings = load_settings()
        settings[key] = value
        save_settings(settings)

def delete_setting(key: str) -> None:
    """Delete a single setting."""
    with _lock:
        settings = load_settings()
        if key in settings:
            del settings[key]
            save_settings(settings)

def clear_settings() -> None:
    """Clear all settings."""
    with _lock:
        settings_path = get_settings_path()
        if settings_path.exists():
            settings_path.unlink()
