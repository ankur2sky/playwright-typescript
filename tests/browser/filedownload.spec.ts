import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test('Filedownload test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  // Creation of event for file download

   let [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator('a[href="download/some-file.txt"]').click()
      
   ])

   //Verify that there is no error during download
   expect(await download.failure()).toBeNull;

   //Get the file name
   console.log('file name: ',download.suggestedFilename());

   //Save the file at specific path
   let filePath = './downloads' + download.suggestedFilename();
   await download.saveAs(filePath);

   //verify the file exists
  expect(fs.existsSync(filePath)).toBeTruthy();

  //verify the file size is > 0
  let filesize = fs.statSync(filePath).size;
  console.log('filesize in bytes ',filesize);
  expect(filesize).toBeGreaterThan(0);

   


});