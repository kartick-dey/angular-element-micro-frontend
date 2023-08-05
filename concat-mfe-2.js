const concat = require("concat");

(async function build() {
  const files = [
    "./dist/microFrontend2/runtime.js",
    "./dist/microFrontend2/polyfills.js",
    "./dist/microFrontend2/main.js",
  ];
  await concat(files, "./dist/microFrontend2/microFrontend2.js");
})();
