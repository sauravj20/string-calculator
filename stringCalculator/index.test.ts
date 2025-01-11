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

test("when input has 3 numbers separated by ',' add all of them to return the sum", () => {
  expect(sum("1,2,3")).toBe(6);
})

test("when input has 4 numbers separated by ',' add all of them to return the sum", () => {
  expect(sum("5,8,3,10")).toBe(26);
})