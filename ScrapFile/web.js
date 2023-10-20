import { scraper } from "./scraper.js";

const url = "https://github.com/";

const web = async () => {
  await scraper(url);
};

export { web };
