import { test, expect } from '@playwright/test';

test('WebTable Handling', async ({ page }) => {
  await page.goto('https://qavbox.github.io/demo/webtable/');
  await page
  .locator('#table01')
  .locator('tr')
  .filter({hasText:'GUI'})
  .getByRole('checkbox')
  .click()
  await page
  .locator('#table01')
  .locator('tr')
  .filter({hasText:'Functional'})
  .getByRole('checkbox')
  .click()
  await page
  .locator('#table01').locator('tr').filter({hasText:'QTP'}).getByRole('checkbox').click()
  await page.locator('#table01').locator('tr').filter({hasText:'Performance'}).getByRole('checkbox').click()
  await page.locator('#table01').locator('tr').filter({hasText:'Performance'})
  .getByRole('button',{name:'Delete'}).click();
  let astonCoxOfficename=
  await page
  .locator('#table02')
  .locator('tr')
  .filter({hasText:'Ashton Cox'})
  .locator('td')
  .nth(2)
  .allInnerTexts();
  console.log(astonCoxOfficename);

  let countColumn = await page.locator('#table02 tr th').count()
  console.log(countColumn)
  let countRow = await page.locator('#table02 tr').count()
  console.log(countRow-1)





  

});