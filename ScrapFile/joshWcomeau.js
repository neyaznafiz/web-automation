import { blogScraper } from "./blogScraper.js";

const url = "https://www.joshwcomeau.com/";

const joshWcomeau = async () => {
  await blogScraper(url, "article", "h3", "p");
};

export { joshWcomeau };
