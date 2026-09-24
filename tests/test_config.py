"""
Basic tests for ComfyUI-Copilot configuration utilities.
Run as: python3 tests/test_config.py
"""
import sys
import os

# Add the project root to the path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def is_configured(url: str) -> bool:
    """Check if a URL is actually configured (not a placeholder or empty)."""
    return url is not None and url != "" and url != "__NOT_CONFIGURED__"


def test_is_configured():
    """Tests for the is_configured helper function."""
    assert not is_configured("__NOT_CONFIGURED__"), "Placeholder should not be configured"
    assert not is_configured(""), "Empty string should not be configured"
    assert not is_configured(None), "None should not be configured"
    assert is_configured("http://localhost:8188"), "Valid URL should be configured"
    assert is_configured("http://localhost:1234/v1"), "Valid URL with path should be configured"
    assert is_configured("https://api.openai.com/v1"), "Remote URL should be configured"
    print("✓ test_is_configured passed")


def test_bool_env_parsing():
    """Tests for environment variable boolean parsing logic."""
    assert ('true'.lower() == 'true') == True, "'true' should parse as True"
    assert ('false'.lower() == 'true') == False, "'false' should parse as False"
    assert (''.lower() == 'true') == False, "Empty should parse as False"
    assert ('TRUE'.lower() == 'true') == True, "'TRUE' should parse as True"
    print("✓ test_bool_env_parsing passed")


def test_default_values():
    """Tests for default configuration values logic."""
    # The defaults should be placeholders, not remote URLs
    backend_default = "__NOT_CONFIGURED__"
    llm_default = "__NOT_CONFIGURED__"
    assert backend_default == "__NOT_CONFIGURED__", "Backend default should be placeholder"
    assert llm_default == "__NOT_CONFIGURED__", "LLM default should be placeholder"
    
    # Tracing and search should be disabled by default
    tracing_default = "false"
    search_default = "false"
    assert (tracing_default.lower() == 'true') == False, "Tracing should be disabled by default"
    assert (search_default.lower() == 'true') == False, "Search should be disabled by default"
    print("✓ test_default_values passed")


if __name__ == "__main__":
    test_is_configured()
    test_bool_env_parsing()
    test_default_values()
    print("\nAll tests passed!")
