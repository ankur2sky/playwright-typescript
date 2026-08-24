import { test, expect } from '@playwright/test';

test('kill random popup test', async ({ page }) => {
  

  await page.addLocatorHandler(
    page.getByRole('button',{name:'Allow all'}),
      async (allowbtn)=>
      {
      await allowbtn.click();
      console.log('Button is accepted');
      })

     await page.goto('https://orangehrm.com/contact-sales');
     await page.getByRole('textbox', { name: 'Full Name' }).fill('rahul');

});

test('cricinfo popup handler', async ({ page }) => {

   await page.addLocatorHandler(page.getByRole('button',{name:'Accept All'}),
   async(acceptButton)=>{
   await acceptButton.click();
   console.log("Click accept button for cric info website");
  })
  await page.goto('https://www.cricinfo.com/');
  await page.getByRole('link',{name:'Live Scores'}).hover();
 
});