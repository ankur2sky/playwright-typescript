import { test, expect, Locator } from '@playwright/test';

test('Bowling Scorecard Assignment', async ({ page }) => {
  await page.goto('https://www.cricinfo.com/series/india-in-sri-lanka-2026-1543999/sri-lanka-cricket-xi-vs-india-tour-match-1548444/full-scorecard');
  await page.getByRole('button', { name: 'Accept All' }).click();
  
let bowlingTable:Locator[] = await page
  .locator('table.ds-table-auto')
  .filter({has: page.locator('thead th')}).filter({ hasText: 'Bowling' }).
  filter({ hasText: 'Mohammed Siraj' }).all();

  for (let ele of bowlingTable){
     console.log(await ele.allInnerTexts());
  }


});
