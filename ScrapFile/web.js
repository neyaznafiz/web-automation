import { scraper } from "./scraper.js";

const url = "https://www.devconfbd.com";

const web = async () => {
  await scraper(url);
};

export { web };
