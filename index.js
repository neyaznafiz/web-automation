import puppeteer from "puppeteer";

const url = "https://www.daraz.com.bd/";

const main = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    ignoreDefaultArgs: ['--disable-extensions'],
});
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: "daraz.png" });
  await browser.close();
};

main();
