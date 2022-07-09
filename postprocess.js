import assert from "assert";
import { copyFileSync } from "fs";
import { sync } from "glob";
import { basename, join, dirname } from "path";

const full_regex = new RegExp('^.+\.[0-9a-f]{8}\..+$');
const sub_regex = new RegExp('[0-9a-f]{8}\.');

function main() {
    // iterate through every file in the dist directory
    sync("dist/**/*").forEach((file) => {
        file_basname = basename(file);
        if (full_regex.test(file_basname)) {
            // if the file name matches the regex, then copy it
            new_file_basname = file_basname.replace(sub_regex, "");
            new_file = join(dirname(file), new_file_basname);

            console.log(`Copying ${file} to ${new_file}`);
            copyFileSync(file, new_file);
        }
    });
}

assert(process.cwd() == __dirname);
main();
