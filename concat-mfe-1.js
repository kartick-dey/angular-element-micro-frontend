const concat = require("concat");

(async function build() {
  const files = [
    "./dist/microFrontend1/runtime.js",
    "./dist/microFrontend1/polyfills.js",
    "./dist/microFrontend1/main.js",
  ];
  await concat(files, "./dist/microFrontend1/microFrontend1.js");
})();
