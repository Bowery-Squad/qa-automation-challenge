import { Page, expect } from '@playwright/test';

// make sure this file runs with your logged‑in state

/**
 * 1. Go to wikipedia.org
 * 2. Go to the “Artificial intelligence” page
 * 3. Click “View history”
 * 4. Assert the most recent edit was made by *username*
 */

export async function run(page: Page, params: {}) {

    const searchInput = page.getByRole('searchbox', { name: 'Search Wikipedia' });

    // 1
    await page.goto('https://www.wikipedia.org/');
 
    
    // 2


    // 3


    // 4.

}
