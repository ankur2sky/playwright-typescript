import { test, expect } from '@playwright/test';

test('screener pagination', async ({ page }) => {
  await page.goto('https://www.screener.in/home/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ankurrathore4u@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('SOCuat2026');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Screens' }).click();
  await page.getByText('Margin Expansion', { exact: true }).first().click();
  await page.getByText('10', { exact: true }).click();

  
  
  let AllPageCompanies:string[]=[];
  let numberofCompanies:number=0;

  while(true){

  let locatorrows=await page.locator('table.data-table>tbody >tr>td>a').all();
  for(let i=0;i<locatorrows.length;i++)
  { 
   let companies:string = await locatorrows[i].innerText();
   AllPageCompanies.push(companies);
  }

  let nextLink= await page.getByRole('link', { name: 'Next' });
   
  if (await nextLink.count()===0)
  {
    break;
  }

await nextLink.click();
}
  console.log(AllPageCompanies.join("\n"));
  console.log('Total number of companies : ',AllPageCompanies.length);


});

