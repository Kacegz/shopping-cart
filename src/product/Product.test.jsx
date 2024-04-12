import { screen, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Product from "./Product";
import { userEvent } from "@testing-library/user-event";
async function apiFetch() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  return await response.json();
}
const json = await apiFetch();

describe("Product buttons", () => {
  it("Renders correctly", async () => {
    const { container } = await render(<Product item={json[0]} />);
    expect(container).toMatchSnapshot();
  });
  it("Increments amount", async () => {
    const user = userEvent.setup();
    render(<Product item={json[0]} />);
    const button = screen.getByRole("button", { name: "+" });
    await user.click(button);
    expect(screen.getByRole("textbox", { name: "" })).toHaveValue("1");
  });
  it("Decrements amount", async () => {
    const user = userEvent.setup();
    render(<Product item={json[0]} />);
    const increment = screen.getByRole("button", { name: "+" });
    const decrement = screen.getByRole("button", { name: "-" });
    await user.click(increment);
    await user.click(increment);
    await user.click(decrement);
    expect(screen.getByRole("textbox", { name: "" })).toHaveValue("1");
  });
});
