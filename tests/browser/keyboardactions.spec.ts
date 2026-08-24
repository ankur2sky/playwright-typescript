import { test, expect } from '@playwright/test';

test('keyboard actions', async ({ page }) => {
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/logout');
let searchLocator= await page.getByRole('textbox',{name:'Search'});
searchLocator.fill('Tester');
searchLocator.press('Enter');
});