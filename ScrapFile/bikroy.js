import { scraper } from "./scraper.js";

const url = "https://www.bikroy.com/en";

const bikroy = async () => {
  console.log("Scraping categories From bikroy.com...");
  await scraper(url, ".category-item--1h1A1", ".info-title--3CkVD");
};

export { bikroy };
