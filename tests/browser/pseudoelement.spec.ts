import { test, expect } from '@playwright/test';

test('pseudo element test', async ({ page }) => {
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

//

let contentValue = await page.evaluate(()=>{
return window.
getComputedStyle(document.querySelector('label[for="input-firstname"]')!,'::before')
.getPropertyValue('content')});

let contentColor = await page.evaluate(()=>{
return window.
getComputedStyle(document.querySelector('label[for="input-firstname"]')!,'::before')
.getPropertyValue('color')});

console.log(contentColor);
console.log(contentValue)




});