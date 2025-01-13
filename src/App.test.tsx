import {render} from "@testing-library/react";
import { test } from "vitest";
import App from "./App.tsx";

test("show input box on the screen", () => {
  const { getByLabelText } = render(<App />)

  getByLabelText("Enter Numbers");
})