import { test, expect } from '@playwright/test';

test('LocatorChaining', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page.locator('form').getByRole('textbox',{name:'E-Mail Address'}).fill('test@test1.com');
  await page.locator('form').getByRole('textbox',{name:'Password'}).fill('12345');
  await page.locator('#column-right').getByRole('link',{name:'Login'}).click();
});