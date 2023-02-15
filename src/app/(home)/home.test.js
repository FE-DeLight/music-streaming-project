import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent(/home/i);
  });
});
