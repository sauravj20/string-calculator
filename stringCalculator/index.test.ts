import {test, expect} from "vitest";
import sum from ".";

test("return 0 if numbers string is empty", () => {
  expect(sum("")).toBe(0);
})

test("if there is only one number in numbers string return the same number", () => {
  expect(sum("1")).toBe(1)
  expect(sum("2")).toBe(2)
  expect(sum("24")).toBe(24)
})