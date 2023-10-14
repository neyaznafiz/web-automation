import puppeteer from "puppeteer";

const url = "https://overreacted.io/";

const overReacted = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    ignoreDefaultArgs: ["--disable-extensions"],
  });
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(() => {
    const articles = document.querySelectorAll("article");

    const content = Array.from(articles).slice(0, 5).map((article) => {
        const title = article.querySelector("h3").innerText;
        const link = article.querySelector("a").href;
        const paragraph = article.querySelector("p").innerText;

        return { title, link, paragraph };
      });

    return content;
  });

  console.log(allArticles);
  await browser.close();
};

export {overReacted}
