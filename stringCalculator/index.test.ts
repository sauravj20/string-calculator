import {test, expect} from "vitest";
import sum from ".";

test("returns 0 if numbers string is empty", () => {
  expect(sum("")).toBe(0);
})