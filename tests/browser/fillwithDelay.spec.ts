import { test, expect } from '@playwright/test';

test('Fill with delay', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  await page.locator('#input-firstname').pressSequentially('Ankur',{delay:300});
  

});