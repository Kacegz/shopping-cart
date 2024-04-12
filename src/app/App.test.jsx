import { screen, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

async function apiFetch() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  return await response.json();
}
const json = await apiFetch();

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
