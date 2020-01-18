const puppeteer = require('puppeteer');

(async () => {
    //Creates a Headless Browser Instance in the Background
    const browser = await puppeteer.launch();

    //Creates a Page Instance, similar to creating a new Tab
    const page = await browser.newPage();

    //Navigate the page to url
    await page.goto('https://google.com');

    //Takes screenshot of the page after navigating there
    await page.screenshot({path: 'example.png'});

    const googleLogo = await page.$eval('#hplogo', img => img.src);
    console.log(googleLogo);

    //Closes the Browser Instance
    await browser.close();
})();
