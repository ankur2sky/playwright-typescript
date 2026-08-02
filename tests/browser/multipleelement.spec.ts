import { test, expect, Locator } from '@playwright/test';

test('get attribute of first Name', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  let attributeValue=await page.getByRole('textbox',{name:'First Name'}).getAttribute('placeholder');
  console.log(attributeValue)
});


test('get all the link test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

  let alllinkslocator: Locator[] =await page.locator('a[href]').all();
  console.log('Total number of links :',alllinkslocator.length )

  console.log('------------------------------------------')

  let allLinkscount= await page.locator('a[href]').count()
  console.log('All links count : ',allLinkscount) 
});

test('get all the link text test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

  let alllinkslocator: Locator[] =await page.locator('a[href]').all();
  console.log('Total number of links :',alllinkslocator.length )

  console.log('------------------------------------------')
  
  for(let ele of alllinkslocator)
  {
      let textContent = await ele.textContent()
      let attributeContent = await ele.getAttribute('href')

      console.log(textContent,' : ',attributeContent)
  }


});


test('iterate on link and click on particular  link', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

  let alllinks: Locator[] =await page.locator('a.list-group-item').all();
  console.log('Total number of links :',alllinks.length )

  console.log('------------------------------------------')
  
  for(let ele of alllinks)
  {
     await ele.highlight();
     let linktextContent = await ele.textContent()
     console.log(linktextContent)
     await page.waitForTimeout(1000);
      if (linktextContent==='Newsletter')
      {
        await ele.click();
        break;
      }
  }
  await page.pause();
});

test('get all linktext test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  let alltextContent:string[] =await page.locator('a.list-group-item').allTextContents();
  console.log(alltextContent)
  for(let ele of alltextContent){
   console.log(ele)
  }
});

test('get text with inner text', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  let allInnerText=await page.locator('a.list-group-item').allInnerTexts();
  console.log(allInnerText)
  for(let elem of allInnerText){
     console.log(elem)
  }
});

test('getting text from multiple heading', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page.getByRole('textbox',{name:'E-Mail Address'}).fill('testuser1234@test.com');
  await page.getByRole('textbox',{name:'Password'}).fill('test123');
  await page.getByRole('button',{name:'Login'}).click();
  let headline:string[]=await page.getByRole('heading',{level:2}).allInnerTexts();
  console.log(headline)
  for(let ele of headline)
  {
    console.log(ele.length)
  } 
});

