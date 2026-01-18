#!/bin/bash

# Git LFS Setup Script for Enterprise Health Documentation
# This script ensures git-lfs is installed and configured

set -e

echo "================================"
echo "Git LFS Setup"
echo "================================"
echo ""

# Check if git-lfs is installed
if command -v git-lfs &> /dev/null; then
    echo "✓ git-lfs is already installed"
    git-lfs version
else
    echo "⚠️  git-lfs not found. Installing..."
    
    # Detect OS and install
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            echo "Installing via Homebrew..."
            brew install git-lfs
        else
            echo "❌ Homebrew not found. Please install git-lfs manually:"
            echo "   Visit: https://git-lfs.github.com/"
            exit 1
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command -v apt-get &> /dev/null; then
            echo "Installing via apt..."
            sudo apt-get update
            sudo apt-get install git-lfs
        elif command -v yum &> /dev/null; then
            echo "Installing via yum..."
            sudo yum install git-lfs
        else
            echo "❌ Package manager not found. Please install git-lfs manually:"
            echo "   Visit: https://git-lfs.github.com/"
            exit 1
        fi
    else
        echo "❌ Unsupported OS. Please install git-lfs manually:"
        echo "   Visit: https://git-lfs.github.com/"
        exit 1
    fi
fi

echo ""

# Install git-lfs hooks
echo "Setting up git-lfs hooks..."
git lfs install

echo ""

# Check if .gitattributes exists
if [ -f .gitattributes ]; then
    echo "✓ .gitattributes file exists"
else
    echo "⚠️  No .gitattributes file found"
    echo "   Creating basic .gitattributes for common binary files..."
    cat > .gitattributes << 'EOF'
# Git LFS Configuration
# Track large binary files with Git LFS

# Images
*.png filter=lfs diff=lfs merge=lfs -text
*.jpg filter=lfs diff=lfs merge=lfs -text
*.jpeg filter=lfs diff=lfs merge=lfs -text
*.gif filter=lfs diff=lfs merge=lfs -text
*.webp filter=lfs diff=lfs merge=lfs -text
*.svg filter=lfs diff=lfs merge=lfs -text
*.ico filter=lfs diff=lfs merge=lfs -text

# Videos
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.mov filter=lfs diff=lfs merge=lfs -text
*.avi filter=lfs diff=lfs merge=lfs -text
*.webm filter=lfs diff=lfs merge=lfs -text

# Documents
*.pdf filter=lfs diff=lfs merge=lfs -text
*.zip filter=lfs diff=lfs merge=lfs -text
*.tar.gz filter=lfs diff=lfs merge=lfs -text

# Audio
*.mp3 filter=lfs diff=lfs merge=lfs -text
*.wav filter=lfs diff=lfs merge=lfs -text
EOF
    echo "✓ Created .gitattributes"
fi

echo ""

# Fetch LFS objects
echo "Fetching LFS objects..."
git lfs fetch --all || echo "⚠️  Some LFS objects may not be available"

echo ""
echo "================================"
echo "Git LFS Setup Complete!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Try running: git status"
echo "2. If you see LFS warnings, run: git lfs pull"
echo "3. Check LFS tracked files: git lfs ls-files"
echo ""
