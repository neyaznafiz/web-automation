import { scraper } from "./scraper.js";

const url = "https://duckduckgo.com/";

const web = async () => {
  await scraper(url);
};

export { web };
