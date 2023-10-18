import { scraper } from "./scraper.js";

const url = "https://www.daraz.com.bd/";

const daraz = async () => {
  console.log("-- Categories From daraz :");
  await scraper(url, ".lzd-site-menu-root-item", ".txt-holder");
};

export { daraz };
