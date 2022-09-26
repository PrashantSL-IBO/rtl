import { render, screen } from "@testing-library/react";
import Hello from "./hello";

describe("Hello Component", () => {
  test("renders label correctly", () => {
    render(<Hello />);
    expect(screen.getByTitle("Phone Number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Your Age")).toBeInTheDocument();
    expect(screen.getByText("Form")).toBeInTheDocument();
    expect(screen.getByTestId("ageLabel")).toBeInTheDocument();
  });

  it("renders button", () => {
    render(<Hello />);
    expect(
      screen.queryByRole("button", {
        name: "Login",
      })
    ).not.toBeInTheDocument();
  });

  it("not renders button", () => {
    render(<Hello />);
    expect(
      screen.queryByRole("button", {
        name: "Logout",
      })
    ).not.toBeInTheDocument();
  });
});
