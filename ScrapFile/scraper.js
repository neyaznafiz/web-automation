import fs from "fs";
import puppeteer from "puppeteer";
import {setTimeout} from "timers/promises"

const scraper = async (url, elements, contentElement) => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: "temporary",
    defaultViewport: { width: 1480, height: 1080 },
  });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 60000,
  });

  await page.waitForSelector(elements);
  await page.waitForSelector(contentElement);

  const allCategories = await page.evaluate((allElementSelector, contentSelector) => {
      const categories = document.querySelectorAll(allElementSelector);
      const content = Array.from(categories).map((category) => {
        const result = category.querySelector(contentSelector).innerText;

        return { result };
      });

      return content;
    }, elements, contentElement );


  // Save Scraping data into a json file
  let splitsUrl = url.split(".")
  fs.writeFile(`data/${splitsUrl[1]}.json`, JSON.stringify(allCategories), (err) => {
    if (err) throw err;
    console.log(`Scrap Successful form ${splitsUrl[1]}.`);
  });

  // Close the browser
  await setTimeout(2000)
  await browser.close();
};

export { scraper };
