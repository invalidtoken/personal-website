/**
 * gh-pages documentation
 * Link - https://github.com/tschaub/gh-pages
 */
const ghPages = require("gh-pages");

const URL = "https://invalidtoken.github.io/personal-website/";

console.log("Started Publishing");

/**
 * add option
 * Link - https://github.com/tschaub/gh-pages#optionsadd
 */
ghPages.publish("out", { add: true }, (err) => {
  if (err) {
    console.log("[ERROR] " + err.message);
    return;
  }

  console.log(`[INFO] - Published, check on ${URL}`);
});
