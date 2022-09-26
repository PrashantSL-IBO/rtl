import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App test cases", () => {
  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByTestId("ageLabel");
    expect(linkElement).toBeInTheDocument();
  });

  it("renders name input", () => {
    render(<App />);
    expect(screen.getByTestId("ageLabel")).toBe(8);
  });
});
