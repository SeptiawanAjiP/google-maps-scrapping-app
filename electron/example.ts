import puppeteer from 'puppeteer';

async function runScraping() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://kedinasan.id');
    // Lakukan scraping di sini
    // await browser.close();
}

export { runScraping };