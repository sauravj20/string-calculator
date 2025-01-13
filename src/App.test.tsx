import {cleanup, render} from "@testing-library/react";
import {afterEach, describe, test} from "vitest";
import App from "./App.tsx";

describe("String Calculator UI", () => {
  afterEach(() => {
    cleanup();
  })

  test("show input box on the screen", () => {
    const {getByLabelText} = render(<App/>);

    getByLabelText("Enter Numbers");
  })

  test("show a button to calculate the sum of numbers in the input", () => {
    const {getByText} = render(<App/>);

    getByText("Add");
  })

  test("show default result as 0 on the screen", () => {
    const {getByText} = render(<App/>);

    getByText("Result: 0");
  })

})