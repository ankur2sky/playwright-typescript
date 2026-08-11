import { test, expect, Locator } from '@playwright/test';

test('LocatorChaining', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page.locator('form').getByRole('textbox',{name:'E-Mail Address'}).fill('test@test1.com');
  await page.locator('form').getByRole('textbox',{name:'Password'}).fill('12345');
  await page.locator('#column-right').getByRole('link',{name:'Login'}).click();
});

test('Fetch Data from Webtable', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/html_tables.asp');
  let webtableElement:string[]=await page.locator('table').first().locator('tr').allInnerTexts();
  for (let ele of webtableElement){
    console.log(ele)
    console.log('----------------')
  }
});

test('Click on Multiple checkboxes on a page', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
  let checkboxlist: Locator[]=await page.locator('table#resultTable tbody tr td').getByRole('checkbox').all();
  console.log(checkboxlist.length)
  for(let ele of checkboxlist){
    await ele.click()
    await page.waitForTimeout(1000);
  }

  });
  
  test('Click on Multiple checkboxes on a page by index based for loop', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
  let checkboxlist: Locator[]=await page.locator('table#resultTable  tr td').getByRole('checkbox').all()
  console.log(checkboxlist.length)

  for(let i=1;i<checkboxlist.length;i++){
    await checkboxlist[i].click()
    await page.waitForTimeout(1000);}
  });

  test('Get Table Data from WebTable', async ({ page }) => {
  await page.goto('https://www.espncricinfo.com/series/india-in-sri-lanka-2026-1543999/sri-lanka-cricket-xi-vs-india-tour-match-1548444/full-scorecard');
  let wicketTaker:string[]=await page.locator('table.ci-scorecard-table').last().locator('tr').
  filter({hasText:'Yashasvi Jaiswal'}).locator('td').nth(1).
  locator('span span').allInnerTexts();
  console.log(wicketTaker);
});


test('Get score of each batsmen from Cricinfo scorecard', async ({ page }) => {

    await page.goto('https://www.cricinfo.com/series/india-in-sri-lanka-2026-1543999/sri-lanka-cricket-xi-vs-india-tour-match-1548444/full-scorecard');

    let rows = page.locator('table.ci-scorecard-table').last().locator('tbody tr');

    const rowCount = await rows.count();
    console.log(rowCount);

    let batsmen: string[] = [];
    let runs: string[] = [];

    for (let i = 0; i < rowCount; i++) {

        const className = await rows.nth(i).getAttribute('class');

        if (className?.includes('ds-hidden')) {
            continue;
        }

        const rowText = await rows.nth(i).innerText();

        if (rowText.includes('Extras')) {
            break;
        }

        let batsman = await rows.nth(i).locator('td').nth(0).innerText();
        let run = await rows.nth(i).locator('td').nth(2).innerText();

        const spanCount = await rows.nth(i)
            .locator('td').nth(1)
            .locator('span')
            .count();

        let finalwicketTaker = '';

        if (spanCount > 0) {

            let wickettaker = await rows.nth(i)
                .locator('td').nth(1)
                .locator('span')
                .allInnerTexts();

            finalwicketTaker = wickettaker[0].split(' b ')[1];
        }

        console.log(batsman, finalwicketTaker, run);
    }
});