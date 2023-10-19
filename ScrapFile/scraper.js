import puppeteer from "puppeteer";
import { autoScroll } from "./autoScroll.js";
import {setTimeout} from "timers/promises"

const scraper = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1480, height: 1080 },
    userDataDir: "temporary",
    slowMo: 100,
    // ignoreDefaultArgs: ["--disable-extensions"],
  });

  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 60000,
  });

  await page.waitForSelector('#searchbox_input');
  await page.type('#searchbox_input', "neyaz nafiz")

  await page.click('.searchbox_searchButton__F5Bwq')
  
  await page.waitForSelector('[href="https://dev.to/neyaznafiz/--3lb0"]')
  await setTimeout(2000)
  
  await page.click('[href="https://dev.to/neyaznafiz/--3lb0"]')
  await setTimeout(2000)

  // await page.waitForSelector('#reaction-drawer-trigger')
  // await page.click("#reaction-drawer-trigger")
  await setTimeout(2000)

  await page.screenshot({ path: "neyaz-blog.png" })

  await autoScroll(page)
  
  await setTimeout(4000)

  await browser.close();
};

export { scraper };

