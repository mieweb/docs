# WikiGDrive Sync Fix

This directory contains resources for resolving the WikiGDrive synchronization issue described in [GitHub Issue #XXX](link-to-issue).

## Files

- **sync-with-remote.sh**: A helper script that safely synchronizes the local repository with the remote, implementing the stash/pull/stash pop pattern.
- **wikigdrive-sync-fix.patch**: A patch file that fixes the issue in the WikiGDrive codebase. This patch should be applied to the [mieweb/wikiGDrive repository](https://github.com/mieweb/wikiGDrive).

## Using the Sync Script

If you encounter sync issues with WikiGDrive, run this script before committing:

```bash
./scripts/sync-with-remote.sh
```

Or for a specific branch:

```bash
./scripts/sync-with-remote.sh my-branch-name
```

The script will:

1. Check if your local repository is behind the remote
2. Stash any uncommitted changes
3. Pull the latest changes with rebase
4. Restore your stashed changes

## Applying the WikiGDrive Fix

The permanent fix requires updating WikiGDrive itself. To apply the patch:

1. Clone the WikiGDrive repository:

   ```bash
   git clone https://github.com/mieweb/wikiGDrive.git
   cd wikiGDrive
   ```

2. Apply the patch:

   ```bash
   git apply /path/to/docs/scripts/wikigdrive-sync-fix.patch
   ```

3. Build and test:

   ```bash
   npm install
   npm run build
   npm test
   ```

4. Submit a pull request to the WikiGDrive repository

## What the Fix Does

The patch modifies `src/git/GitScanner.ts` in WikiGDrive to:

1. **Detect uncommitted changes** before attempting to rebase
2. **Stash changes** if present using `git stash push`
3. **Perform the fetch and rebase** as normal
4. **Restore stashed changes** using `git stash pop`
5. **Handle errors gracefully** by:
   - Restoring stashed changes even if rebase fails
   - Providing clear error messages
   - Aborting rebase if conflicts occur

This implements the recommended Git workflow: "stash local changes, git pull origin, stash pop"

## Error Handling

The fix includes error handling for:

- **Stash failure**: Throws clear error asking user to manually commit or stash
- **Rebase conflicts**: Aborts rebase, restores stash if possible, provides clear message
- **Stash pop failure**: Throws error with instructions to recover from `git stash list`

## Testing

To test the fix:

1. Create a test scenario:
   - Make changes in a Google Doc (to create uncommitted changes in WikiGDrive's clone)
   - Add a commit directly to GitHub (to make remote ahead of local)

2. Try to commit via WikiGDrive plugin
   - With the fix: Should automatically stash, pull, restore, and push
   - Without the fix: Would fail with "cannot rebase: You have unstaged changes"

## Contributing

If you improve this fix, please:

1. Test thoroughly with various scenarios
2. Update this README with your changes
3. Submit a PR to both repositories:
   - mieweb/docs (for the script/documentation)
   - mieweb/wikiGDrive (for the code fix)

## Additional Resources

- [Parent documentation](../WIKIGDRIVE_SYNC.md)
- [WikiGDrive Repository](https://github.com/mieweb/wikiGDrive)
- [Original Issue](link-to-issue)
