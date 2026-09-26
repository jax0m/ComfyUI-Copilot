"""
Internationalization (i18n) module for ComfyUI-Copilot backend.

Loads localized instruction templates and strings based on the current
language setting. Supports extensibility for additional languages.

Usage:
    from ..utils.i18n import get_instruction, get_string
    
    # Get a full instruction template
    instructions = get_instruction("local_agent_instructions")
    
    # Get a single localized string
    greeting = get_string("greeting")
"""

import json
import os
from typing import Optional, Dict, Any

# Base directory for locale files
LOCALES_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "..", "locales")
LOCALES_DIR = os.path.normpath(LOCALES_DIR)

# Supported languages (fallback chain)
SUPPORTED_LANGUAGES = ["en", "zh"]
DEFAULT_LANGUAGE = "en"

# Cache for loaded locale files
_locale_cache: Dict[str, Dict[str, Any]] = {}


def _load_locale_file(language: str, filename: str) -> Dict[str, Any]:
    """Load a specific locale file for a language."""
    filepath = os.path.join(LOCALES_DIR, language, filename)
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}


def _get_locale_data(language: str) -> Dict[str, Any]:
    """
    Get merged locale data for a language.
    Falls back to default language if file/keys are missing.
    """
    cache_key = language
    if cache_key in _locale_cache:
        return _locale_cache[cache_key]

    # Start with default language as base
    data = {}
    for lang in [DEFAULT_LANGUAGE, language]:
        if lang not in SUPPORTED_LANGUAGES and lang != DEFAULT_LANGUAGE:
            continue
        # Load all JSON files in the language directory
        lang_dir = os.path.join(LOCALES_DIR, lang)
        if os.path.isdir(lang_dir):
            for filename in os.listdir(lang_dir):
                if filename.endswith('.json'):
                    file_data = _load_locale_file(lang, filename)
                    _deep_merge(data, file_data)

    _locale_cache[cache_key] = data
    return data


def _deep_merge(base: Dict, override: Dict) -> Dict:
    """Deep merge override into base dict."""
    for key, value in override.items():
        if key in base and isinstance(base[key], dict) and isinstance(value, dict):
            _deep_merge(base[key], value)
        else:
            base[key] = value
    return base


def normalize_language(language: str) -> str:
    """
    Normalize a language code to a supported language.
    Handles variants like 'zh-CN', 'en-US', 'zh_CN' -> 'zh', 'en'
    """
    if not language:
        return DEFAULT_LANGUAGE
    
    # Extract base language code (before - or _)
    base = language.split('-')[0].split('_')[0].lower()
    
    if base in SUPPORTED_LANGUAGES:
        return base
    
    # Try to match partial (e.g., 'english' -> 'en')
    for lang in SUPPORTED_LANGUAGES:
        if base.startswith(lang) or lang.startswith(base):
            return lang
    
    return DEFAULT_LANGUAGE


def get_string(key: str, language: Optional[str] = None, **format_args) -> str:
    """
    Get a localized string by key.
    
    Args:
        key: Dot-notation key (e.g., "instructions.local_agent.name")
        language: Language code (uses current global if None)
        **format_args: Arguments for string formatting
    
    Returns:
        Localized string, or the key itself if not found
    """
    if language is None:
        from .globals import get_language
        language = get_language()
    
    language = normalize_language(language)
    data = _get_locale_data(language)
    
    # Navigate dot-notation key
    parts = key.split('.')
    current = data
    for part in parts:
        if isinstance(current, dict) and part in current:
            current = current[part]
        else:
            # Key not found, return the key as fallback
            return key
    
    if isinstance(current, str):
        if format_args:
            try:
                return current.format(**format_args)
            except (KeyError, IndexError):
                return current
        return current
    
    return str(current)


def get_instruction(template_name: str, language: Optional[str] = None, **format_args) -> str:
    """
    Get a localized instruction template by name.
    
    Args:
        template_name: Name of the instruction template
            (e.g., "local_agent_instructions", "mcp_agent_instructions")
        language: Language code (uses current global if None)
        **format_args: Arguments for string formatting
    
    Returns:
        Localized instruction template
    """
    return get_string(f"instructions.{template_name}", language, **format_args)


def reload_locales():
    """Clear the locale cache (useful for development)."""
    _locale_cache.clear()
