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
    const template = fs.readFileSync("bin/templates/controller.tpl");
    fs.writeFileSync("controllers/" + name + ".js", template, { flag: "w+" });
    console.log("Created Controller" + name);
  }
}
