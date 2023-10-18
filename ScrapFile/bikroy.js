import { scraper } from "./scraper.js";

const url = "https://bikroy.com/en";

const bikroy = async () => {
  console.log("-- Categories From bikroy.com :");
  await scraper(url, ".category-item--1h1A1", ".info-title--3CkVD");
};

export { bikroy };
