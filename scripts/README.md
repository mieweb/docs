# Demographics Tab Video Script Tests

Automated Playwright tests for creating demonstration videos of the WebChart Demographics tab functionality.

## Setup

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Configure credentials** in `.env` file:
   ```
   WEBCHART_URL=https://masterdaily.dev.webchart.app/
   WEBCHART_USERNAME=dave
   WEBCHART_PASSWORD=dave
   ```

## Running the Tests

### Step 1: Authenticate and Save Session

Before running the demonstration tests, you need to establish an authenticated session:

```bash
npx playwright test scripts/auth-setup.spec.ts --headed
```

This will:
- Log into WebChart with the credentials from `.env`
- Save the authentication state to `.auth/webchart-session.json`
- Allow subsequent tests to skip the login process

**Note**: Run this setup whenever:
- Running tests for the first time
- Session expires
- Switching between different WebChart environments

### Step 2: Run Demographics Demonstration

```bash
npx playwright test scripts/demographics.spec.ts --headed --timeout=60000
```

This will run two test scenarios and **automatically record videos**:

1. **Complete Demographics Tab Walkthrough** (4-5 minutes)
   - Full demonstration covering all 10 chapters from the script
   - Shows all sections: demographics, employment, contacts, insurance, duplicates

2. **Quick Demographics Navigation Demo** (2-3 minutes)
   - Condensed version focusing on key highlights
   - Faster navigation through main sections

**Videos are automatically saved to**: `scripts/videos/`

Each test run creates a uniquely named video file with timestamp.

## Test Features

- **Pre-authenticated**: Tests use saved session state, no login shown in videos
- **Overlay Annotations**: Each step displays overlay text explaining the action
- **Smooth Navigation**: Automatic scrolling and waiting for proper timing
- **Chapter-based**: Aligned with the demographics.md script structure

## Files

- `auth-setup.spec.ts` - Authentication setup (run once before tests)
- `demographics.spec.ts` - Main demonstration tests
- `demographics.md` - Original video script with 10 chapters
- `.auth/webchart-session.json` - Saved authentication state (git-ignored)
- `videos/` - Recorded video files (git-ignored, automatically created)
- `../playwright.config.ts` - Playwright configuration with video settings

## Troubleshooting

**Session expired**: Re-run the auth-setup script
```bash
npx playwright test scripts/auth-setup.spec.ts --headed
```

**Test timing issues**: Adjust timeout values in the test or use:
```bash
npx playwright test scripts/demographics.spec.ts --headed --timeout=120000
```

**Element not found**: Check that WebChart selectors haven't changed and update test accordingly
