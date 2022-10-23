#!/usr/bin/env node

const lib = require("./lib.js");

if (process.argv <= 3) {
  console.log("IP");
  process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
  .slice(3, process.argv.length)
  .map((n) => parseFloat(n));
// index 3 ~ last index to parse float

if (numbers.some((n) => isNaN(n))) {
  console.log("SN");
  process.exit(1);
}

let result;

switch (command) {
  case "sum":
  case "avg":
  case "max":
  case "med":
  case "iqr":
    result = lib[command](numbers);
    if (result) console.log(result);
    break;
  case "outlier":
    result = lib[command](numbers);
    if (result) result.map((num) => console.log(num));
    break;
}
