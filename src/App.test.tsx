import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders app header", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/How do you want it/i);
  expect(headerElement).toBeInTheDocument();
});
