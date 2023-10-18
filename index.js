import { bikroy } from "./ScrapFile/bikroy.js";
import { daraz } from "./ScrapFile/daraz.js";

const main = async () => {
  await daraz();
  await bikroy();
};

main();
