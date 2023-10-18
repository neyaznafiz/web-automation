import puppeteer from "puppeteer";

const scraper = async (url, elements, contentElement) => {
  const browser = await puppeteer.launch({
    headless: "new",
    ignoreDefaultArgs: ["--disable-extensions"],
  });
  const page = await browser.newPage();
  await page.goto(url);

  const allCategories = await page.evaluate((allElementSelector, contentSelector) => {
      const categories = document.querySelectorAll(allElementSelector);
      const content = Array.from(categories).map((category) => {
        const result = category.querySelector(contentSelector).innerText;

        return { result };
      });

      return content;
    },
    elements,
    contentElement
  );

  console.log(allCategories);
  await browser.close();
};

export { scraper };
