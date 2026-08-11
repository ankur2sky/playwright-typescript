import { test, expect, Locator } from '@playwright/test';

test('Assignment full Table Data Print', async ({ page }) => {
  await page.goto('https://qavbox.github.io/demo/webtable/');
  let header:String[]=await page.locator('table#table02').locator('thead tr th').allInnerTexts();
  let rowCount:number=await page.locator('table#table02').locator('tbody').locator('tr').count();
  console.log(rowCount)
  let title =[]
  let filteredData:string[][]=[]
  for(let ele of header){
    title.push(ele)
  }
  for (let i=0;i<=rowCount;i++){
   
    let body = await page.locator('table#table02').locator('tbody').locator('tr').nth(i).locator('td').allInnerTexts()
    if(body.length>0){
    filteredData.push(body)
    }
    
  }

  console.log(title)
  console.log(filteredData)
 
});