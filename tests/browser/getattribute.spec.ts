import { test, expect } from '@playwright/test';

test('get attribute of first Name', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  let attributeValue=await page.getByRole('textbox',{name:'First Name'}).getAttribute('placeholder');
  console.log(attributeValue)
});

test('get attribute of links', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  let attributValue=await page.locator('#column-right').getByRole('link', { name: 'Login' }).getAttribute('href')
  console.log(attributValue)
});