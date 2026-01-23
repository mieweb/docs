/**
 * Authentication Setup Script
 * 
 * This script logs into WebChart and saves the authentication state
 * so that tests can skip the login process and start already authenticated.
 * 
 * Run this before running tests:
 * npx playwright test scripts/auth-setup.ts
 */

import { test as setup } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const WEBCHART_URL = process.env.WEBCHART_URL || 'https://masterdaily.dev.webchart.app/';
const USERNAME = process.env.WEBCHART_USERNAME || 'dave';
const PASSWORD = process.env.WEBCHART_PASSWORD || 'dave';

const authFile = path.join(__dirname, '../.auth/webchart-session.json');

setup('authenticate to WebChart', async ({ page }) => {
  console.log('Logging into WebChart...');
  
  // Navigate to WebChart
  await page.goto(WEBCHART_URL);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000);
  
  // First, check if "Standard Login" button exists  
  const standardLoginButton = await page.getByRole('button', { name: 'Standard Login' }).isVisible().catch(() => false);
  
  if (standardLoginButton) {
    console.log('Clicking Standard Login button...');
    await page.getByRole('button', { name: 'Standard Login' }).click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
  }
  
  // Now check if login form is present - look for the username textbox
  const usernameField = page.getByRole('textbox', { name: /Username/ });
  const loginFormVisible = await usernameField.isVisible().catch(() => false);
  
  if (loginFormVisible) {
    console.log('Login form found, entering credentials...');
    
    // Fill in credentials using the textbox role
    await usernameField.fill(USERNAME);
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: /Password/ }).fill(PASSWORD);
    await page.waitForTimeout(500);
    
    // Submit login - click the Next button (first time)
    console.log('Looking for Next button...');
    await page.getByRole('button', { name: 'Next' }).click();
    console.log('First Next button clicked');
    await page.waitForTimeout(2000);
    
    // Check if there's a second Next button (two-step login process)
    const secondNextButton = page.getByRole('button', { name: 'Next' });
    const secondNextVisible = await secondNextButton.isVisible().catch(() => false);
    
    if (secondNextVisible) {
      console.log('Second Next button found (two-step login), clicking...');
      await secondNextButton.click();
      await page.waitForLoadState('networkidle', { timeout: 30000 });
      await page.waitForTimeout(3000);
    } else {
      console.log('No second Next button, waiting for navigation...');
      await page.waitForLoadState('networkidle', { timeout: 30000 });
      await page.waitForTimeout(3000);
    }
    
    console.log(`Final URL after login: ${page.url()}`);
    console.log('Login completed!');
  } else {
    console.log('Already logged in or on main page');
  }
  
  // Wait for page to fully load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  
  // Verify we're logged in by checking for any main page element
  const pageLoaded = await page.locator('body').isVisible();
  if (pageLoaded) {
    console.log('Page loaded successfully, saving authentication state...');
    
    // Log cookies to debug
    const cookies = await page.context().cookies();
    console.log(`Found ${cookies.length} cookies to save`);
    
    // Check localStorage for tokens
    const localStorage = await page.evaluate(() => {
      return JSON.stringify(window.localStorage);
    });
    console.log(`LocalStorage contents: ${localStorage}`);
    
    // Check if we see user-specific content to verify login worked
    const bodyText = await page.locator('body').textContent();
    console.log(`Page contains "dave": ${bodyText?.includes('dave')}`);
  } else {
    throw new Error('Page did not load correctly');
  }
  
  // Save the authentication state
  await page.context().storageState({ path: authFile });
  console.log(`Authentication state saved to: ${authFile}`);
});
