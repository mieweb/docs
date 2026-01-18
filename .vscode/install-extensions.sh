#!/bin/bash
# Install VS Code extensions for this workspace

set -e

if ! command -v code &> /dev/null; then
    echo "VS Code CLI not found. Install it via: Cmd+Shift+P → 'Shell Command: Install code command in PATH'"
    exit 1
fi

echo "Installing extensions..."

code --install-extension github.copilot
code --install-extension github.copilot-chat
code --install-extension ms-vscode.vscode-speech
code --install-extension microsoft.playwright-mcp
code --install-extension ms-python.pylance-mcp
code --install-extension docker.copilot-container-mcp

echo "✓ Done! Restart VS Code to activate extensions."
