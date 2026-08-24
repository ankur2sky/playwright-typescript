import { test, expect } from '@playwright/test';

test('multiple window handling', async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto('https://orangehrm.com/contact-sales');

  let [newPage1]=await Promise.all([
   context.waitForEvent('page'),
   page.getByRole('link', { name: 'E-Books' }).click()
  

  ]);

  let [newPage2] =await Promise.all([
    context.waitForEvent('page'),
     page.getByRole('link', { name: 'Blog' }).click()
  ])
  
  await newPage1.waitForLoadState();
  await newPage2.waitForLoadState();

  let allPages = context.pages();

  console.log("Total number of Pages : ",allPages.length);
  await newPage1.bringToFront()
  console.log('child window title :',await newPage1.title())
  await newPage2.bringToFront()
  console.log('child window title :',await newPage2.title())
  await page.bringToFront()
  console.log('Parent window title :',await page.title())


});