import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";
const testColor = {
  color: "red",
  code: { hex: "#225fbg" },
  id: 42,
};
test("Renders without errors with blank color passed into component", () => {
  render(<Color />);
});

test("Renders the color passed into component", () => {
  render(<Color color={testColor} />);
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {});
