import {cleanup, render, screen} from "@testing-library/react";
import {UserEvent, userEvent} from "@testing-library/user-event";
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

  test("show the sum of numbers in the input on the screen on Add button click", async () => {
    const user = userEvent.setup()
    const {getByText, getByLabelText} = render(<App/>);

    const input = getByLabelText("Enter Numbers");
    await user.click(input);
    await user.keyboard("1,2,3,4")
    await user.click(getByText("Add"));

    getByText("Result: 10");
  })

  test("show the sum of numbers when custom delimiters are present in the input", async () => {
    const user = userEvent.setup()
    const {getByText} = render(<App/>);

    await updateInputAndAdd(user, "1,2{enter}3,4")
    getByText("Result: 10");

    await updateInputAndAdd(user, "//[[***]{enter}1***5***3***9")
    getByText("Result: 18")

    await updateInputAndAdd(user, "//[[##][[@@]{enter}1##6@@3##10")
    getByText("Result: 20")
  })

  async function updateInputAndAdd(user: UserEvent, userInput: string) {
    const input = screen.getByLabelText("Enter Numbers");
    await user.click(input);
    await user.clear(input);
    await user.keyboard(userInput)
    await user.click(screen.getByText("Add"));
  }
})