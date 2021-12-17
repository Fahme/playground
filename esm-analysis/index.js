const { init, parse } = require("es-module-lexer");
const { readFileSync } = require("fs");

async function esmAnalysis() {
  const code = readFileSync("./modules-test/third.js", "utf8");

  await init;

  const [imports, exports] = parse(code);

  for (const currentImport of imports) {
    console.log(code.substring(currentImport.s, currentImport.e));
  }
}

esmAnalysis();
