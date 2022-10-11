const { test, expect } = require("@jest/globals");

const lib = require("./lib");

test("sum", () => {
  expect(lib.sum([1, 2])).toBe(3);
});

test("avg", () => {
  expect(lib.avg([-5, 5])).toBe(0);
});

test("max", () => {
  expect(lib.max([0, 3, 2])).toBe(3);
});
