import { screen, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import Cart from "./Cart";
import { BrowserRouter } from "react-router-dom";
describe("App", () => {
  it("Renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
