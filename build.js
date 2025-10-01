import spawn from 'cross-spawn';
import toml from '@iarna/toml';
import fs from 'fs';
import path from 'path';
import pngToIco from 'png-to-ico';

let base_url = "/";

if (process.env.CF_PAGES_BRANCH === "main") {
  base_url = "https://nathanv.me/";
} else if (process.env.CF_PAGES_URL) {
  base_url = process.env.CF_PAGES_URL;
}

console.log(`Using base url "${base_url}"`);

var cmd;
cmd = spawn.sync(
  "npx",
  ["hugo", "--logLevel", "info", "--cleanDestinationDir", "--minify", "-b", base_url],
  { encoding: "utf8" }
);

if (cmd.error) {
  console.log("ERROR: ", cmd.error);
  process.exit(cmd.status);
}

console.log(cmd.stdout);
console.error(cmd.stderr);

// make a favicon at the root directory
let hugo_config = toml.parse(fs.readFileSync("hugo.toml"));
let color = hugo_config.params.themeColor;
let png_file = path.join("public", "img", "theme-colors", `${color}.png`);

pngToIco(png_file)
  .then((buf) => {
    fs.writeFileSync(path.join("public", "favicon.ico"), buf);
  })
  .catch(console.error);
