import puppeteer from "puppeteer";

const url = "https://www.joshwcomeau.com/";

const main = async () => {
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
        const link = article.querySelector("a");
        const url = link.href;
        const paragraph = link.querySelector("p").innerText;

        return { title, url, paragraph };
      });

    return content;
  });

  console.log(allArticles);
  await browser.close();
};

main();
