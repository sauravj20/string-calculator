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

test("when input is 1 and 2 separated by a ',' add them to return 3", () => {
  expect(sum("1,2")).toBe(3)
})

test("when input is 5 and 6 separated by a ',' add them to return 11", () => {
  expect(sum("5,6")).toBe(11)
})