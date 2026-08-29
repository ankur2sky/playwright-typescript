import { test, expect } from '@playwright/test';

test.use({
 
    viewport:{width:400, height:400}

});

test('window size test case', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');
  await page.setViewportSize({width:500,height:600});

});

test('window size test case 2', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');


});