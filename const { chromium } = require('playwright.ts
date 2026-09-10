const { chromium } = require('playwright');

(async () => {

    // Edge browser
    const edge = await chromium.launch({
        channel: 'msedge',
        headless: false
    });

    const edgePage = await edge.newPage();

    await edgePage.goto('https://www.redbus.in');

    console.log("Red Bus Title:", await edgePage.title());
    console.log("Red Bus URL:", edgePage.url());


    // WebKit browser
    const webkit = await chromium.webkit.launch({
        headless: false
    });

    const webkitPage = await webkit.newPage();

    await webkitPage.goto('https://www.flipkart.com');

    console.log("Flipkart Title:", await webkitPage.title());
    console.log("Flipkart URL:", webkitPage.url());


    // Keep browsers open
    await edgePage.waitForTimeout(5000);
    await webkitPage.waitForTimeout(5000);

    await edge.close();
    await webkit.close();

})();