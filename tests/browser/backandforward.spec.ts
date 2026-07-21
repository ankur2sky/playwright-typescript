/**
 * Test Name: Browser Navigation
 *
 * Description:
 * Demonstrates Playwright navigation methods:
 * - page.goto()
 * - page.goBack()
 * - page.goForward()
 * - page.reload()
 *
 * Author: Ankur
 * Date: 21-Jul-2026
 */


import { test, expect } from '@playwright/test';

test('Back and forward browser navigation', async ({ page }) => {

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    console.log(await page.title());
    console.log(await page.url());
    await page.waitForTimeout(3000);

    await page.goto("https://www.google.com");
    console.log(await page.title());
    console.log(await page.url());
    await page.waitForTimeout(2000);

    await page.goBack();
    console.log(await page.title());
    console.log(await page.url());
    await page.waitForTimeout(2000);

    await page.goForward();
    console.log(await page.title());
    console.log(await page.url());
    await page.waitForTimeout(2000);

    await page.reload();

});