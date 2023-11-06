#!/usr/bin/env node
const fs = require("fs");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const [type, name] = argv._;

if (type === "make:controller") {
  try {
    fs.readFileSync("controllers/" + name + ".js");
    console.log("File exists");
  } catch (error) {
    fs.writeFileSync("controllers/" + name + ".js", "Hello", { flag: "w+" });
    console.log("Created Controller" + name);
  }
}
