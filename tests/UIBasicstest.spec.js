const {test} = require('@playwright/test');


test('Broswer context declaration', async ({browser})=>
{
    //step1 -open browser
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");

    //step2 -enter creds
    //await (need to use because JS is asynchronous)

});

test('First Playwright test', async ({page})=>
{
    await page.goto("https://www.google.com/");
    //
});