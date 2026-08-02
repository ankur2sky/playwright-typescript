import { test, expect, Locator } from '@playwright/test';

test('assignment on multiple element', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/logout');
  let allfooterlinks:Locator[]= await page.locator('footer ul.list-unstyled a').all();
  let footerLinkCount=allfooterlinks.length;

  console.log(footerLinkCount);

  for(let ele of allfooterlinks){
   await ele.click();
   let headingText = await page.getByRole('heading').first().textContent();
   console.log(headingText);
   await page.goBack();
   await page.waitForLoadState('load');
  }
});
