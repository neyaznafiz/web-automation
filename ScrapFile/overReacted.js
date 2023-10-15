import { blogScraper } from "./blogScraper.js";

const url = "https://overreacted.io/";

const overReacted = async () => {
  blogScraper(url, "article", "h3", "p");
};

export { overReacted };
