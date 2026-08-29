import { test, expect } from '@playwright/test';

test('Practice page', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  await page.locator('button[class*="btn btn-link dropdown-toggle"]').click();
  await page.locator('button[name*="EUR"]').click();
  await page.waitForTimeout(5000);
  let phoneNumber = await page.locator('div>ul>li>span[class="hidden-xs hidden-sm hidden-md"]').textContent();
  console.log(phoneNumber);
  let icon = await page.locator('div>uL>li>a>i[class="fa fa-phone"]').ariaSnapshot();
  console.log(icon);
 await page.locator('uL[class="list-inline"]>li[class^="dropdown"]>a[class$="-toggle"]').click()
 await page.locator('uL[class="dropdown-menu dropdown-menu-right"]>li>a[href$="account/register"]').click();
 await page.locator('ul>li>a[id="wishlist-total"]>span[class*="hidden-sm"]').click();
 await page.locator('a[title="Shopping Cart"]>span[class*="hidden-xs"]').click();
 await page.locator('a[title="Checkout"]>span[class*="hidden-xs"]').click();



                          




});