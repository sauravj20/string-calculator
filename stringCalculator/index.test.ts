import {test, expect} from "vitest";
import sum from ".";

test("return 0 if numbers string is empty", () => {
  expect(sum("")).toBe(0);
})

test("return the same number when there is only one number in numbers string", () => {
  expect(sum("1")).toBe(1)
  expect(sum("2")).toBe(2)
  expect(sum("24")).toBe(24)
})

test("add multiple numbers separated by , or \\n", () => {
  expect(sum("1,2")).toBe(3)
  expect(sum("5,8,3,10")).toBe(26);
  expect(sum(firstNNaturalNumbers(99))).toBe(4950);
  expect(sum("1\n2\n3")).toBe(6);
  expect(sum("5,8\n3\n10")).toBe(26);
})

test("add numbers separated by custom delimiter when input starts with pattern //custom_delimiter\n", () => {
  expect(sum("//;\n1;2;3")).toBe(6);
  expect(sum("//[##]\n" + firstNNaturalNumbers(25, '##'))).toBe(325);
  expect(sum("//[***]\n1***2***3")).toBe(6);
  expect(sum("//[*][;][#]\n1*2;3#4")).toBe(10);
})

test("throw error if any negative number is present in the input", () => {
  expect(() => sum("1,2,-3,4,5")).toThrowError("negative numbers are not allowed -3");
  expect(() => sum("1,2,-3,-4,5")).toThrowError("negative numbers are not allowed -3,-4");
  expect(() => sum("1,-2,-3,-4,5")).toThrowError("negative numbers are not allowed -2,-3,-4");
  expect(() => sum("22,11,-44,-55,101")).toThrowError("negative numbers are not allowed -44,-55");
})

test("ignore numbers larger than 1000 while adding", () => {
  expect(sum("1,2,1002")).toBe(3);
  expect(sum("1,2,4,5,1002")).toBe(12);
})

function firstNNaturalNumbers(count: number, delimiter: string = ',') {
  const result: number[] = [];
  for (let i = 1; i <= count; i++) {
    result.push(i);
  }
  return result.join(delimiter);
}
