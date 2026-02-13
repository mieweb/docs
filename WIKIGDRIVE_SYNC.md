# WikiGDrive Synchronization Issues

## Problem

When files are added directly to the repository (via GitHub PRs) and WikiGDrive's local clone is not synchronized, committing via the WikiGDrive plugin fails with errors like:

- "Updates were rejected because a pushed branch tip is behind its remote"
- "error: cannot rebase: You have unstaged changes"
- "fatal: No rebase in progress?"

## Root Cause

WikiGDrive maintains its own local clone of the repository. When changes are made directly on GitHub (bypassing WikiGDrive), the local clone becomes out of sync. When WikiGDrive attempts to push new commits, Git rejects the push because the local branch is behind the remote.

WikiGDrive's current sync logic attempts to rebase automatically, but fails when there are uncommitted changes in the working directory.

## Solutions

### Option 1: Use WikiGDrive's Built-in Sync (Recommended)

WikiGDrive provides UI buttons to manually synchronize:

1. **Reset and Pull**: Safely synchronizes with remote while preserving local changes
2. **Fetch**: Downloads remote changes without applying them

Before committing changes through WikiGDrive:

1. Click "Reset and Pull" to ensure your local repository is synchronized
2. Make your changes
3. Commit and push

### Option 2: Use the Sync Script

A synchronization script is provided at `scripts/sync-with-remote.sh` that implements the safe sync pattern:

```bash
./scripts/sync-with-remote.sh [branch-name]
```

This script:

- Fetches the latest changes from the remote
- Detects if the local repository is behind
- Stashes any uncommitted changes
- Pulls changes with rebase
- Restores stashed changes

### Option 3: Manual Synchronization

If you have direct access to WikiGDrive's local repository, you can manually synchronize:

```bash
# Save your uncommitted changes
git stash

# Pull the latest changes
git pull --rebase origin main

# Restore your changes
git stash pop
```

If there are conflicts after `git stash pop`, resolve them and then continue with your commit.

## Prevention

### For Repository Contributors

- Always use WikiGDrive for documentation changes when possible
- If making changes directly via GitHub PRs, notify WikiGDrive users to sync

### For WikiGDrive Users

- Sync regularly using "Reset and Pull" before making edits
- Check the git status indicator in WikiGDrive UI for sync status
- If you see "X commits behind remote", sync before committing

## Technical Details

The issue occurs in WikiGDrive's `pushBranch()` method, which attempts to handle sync conflicts but doesn't stash uncommitted changes before rebasing. The proper fix requires:

1. Checking for uncommitted changes before push
2. Stashing changes if present
3. Fetching and rebasing from remote
4. Popping stashed changes
5. Handling any merge conflicts gracefully

This fix should be implemented in the [WikiGDrive repository](https://github.com/mieweb/wikiGDrive) in the `src/git/GitScanner.ts` file.

## Error Messages and Their Meanings

| Error Message                                                            | Cause                             | Solution                                           |
| ------------------------------------------------------------------------ | --------------------------------- | -------------------------------------------------- |
| "Updates were rejected because a pushed branch tip is behind its remote" | Local repository is behind remote | Run "Reset and Pull" or sync script                |
| "error: cannot rebase: You have unstaged changes"                        | Uncommitted changes during rebase | Stash changes before syncing                       |
| "fatal: No rebase in progress?"                                          | Failed rebase abort attempt       | This is usually a secondary error, sync to resolve |
| "hint: Updates were rejected because the remote contains work"           | Remote has commits not in local   | Pull/rebase from remote                            |

## Additional Resources

- [WikiGDrive Repository](https://github.com/mieweb/wikiGDrive)
- [Git Stash Documentation](https://git-scm.com/docs/git-stash)
- [Git Rebase Documentation](https://git-scm.com/docs/git-rebase)
