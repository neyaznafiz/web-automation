import puppeteer from "puppeteer";
import {setTimeout} from "timers/promises"

const scraper = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1480, height: 1080 },
    userDataDir: "temporary",
    // slowMo: 100,
    // ignoreDefaultArgs: ["--disable-extensions"],
  });

  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 60000,
  });

  let selector = "img[alt='guest']";
  await page.screenshot({ path: "devconf.png" });

  const guestElement = await page.waitForSelector(selector);

  await guestElement.scrollIntoView()
  await setTimeout(1000)

  await guestElement.click(selector);
  await setTimeout(1000)

  await page.screenshot({ path: "guest.png" })

  await browser.close();
};

export { scraper };
