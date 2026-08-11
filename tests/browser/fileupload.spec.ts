import { test, expect } from '@playwright/test';

test('Single File Upload', async ({ page }) => {

  await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
  await page.locator('input#single-file').setInputFiles('C:/Users/ankur/Downloads/1000028595.jpg');
  await page.waitForTimeout(3000);
  await page.locator('input#single-file').setInputFiles([]);
  await page.pause()
});

test('Multiple File Upload', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
  await page.locator('input#multi-file').setInputFiles([
   'C:/Users/ankur/Downloads/1000028595.jpg',
   'C:/Users/ankur/OneDrive/Desktop/Desktop/Resume/Ankur_Resume.docx' 
  ])
  await page.waitForTimeout(3000);
  await page.locator('input#multi-file').setInputFiles([]);
  await page.pause();
});

test('file upload when type = file not there', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
  let [fileupload] =await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('#custom-upload-btn').click()
  ])
  fileupload.setFiles([  'C:/Users/ankur/Downloads/1000028595.jpg',
   'C:/Users/ankur/OneDrive/Desktop/Desktop/Resume/Ankur_Resume.docx' ])
   await page.waitForTimeout(3000);
    fileupload.setFiles([])
   await page.pause();
});