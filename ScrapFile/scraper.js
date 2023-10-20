import dotenv from "dotenv/config"
import puppeteer from "puppeteer";
import { autoScroll } from "./autoScroll.js";
import { setTimeout } from "timers/promises";

const scraper = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1480, height: 1080 },
    userDataDir: "temporary",
    slowMo: 100,
  });

  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 30000,
  });

  await page?.waitForSelector('[href="/login"]');
  await page?.click('[href="/login"]');

  await page?.waitForSelector("#login_field");
  await page?.type("#login_field", process.env.NAME);

  await page?.waitForSelector("#password");
  await page?.type("#password", process.env.PASS);

  await page?.waitForSelector(".js-sign-in-button");
  await page?.click(".js-sign-in-button");

  await autoScroll(page);
  
  await page.waitForSelector('[href="/logout"]');
  await page.click('[href="/logout"]');

  await setTimeout(1000);

  await browser.close();
};

export { scraper };
