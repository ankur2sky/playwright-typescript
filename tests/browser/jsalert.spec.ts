import { test, expect } from '@playwright/test';

test('Javascript Alert', async ({ page }) => {

  page.on('dialog',async(popup)=>{
   if(popup.type()==='alert'){
    console.log(popup.message())
    await popup.accept();
   }});

   page.on('dialog',async(popup)=>{
    if(popup.type()==='confirm'){
        console.log(popup.message())
        await popup.accept()
    }});

    page.on('dialog',async(popup)=>{
       if(popup.type()==='prompt'){
        console.log(popup.message())
        await popup.accept('Accept')
       }

    })
  
  
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  await page.getByRole('button',{name:'Click for JS Alert'}).click();
  await page.waitForTimeout(3000);

  await page.getByRole('button',{name:'Click for JS Confirm'}).click();
  await page.waitForTimeout(3000);

  await page.getByRole('button',{name:'Click for JS Prompt'}).click();
  await page.waitForTimeout(3000);


});