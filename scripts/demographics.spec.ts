import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

/**
 * Demographics Tab Demonstration
 * Automated test that demonstrates the Demographics tab functionality
 * with overlay annotations for video recording
 * 
 * Based on: demographics.md script
 * Target Duration: <5 minutes
 * 
 * Credentials: Loaded from .env file (WEBCHART_USERNAME, WEBCHART_PASSWORD)
 */

const WEBCHART_URL = process.env.WEBCHART_URL || 'https://masterdaily.dev.webchart.app/';

// Use saved authentication state
test.use({ storageState: path.join(__dirname, '../.auth/webchart-session.json') });

// Overlay helper function
async function showOverlay(page: any, text: string, duration: number = 2000) {
  await page.evaluate(({ text, duration }) => {
    // Remove any existing overlay
    const existing = document.getElementById('demo-overlay');
    if (existing) existing.remove();

    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'demo-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.85);
      color: white;
      padding: 15px 30px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: bold;
      z-index: 10000;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      max-width: 80%;
      text-align: center;
    `;
    overlay.textContent = text;
    document.body.appendChild(overlay);

    // Auto-remove after duration
    setTimeout(() => {
      const el = document.getElementById('demo-overlay');
      if (el) el.remove();
    }, duration);
  }, { text, duration });

  await page.waitForTimeout(duration);
}

// Highlight element helper
async function highlightElement(page: any, selector: string, duration: number = 1500) {
  await page.evaluate(({ selector, duration }) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    
    // Create highlight overlay
    const highlight = document.createElement('div');
    highlight.className = 'demo-highlight';
    highlight.style.cssText = `
      position: fixed;
      top: ${rect.top - 5}px;
      left: ${rect.left - 5}px;
      width: ${rect.width + 10}px;
      height: ${rect.height + 10}px;
      border: 3px solid #00ff00;
      border-radius: 4px;
      z-index: 9999;
      pointer-events: none;
      animation: pulse 0.5s ease-in-out;
    `;
    
    document.body.appendChild(highlight);

    // Remove after duration
    setTimeout(() => {
      const highlights = document.querySelectorAll('.demo-highlight');
      highlights.forEach(h => h.remove());
    }, duration);
  }, { selector, duration });

  await page.waitForTimeout(duration);
}

test.describe('Demographics Tab Demonstration', () => {
  test.beforeEach(async ({ page }) => {
    // Set viewport for consistent video recording
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('Complete Demographics Tab Walkthrough', async ({ page }) => {
    // Chapter 1: Introduction
    await showOverlay(page, 'Demographics Tab Demonstration', 3000);
    
    // Navigate to WebChart home page (already authenticated)
    await page.goto(WEBCHART_URL);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);

    // Chapter 2: Navigation
    await showOverlay(page, 'Step 1: Navigate to Patient Chart', 2000);
    
    // Navigate to patient chart via OmniScope search
    await page.getByRole('searchbox', { name: 'Search' }).fill('TEST-10019');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);

    await showOverlay(page, 'Step 2: Navigate to Admin > Demographics', 2500);
    
    // Expand Admin section
    await page.getByText('Admin (').click();
    await page.waitForTimeout(500);
    
    // Click Demographics
    await page.getByRole('link', { name: 'Demographics', exact: true }).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Chapter 3: Demographics Header
    await showOverlay(page, 'Demographics Header: Patient Information & Photo', 3000);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    await page.waitForTimeout(1000);

    // Chapter 4: Demographic Information Section
    await showOverlay(page, 'Demographic Information: Name, Address, Contact Details', 3000);
    await page.waitForTimeout(500);

    // Scroll to show edit icons
    await showOverlay(page, 'Edit Icons: Click pencil to modify any field', 2500);
    await page.waitForTimeout(500);

    // Chapter 5: Employment & Marital Information
    await page.evaluate(() => {
      const employmentSection = document.querySelector('h2:has-text("Employment Information")');
      if (employmentSection) {
        employmentSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await page.waitForTimeout(1000);
    
    await showOverlay(page, 'Employment Information: Employer, Status, Location', 2500);
    await page.waitForTimeout(500);

    await page.evaluate(() => {
      const maritalSection = document.querySelector('h2:has-text("Marital / Contact Information")');
      if (maritalSection) {
        maritalSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await page.waitForTimeout(1000);
    
    await showOverlay(page, 'Marital Status & Emergency Contacts', 2500);
    await page.waitForTimeout(500);

    // Chapter 6: Contacts & Relationships
    await page.evaluate(() => {
      const contactsSection = document.querySelector('h2:has-text("Contacts / Relationships")');
      if (contactsSection) {
        contactsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await page.waitForTimeout(1000);
    
    await showOverlay(page, 'Relationships: Providers, Employers, Pharmacies', 2500);
    await page.waitForTimeout(500);

    // Chapter 7: Other Data
    await page.evaluate(() => {
      const otherDataSection = document.querySelector('h2:has-text("Other Data")');
      if (otherDataSection) {
        otherDataSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await page.waitForTimeout(1000);
    
    await showOverlay(page, 'Other Data: Birth Sex, Gender Identity, Comments', 2500);
    await page.waitForTimeout(500);

    // Scroll to show Employee Numbers and Chart Types
    await page.evaluate(() => {
      const empNumbersSection = document.querySelector('h2:has-text("Employee Numbers")');
      if (empNumbersSection) {
        empNumbersSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await page.waitForTimeout(1000);
    
    await showOverlay(page, 'Employee Numbers & Chart Types', 2000);
    await page.waitForTimeout(500);

    // Chapter 8: Insurance Summary
    await page.evaluate(() => {
      const insuranceSection = document.querySelector('legend:has-text("Insurance Summary")');
      if (insuranceSection) {
        insuranceSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await page.waitForTimeout(1000);
    
    await showOverlay(page, 'Insurance Summary: View & Manage Policies', 3000);
    await page.waitForTimeout(1000);

    await showOverlay(page, 'Add New Insurance: Click "Add Insurance" button', 2000);
    await page.waitForTimeout(500);

    await showOverlay(page, 'Edit Insurance: Click "Edit" or "Card-Options"', 2000);
    await page.waitForTimeout(500);

    // Chapter 9: Duplicate Chart Detection
    await page.evaluate(() => {
      const duplicateSection = document.querySelector('legend:has-text("Matching Employees")');
      if (duplicateSection) {
        duplicateSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await page.waitForTimeout(1000);
    
    await showOverlay(page, 'Duplicate Detection: System Finds Potential Matches', 3000);
    await page.waitForTimeout(1000);

    await showOverlay(page, 'Rating System: Higher rating = Stronger match', 2500);
    await page.waitForTimeout(500);

    await showOverlay(page, 'Merge Charts: Preview before merging duplicates', 2500);
    await page.waitForTimeout(500);

    // Chapter 10: Tips & Best Practices
    await showOverlay(page, 'Tip: Always verify patient info before editing', 2500);
    await page.waitForTimeout(500);

    await showOverlay(page, 'Tip: Keep insurance information up-to-date', 2500);
    await page.waitForTimeout(500);

    await showOverlay(page, 'Tip: Review duplicate alerts to maintain data integrity', 2500);
    await page.waitForTimeout(500);

    // Scroll back to top for final view
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    await page.waitForTimeout(1500);

    await showOverlay(page, 'Demographics Tab: Complete Patient Information Hub', 3000);
    
    // Final pause for video
    await page.waitForTimeout(2000);
  });

  test('Quick Demographics Navigation Demo', async ({ page }) => {
    /**
     * Shorter version focusing on just navigation and key highlights
     * for a <3 minute video
     */
    
    await showOverlay(page, 'Quick Demographics Overview', 2500);
    
    // Navigate to WebChart (already authenticated)
    await page.goto(WEBCHART_URL);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1500);
    
    // Navigate to patient chart via OmniScope
    await page.getByRole('searchbox', { name: 'Search' }).fill('TEST-10019');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await showOverlay(page, 'Navigate: Admin > Demographics', 2000);
    await page.getByText('Admin (').click();
    await page.waitForTimeout(300);
    await page.getByRole('link', { name: 'Demographics', exact: true }).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    
    // Quick tour of sections
    await showOverlay(page, 'Patient Demographics: All information in one place', 3000);
    
    await page.evaluate(() => {
      const sections = [
        'Demographic Information',
        'Employment Information',
        'Contacts / Relationships',
        'Insurance Summary'
      ];
      
      let delay = 0;
      sections.forEach((sectionName) => {
        setTimeout(() => {
          const section = document.querySelector(`h2:has-text("${sectionName}"), legend:has-text("${sectionName}")`);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, delay);
        delay += 2000;
      });
    });
    
    await page.waitForTimeout(8000);
    
    await showOverlay(page, 'Demographics: Your complete patient information resource', 3000);
  });
});
