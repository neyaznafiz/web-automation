import { scraper } from "./scraper.js";

const url = "https://www.amazon.com/";

const amazon = async () => {
  console.log("Scraping categories From amazon...");
  await scraper(url, "[data-menu-id='1'] li a", "a div");
};

export { amazon };
