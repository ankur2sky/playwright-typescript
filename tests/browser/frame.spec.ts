import { test, expect } from '@playwright/test';

test('Frame Handling scenario', async ({ page }) => {
  await page.goto('https://www.formsite.com/templates/human-resources/employment-application-form/');
  await page.locator('img[title="Employment-Application-Forms-and-Examples"]').click();
  let iframelocator= page.frameLocator('#frame-one1704441643');
  await iframelocator.getByRole('textbox',{name:'First Name'}).fill('automation testing');
});