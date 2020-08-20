const ghPages = require("gh-pages");

const URL = "https://invalidtoken.github.io/personal-website/";

console.log("Started Publishing");

ghPages.publish("out", { add: true }, (err) => {
  if (err) {
    console.log("[ERROR] " + err.message);
    return;
  }

  console.log(`[INFO] - Published, check on ${URL}`);
});
