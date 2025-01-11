import {test, expect} from "vitest";
import sum from ".";

test("return 0 if numbers string is empty", () => {
  expect(sum("")).toBe(0);
})

test("return 1 if numbers string contains only one element which is 1", () => {
  expect(sum("1")).toBe(1);
})

test("return 2 if numbers string contains only one element which is 2", () => {
  expect(sum("2")).toBe(2);
})

test("return 24 if numbers string contains only one element which is 24", () => {
  expect(sum("24")).toBe(24);
})