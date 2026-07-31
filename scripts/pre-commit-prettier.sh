#!/bin/bash
# Pre-commit hook: Run Prettier check on ui/src/
# Requires: cd ui && npm install (first time)

if [ ! -d "ui/node_modules" ]; then
    echo "SKIP: ui/node_modules not found. Run 'cd ui && npm install' first."
    exit 0
fi

cd ui && npx prettier --check src/
