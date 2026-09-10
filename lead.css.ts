const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator('input[name="USERNAME"]').fill('democsr2');
    await page.locator('input[name="PASSWORD"]').fill('crmsfa');
    await page.locator('input[type="submit"]').click();

    await page.locator('a[href*="crmsfa"]').click();
    await page.locator('a[href*="lead"]').first().click();
    await page.locator('a[href*="createLead"]').click();

    await page.locator('input[name="companyName"]').fill('TestLeaf');
    await page.locator('input[name="firstName"]').fill('Cecillia');
    await page.locator('input[name="lastName"]').fill('Anbu');
    await page.locator('input[name="personalTitle"]').fill('Ms');
    await page.locator('input[name="generalProfTitle"]').fill('Tester');
    await page.locator('input[name="annualRevenue"]').fill('500000');
    await page.locator('input[name="departmentName"]').fill('Testing');

    // Source dropdown
    const source = page.locator('select[name="dataSourceId"]');

    const options = await source.locator('option').allTextContents();

    for (const option of options) {
        console.log(option.trim());
    }

    await page.locator('input[name="primaryPhoneNumber"]').fill('9876543210');

    await page.locator('input[value="Create Lead"]').click();

    await browser.close();
})();