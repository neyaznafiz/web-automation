import { blogScraper } from "./blogScraper.js";

const url = "https://www.joshwcomeau.com/";

const joshWcomeau = async () => {
  blogScraper(url, "article", "h3", "p");
};

export { joshWcomeau };
