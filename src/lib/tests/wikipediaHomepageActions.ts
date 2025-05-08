import { Page, expect, test } from '@playwright/test';

// reuse your login.json so you stay signed‑in
test.use({ storageState: 'src/auth/login.json' });

/**
 * Instructions:
 * 1. Navigate to Wikipedia's homepage.
 * 2. Assert there are less than 7,000,000 articles in English.
 * 3. Appearance menu:
 *   - Assert the page's text gets smaller when the 'Small' text size option is selected.
 *   - Assert the page's text gets larger when the 'Large' text size option is selected.
 *   - Assert the page's text goes back to the default size when the 'Standard' text size option is selected.
 */

export async function run(page: Page, params: {}) {
  // 1
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');


  // 2.
  const countLink = page.getByRole('link', { name: /^\d{1,3}(,\d{3})*$/ });
  const raw = await countLink.innerText();


  // 3.
  
}

test('Perform Wikipedia homepage actions and validate counts & text‑size', async ({ page }) => {
  await run(page, {});
});
