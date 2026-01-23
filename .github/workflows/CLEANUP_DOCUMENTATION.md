# PR Documentation Folder Cleanup

## Overview

This document describes the automated cleanup mechanism for PR documentation folders in `/www/mie-docs/public/`.

## Problem

When pull requests are created, the CI workflow builds documentation and deploys it to `/www/mie-docs/public/{branch-name}/`. Previously, these folders were never cleaned up when PRs were closed or merged, leading to accumulation of stale folders.

## Solution

Two cleanup mechanisms have been implemented:

### 1. Automatic Cleanup on PR Close/Merge

**Workflow:** `.github/workflows/pull_request.yml`

When a PR is closed or merged, the cleanup job automatically:
- Extracts the branch name from the PR
- Removes the corresponding folder from `/www/mie-docs/public/`
- Sends a notification to Rocket.Chat
- Handles cases where the folder doesn't exist gracefully

**Trigger:** Runs automatically when a PR is closed (including merged PRs)

### 2. Scheduled Cleanup of Stale Folders

**Workflow:** `.github/workflows/cleanup_stale_pr_folders.yml`

Weekly scheduled job that:
- Fetches list of all open PRs via GitHub API
- Compares with folders in `/www/mie-docs/public/`
- Removes folders that don't correspond to any active PR
- Keeps the `master` branch folder
- Provides a summary of removed and kept folders

**Schedule:** Runs every Sunday at 2:00 AM UTC

**Manual Trigger:** Can be manually triggered via GitHub Actions UI using the "workflow_dispatch" event

## Technical Details

### Branch Name Sanitization

Branch names are sanitized to match filesystem naming conventions:
- Forward slashes (`/`) are replaced with hyphens (`-`)
- Example: `feature/my-feature` becomes `feature-my-feature`

### Error Handling

- If a folder doesn't exist during cleanup, a warning is logged but the job continues
- If the scheduled cleanup can't access the folder, it exits with an error
- Both workflows include notifications to Rocket.Chat regardless of success/failure

### Notifications

All cleanup activities are reported to the `#miedocs` Rocket.Chat channel:
- PR close cleanup: Notifies when a specific PR folder is removed
- Scheduled cleanup: Provides summary of how many folders were removed vs kept

## Maintenance

### Monitoring

Check the following for cleanup status:
1. GitHub Actions workflow runs in the repository
2. Rocket.Chat `#miedocs` channel for notifications
3. `/www/mie-docs/public/` directory for any unexpected folders

### Manual Cleanup

If needed, you can manually trigger the scheduled cleanup:
1. Go to GitHub Actions tab
2. Select "Cleanup Stale PR Folders" workflow
3. Click "Run workflow"
4. Select the branch (usually `master`)
5. Click "Run workflow" button

### Troubleshooting

**Folder not being cleaned up after PR close:**
- Check the workflow run logs in GitHub Actions
- Verify the branch name matches the folder name (with `/` replaced by `-`)
- Check if the self-hosted runner has permissions to delete the folder

**Scheduled cleanup not running:**
- Verify the cron schedule is correct
- Check if the self-hosted runner is online
- Review workflow run history for any errors

**Too many folders being kept:**
- Verify PRs are actually closed, not just merged
- Check if there are branches with the same name as folders
- Review the scheduled cleanup logs to see which folders were identified as active

## Future Improvements

Potential enhancements that could be considered:
- Add retention period before deleting folders (e.g., keep for 7 days after PR close)
- Implement archiving instead of deletion for important PRs
- Add metrics/dashboard for folder lifecycle
