const {test} = require('@playwright/test');


test.only('Broswer context declaration', async ({browser})=>
{
    //step1 -open browser
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");


});

test('First Playwright test', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    console.log(await page.title());

    await page.locator("#username").fill("randomuser");
    await page.locator("[type='password']").fill("learn");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
});