import puppeteer from "puppeteer";

const url = "https://www.google.com/";

const main = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    ignoreDefaultArgs: ['--disable-extensions'],
});
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: "web-scraping.png" });
  await browser.close();
};

main();
