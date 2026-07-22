/**
 * Description:
 * Demonstrates Playwright multi-user testing using multiple BrowserContext instances.
 * - Creates three isolated browser contexts.
 * - Opens one page in each context.
 * - Logs in with three different user accounts.
 * - Verifies the number of browser contexts and pages.
 * - Prints cookies for each context to demonstrate session isolation.
 *
 * Author: Ankur
 * Date: 21-Jul-2026
 */

import { test, expect, BrowserContext,Page } from '@playwright/test';

test('multi user test', async ({ browser }) => {
       let context1:BrowserContext = await browser.newContext();
       let context2:BrowserContext = await browser.newContext();
       let context3:BrowserContext = await browser.newContext();

       let page1:Page=await context1.newPage();
       let page2:Page=await context2.newPage();
       let page3:Page=await context3.newPage();

       await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
       await page1.locator('//input[@name="email"]').fill('rediffuser@test.com')
       await page1.locator('//input[@name="password"]').fill('qwerty')
       await page1.locator('//input[@type="submit"]').click();

       await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
       await page2.locator('//input[@name="email"]').fill('qwerty@test.com')
       await page2.locator('//input[@name="password"]').fill('qwerty')
       await page2.locator('//input[@type="submit"]').click();

       await page3.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
       await page3.locator('//input[@name="email"]').fill('testuser234@test.com')
       await page3.locator('//input[@name="password"]').fill('qwerty')
       await page3.locator('//input[@type="submit"]').click();

       console.log(browser.contexts().length);
       console.log(browser.contexts().length);

       console.log(context1.pages().length);
       console.log(context2.pages().length);
       console.log(context3.pages().length);

       console.log(await context1.cookies());
       console.log(await context2.cookies());
       console.log(await context3.cookies());

  
});