const assert = require("assert");
const fs = require("fs");
const glob = require("glob");
const path = require("path");

const full_regex = new RegExp('^.+\.[0-9a-f]{8}\..+$');
const sub_regex = new RegExp('[0-9a-f]{8}\.');

function main() {
    // iterate through every file in the dist directory
    glob.sync("dist/**/*").forEach((file) => {
        file_basname = path.basename(file);
        if (full_regex.test(file_basname)) {
            // if the file name matches the regex, then copy it
            new_file_basname = file_basname.replace(sub_regex, "");
            new_file = path.join(path.dirname(file), new_file_basname);

            console.log(`Copying ${file} to ${new_file}`);
            fs.copyFileSync(file, new_file);
        }
    });
}

assert(process.cwd() == __dirname);
main();
