import { screen, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import Cart from "./Cart";
import Product from "./Product";
import { BrowserRouter } from "react-router-dom";
describe("App", () => {
  it("Renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    );
    const { Product } = render(<Product />);
    expect(container).toMatchSnapshot();
  });
  it("Adds to cart", () => {
    const { container } = render(
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    );
    const { Product } = render(<Product />);
  });
});
