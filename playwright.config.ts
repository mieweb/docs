import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for Demographics video demonstrations
 * Videos are automatically recorded and saved to scripts/videos/ directory
 */
export default defineConfig({
  testDir: './scripts',
  
  // Maximum time one test can run for
  timeout: 60 * 1000,
  
  // Run tests in files in parallel
  fullyParallel: false,
  
  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,
  
  // Retry on CI only
  retries: process.env.CI ? 2 : 0,
  
  // Use single worker to ensure tests run sequentially
  workers: 1,
  
  // Reporter to use
  reporter: 'html',
  
  // Shared settings for all the projects below
  use: {
    // Base URL to use in actions like `await page.goto('/')`
    baseURL: 'https://masterdaily.dev.webchart.app',
    
    // Collect trace when retrying the failed test
    trace: 'on-first-retry',
    
    // Record video on all tests
    video: {
      mode: 'on',
      size: { width: 1920, height: 1080 }
    },
    
    // Set viewport size
    viewport: { width: 1920, height: 1080 },
    
    // Screenshot settings
    screenshot: 'only-on-failure',
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Store videos in scripts/videos directory
        video: {
          mode: 'on',
          size: { width: 1920, height: 1080 }
        },
      },
    },
  ],

  // Output folder for videos and screenshots
  outputDir: './scripts/videos',
});
