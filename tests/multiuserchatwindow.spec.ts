import { test, expect, BrowserContext, Page } from '@playwright/test';

test('multi user chat window', async ({ browser }) => {
                   
        let context1:BrowserContext =  await browser.newContext();
        let context2:BrowserContext =  await browser.newContext();
        let context3:BrowserContext =  await browser.newContext();
        let context4:BrowserContext =  await browser.newContext();
                   
        let page1:Page = await context1.newPage();
        let page2:Page = await context2.newPage();
        let page3:Page = await context3.newPage();
        let page4:Page = await context4.newPage();

        await page1.goto("http://localhost:3000/");
        await page2.goto("http://localhost:3000/");
        await page3.goto("http://localhost:3000/");
        await page4.goto("http://localhost:3000/");

        await page1.locator("//input[@id='usernameInput']").fill("U1");
        await page1.locator("//button[@id='joinBtn']").click();
        await page1.locator("//input[@id='messageInput']").fill("Hi U2");
        await page1.locator("//button[@id='sendBtn']").click();

        await page2.locator("//input[@id='usernameInput']").fill("U2");
        await page2.locator("//button[@id='joinBtn']").click();
        await page2.locator("//input[@id='messageInput']").fill("Hi U1");
        await page2.locator("//button[@id='sendBtn']").click();

        await page3.locator("//input[@id='usernameInput']").fill("U3");
        await page3.locator("//button[@id='joinBtn']").click();
        await page3.locator("//input[@id='messageInput']").fill("Hi U4");
        await page3.locator("//button[@id='sendBtn']").click();

        await page4.locator("//input[@id='usernameInput']").fill("U4");
        await page4.locator("//button[@id='joinBtn']").click();
        await page4.locator("//input[@id='messageInput']").fill("Hi U3");
        await page4.locator("//button[@id='sendBtn']").click();

    






});