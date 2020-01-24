const puppeteer = require('puppeteer');

const opts = {
    headless: false,
    slowMo: 100,
    timeout: 0,
    args: ['--start-maximized', '--window-size=1920,1040']
};

async function setupDriver() {
    const browser = await puppeteer.launch(opts);
    global.page = await browser.newPage();
}

module.exports = setupDriver;
