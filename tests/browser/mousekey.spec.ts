import { test, expect } from '@playwright/test';

test('right click test case', async ({ page }) => {
  
   await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

   await page.getByText("right click me",{exact:true}).click({button:"right"});
   await page.getByText("Copy",{exact:true}).click()

});

test('drag and drop test case', async ({ page }) => {

    await page.goto('https://jqueryui.com/droppable/');
    let frameLocator= page.frameLocator('iframe[class="demo-frame"]');
    let source = frameLocator.locator('#draggable');
    let target = frameLocator.locator('#droppable');
  
    await source.dragTo(target);
  
});

test('menu and submenu level test', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');
    await page.getByText('Travel Policies',{exact:true}).hover();
    await page.getByText('Travel Policies',{exact:true}).waitFor({state:'visible'});
    await page.getByText('Travel Policies',{exact:true}).click();
 
});

test('menu and level 4 submenu handling test', async ({ page }) => {
await page.goto('https://www.bigbasket.com/');
await page.getByText('Shop by',{exact:true}).last().click();
await page.locator("[id='headlessui-menu-items-:R15d956:']").locator('[style="width:auto!important"]').
locator('ul').locator('li').getByRole('link',{name:'Electronics'}).hover();

await page.locator('ul').locator('li').getByRole('link',{name:'Audio devices',exact:true}).nth(1).click()
//await page.locator('nav').locator('ul').
//locator('li').getByRole('link',{name:'Earbuds',exact:true}).nth(1).click()
});
