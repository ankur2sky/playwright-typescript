import { test, expect } from '@playwright/test';

test('fetchtextboxtext', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  await page.getByRole('textbox',{name:'First Name'}).fill('Ankur');
  let firstnameValue=await page.getByRole('textbox',{name:'First Name'}).inputValue();
  console.log(firstnameValue)

  


});