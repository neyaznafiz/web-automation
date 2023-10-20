import { scraper } from "./scraper.js";

const url = "https://www.google.com/";
const searchContent = "neyaz nafiz"

const web = async () => {
  await scraper(url, searchContent);
};

export { web };
