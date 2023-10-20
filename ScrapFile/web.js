import { scraper } from "./scraper.js";

const url = "https://github.com/";
// const url = "https://bot.sannysoft.com/";

const web = async () => {
  await scraper(url);
};

export { web };
