#!/bin/bash

#
# WikiGDrive Synchronization Script
#
# This script safely synchronizes the local repository with the remote,
# preserving any local changes. It implements the stash/pull/stash pop
# pattern to avoid conflicts when WikiGDrive tries to push.
#
# Usage:
#   ./scripts/sync-with-remote.sh [branch]
#
# If no branch is specified, defaults to 'main'
#

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get current branch if not specified
if [ -z "$1" ]; then
    BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main")
else
    BRANCH="$1"
fi

echo -e "${GREEN}WikiGDrive Repository Sync Script${NC}"
echo "===================================="
echo "Branch: $BRANCH"
echo ""

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}Error: Not in a git repository${NC}"
    exit 1
fi

# Fetch the latest changes from remote
echo "Fetching latest changes from remote..."
git fetch origin "$BRANCH" 2>/dev/null || {
    echo -e "${YELLOW}Warning: Could not fetch branch '$BRANCH' from remote${NC}"
    echo "Branch may not exist on remote yet, or there may be no upstream configured."
    echo "If this is a new branch, no sync is needed."
    exit 0
}

# Check if local is behind remote
LOCAL=$(git rev-parse @ 2>/dev/null || echo "")
REMOTE=$(git rev-parse @{u} 2>/dev/null || echo "$LOCAL")
BASE=$(git merge-base @ @{u} 2>/dev/null || echo "$LOCAL")

if [ "$LOCAL" = "$REMOTE" ]; then
    echo -e "${GREEN}✓ Repository is up to date${NC}"
    exit 0
fi

if [ "$LOCAL" != "$BASE" ] && [ "$REMOTE" != "$BASE" ]; then
    echo -e "${YELLOW}Warning: Local and remote have diverged${NC}"
    echo "This requires manual resolution"
    exit 1
fi

if [ "$LOCAL" = "$BASE" ]; then
    # Local is behind remote - need to pull
    echo -e "${YELLOW}Local repository is behind remote${NC}"
    echo "Synchronizing..."
    
    # Check if there are uncommitted changes
    if ! git diff-index --quiet HEAD --; then
        echo "Found uncommitted changes, stashing them..."
        git stash push -m "WikiGDrive sync: Auto-stash before pull at $(date)"
        STASHED=true
    else
        STASHED=false
    fi
    
    # Pull with rebase
    echo "Pulling changes from origin/$BRANCH..."
    if git pull --rebase origin "$BRANCH"; then
        echo -e "${GREEN}✓ Successfully pulled changes${NC}"
    else
        echo -e "${RED}Error: Pull failed${NC}"
        if [ "$STASHED" = true ]; then
            echo "Your changes are still stashed. Run 'git stash pop' to restore them."
        fi
        exit 1
    fi
    
    # Pop the stash if we stashed changes
    if [ "$STASHED" = true ]; then
        echo "Restoring stashed changes..."
        if git stash pop; then
            echo -e "${GREEN}✓ Successfully restored your changes${NC}"
        else
            echo -e "${YELLOW}Warning: Could not auto-restore stashed changes${NC}"
            echo "You may have conflicts. Run 'git stash list' to see your stashed changes."
            echo "Run 'git stash pop' to manually restore them after resolving conflicts."
            exit 1
        fi
    fi
    
    echo ""
    echo -e "${GREEN}✓ Repository successfully synchronized${NC}"
    echo "You can now commit and push your changes via WikiGDrive."
else
    # Local is ahead of remote - no need to pull
    echo -e "${GREEN}✓ Local repository is ahead of remote (ready to push)${NC}"
fi
