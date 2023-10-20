import { web } from "./ScrapFile/web.js";
import dotenv from "dotenv/config"

const main = async () => {
  // await daraz();
  // await bikroy();
  await web();
};

main();
