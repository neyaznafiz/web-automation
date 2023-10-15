import puppeteer from "puppeteer";

const blogScraper = async (url, elements, titleElement, blogElement) => {
  const browser = await puppeteer.launch({
    headless: "new",
    ignoreDefaultArgs: ["--disable-extensions"],
  });
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate((allElementSelector, titleSelector, blogSelector) => {
    const articles = document.querySelectorAll(allElementSelector);

    const content = Array.from(articles).slice(0, 5).map((article) => {
        const title = article.querySelector(titleSelector).innerText;
        const link = article.querySelector("a").href;
        const paragraph = article.querySelector(blogSelector).innerText;

        return { title, link, paragraph };
      });

    return content;
  }, elements, titleElement, blogElement);

  console.log(allArticles);
  await browser.close();
};

export {blogScraper}
