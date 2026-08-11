import { test, expect } from '@playwright/test';

test('jsalert assignment', async ({ page }) => {


  await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

  await page.getByRole('button',{name:'Log In'}).click()
  page.on('dialog',async(popup)=>{
   if(popup.type()==='alert'){
   console.log(popup.message())
   await popup.accept();
   }})

  await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
  page.locator('input#login1.email-input').fill('ssssskks');
  await page.getByRole('button',{name:'Log In'}).click();
  page.on('dialog',async(popup)=>{
  if(popup.type()==='alert'){
    console.log(popup.message())
    await popup.accept();
  }

  })
});