import { test, expect } from '@playwright/test';

test('accesibility test with keyboard event', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  let locator = await page.getByRole('textbox',{name:'* First Name'});
  locator.fill('Test')
  await page.keyboard.press('Tab');
  await page.keyboard.type('User');
  await page.keyboard.press('Tab');
  await page.keyboard.type('wert@test.com');
  await page.keyboard.press('Tab');
  await page.keyboard.type('1234444')
  await page.keyboard.press('Tab');
  await page.keyboard.type('12345');
  await page.keyboard.press('Tab');
  await page.keyboard.type('12345');
  await page.keyboard.press('Tab');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Space');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');

});