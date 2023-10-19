import puppeteer from "puppeteer";
import {setTimeout} from "timers/promises"

const scraper = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1480, height: 1080 },
    userDataDir: "temporary",
    // slowMo: 250,
    // ignoreDefaultArgs: ["--disable-extensions"],
  });

  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 60000,
  });


  // await page.screenshot({ path: "devconf.png" });

  
  // await guestElement.scrollIntoView()
  // await setTimeout(1000)
  
  // await page.click('[title="Search"][type="search"]');
  // await page.waitForSelector(inputSelector)
  
  await page.waitForSelector('#searchbox_input');
  await page.type('#searchbox_input', "neyaz nafiz")

  await page.click('.searchbox_searchButton__F5Bwq')
  
  await page.waitForSelector('[href="https://dev.to/neyaznafiz/--3lb0"]')
  await setTimeout(2000)
  
  await page.click('[href="https://dev.to/neyaznafiz/--3lb0"]')

  await setTimeout(2000)
  await page.screenshot({ path: "neyaz-blog.png" })
  
  await setTimeout(4000)

  await browser.close();
};

export { scraper };