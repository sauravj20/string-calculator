import {expect, test} from "vitest";
import NumberStringParser from "./NumberStringParser";

test("return empty list when input is empty", () => {
  expect(new NumberStringParser("").extractNumbers()).toEqual([]);
})

test("return all the numbers separated by ','", () => {
  expect(new NumberStringParser("1,2").extractNumbers()).toEqual([1,2])
  expect(new NumberStringParser("5,6").extractNumbers()).toEqual([5,6])
  expect(new NumberStringParser("1,2,3").extractNumbers()).toEqual([1,2,3]);
  expect(new NumberStringParser("5,8,3,10").extractNumbers()).toEqual([5,8,3,10]);
})

test("return all the numbers separated by '\\n' or ','", () => {
  expect(new NumberStringParser("1\n2").extractNumbers()).toEqual([1,2]);
  expect(new NumberStringParser("1\n2\n3").extractNumbers()).toEqual([1,2,3]);
  expect(new NumberStringParser("1\n2,3").extractNumbers()).toEqual([1,2,3]);
  expect(new NumberStringParser("5,8\n3\n10").extractNumbers()).toEqual([5,8,3,10]);
})

test("return numbers separated by customer delimiter when input starts with pattern '//custom_delimiter\\n'", () => {
  expect(new NumberStringParser("//;\n1;2;3").extractNumbers()).toEqual([1,2,3]);
  expect(new NumberStringParser("//#\n1#2#3").extractNumbers()).toEqual([1,2,3]);
})

test("can use regex special characters as custom delimiter", () => {
  expect(new NumberStringParser("//*\n1*2*3").extractNumbers()).toEqual([1,2,3]);
  expect(new NumberStringParser("//[\n1[2[3").extractNumbers()).toEqual([1,2,3]);
})

test("use multi character custom delimiter when the input starts with the pattern '//[custom_delimiter]\\n'", () => {
  expect(new NumberStringParser("//[***]\n1***2***3").extractNumbers()).toEqual([1,2,3]);
  expect(new NumberStringParser("//[#@]\n1#@2#@3").extractNumbers()).toEqual([1,2,3]);
})