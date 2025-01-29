//* src/components/HelloWorld/test/jsx
import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

describe("HelloWorld Component", () => {
  test("render correctly", () => {
    render(<HelloWorld />);
    const headingElement = screen.getByText(/hello, world!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
