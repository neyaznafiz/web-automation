import dotenv from "dotenv/config";
import puppeteer from "puppeteer-extra";
import { autoScroll } from "./autoScroll.js";
import { setTimeout } from "timers/promises";
import StealthPlugin from "puppeteer-extra-plugin-stealth"
import { executablePath } from "puppeteer";

puppeteer.use(StealthPlugin())

const scraper = async (url, searchContent) => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    userDataDir: "temporary",
    executablePath: executablePath()
  });

  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 30000,
  });

  await page.keyboard.press('Enter');

  await page.waitForSelector('.gLFyf');
  await page.type('.gLFyf', searchContent);

  await page.keyboard.press('Enter');

  await page.waitForNavigation();
  
  await page.waitForSelector(".yuRUbf a")
  await page.click(".yuRUbf a")

  await setTimeout(2000);
  await autoScroll(page)

  await setTimeout(4000);

  await browser.close();
};

export { scraper };
