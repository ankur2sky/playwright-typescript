import { test, expect } from '@playwright/test';

test('Google Search Test Case', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.getByRole('combobox',{name:'Search'}).fill('Data Engineer');
  await page.getByText('Data Engineer Jobs').click();
  await page.pause()

});