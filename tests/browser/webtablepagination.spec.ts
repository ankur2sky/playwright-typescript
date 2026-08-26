import { test, expect } from '@playwright/test';

test('WebTable Pagination with single selection', async ({ page }) => {
  
await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

while(true)
{
// when user name on first page itself

let userNameVisibe = await page.locator('table#dataTable tr').filter({hasText:'ellis_rao'})
.first().isVisible();

if(userNameVisibe)
{
await page.locator('table#dataTable tr').filter({hasText:'ellis_rao'})
.first().getByRole('checkbox').check();
}

else {
 
    let nextElementIcon=page.getByRole('button', { name: '›' });


    let iconDisabled = await nextElementIcon.isDisabled();

    if(iconDisabled)
    {
    console.log("Pagination is disabled , Username not found");
    break;
    }  
    await nextElementIcon.click();
    await page.waitForTimeout(3000);
}
}
});

test('WebTable Pagination with multiple name selection', async ({ page }) => {
  
await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

while(true){

    let allcheckBox= await page.locator('table#dataTable tr')
                           .filter({hasText:'alex_morgan'})
                           .getByRole('checkbox').all();
    
    if (allcheckBox.length>0){
     
        for(let ele of allcheckBox){
            await ele.check();

        }  
    } 
    let nextElementIcon=page.getByRole('button', { name: '›' });

    let iconDisabled = await nextElementIcon.isDisabled();

    if(iconDisabled)
    {
    console.log("Pagination is disabled , Username not found");
    break;
    }  

    await nextElementIcon.click();
    await page.waitForTimeout(3000);

}
});