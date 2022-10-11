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

let sum = 0,
  avg = 0,
  max = 0;

switch (command) {
  case "sum":
    result = lib.sum(numbers);
    break;
  case "avg":
    result = lib.avg(numbers);
    break;
  case "max":
    result = lib.max(numbers);
    break;
}

console.log(result);
