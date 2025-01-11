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

test("when input has multiple numbers separated by ',' add all of them to return the sum", () => {
  expect(sum("1,2")).toBe(3)
  expect(sum("5,6")).toBe(11)
  expect(sum("1,2,3")).toBe(6);
  expect(sum("5,8,3,10")).toBe(26);
  expect(sum(firstNNaturalNumbers(50))).toBe(1275);
  expect(sum(firstNNaturalNumbers(99))).toBe(4950);
})

test("add numbers even if they are separated by '\\n' instead of ','", () => {
  expect(sum("1\n2")).toBe(3);
  expect(sum("1\n2\n3")).toBe(6);
  expect(sum("1\n2,3")).toBe(6);
  expect(sum("5,8\n3\n10")).toBe(26);
})

function firstNNaturalNumbers(count: number) {
  const result: number[] = [];
  for (let i = 1; i <= count; i++) {
    result.push(i);
  }
  return result.join(",");
}
