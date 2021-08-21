import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

const testColors = [
  {
    color: "red",
    code: { hex: "#225fbg" },
    id: 42,
  },
  { color: "green", code: { hex: "#235300" }, id: 31 },
];

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={[]} />);
});

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={testColors} />);
  const list = screen.getAllByTestId("color");
  expect(list).toHaveLength(2);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {});
