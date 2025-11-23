import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SignUpPage from "./page.tsx";

describe("SignUpPage", () => {
  it("should have heading", () => {
    render(<SignUpPage />);

    expect(screen.getByText("Sign up page"));
  });

  it("full name should be required", () => {
    render(<SignUpPage />);

    const input = screen.getByLabelText("Full name");
    expect(input).toBeRequired();
  });

  it("full name should be type text", () => {
    render(<SignUpPage />);

    const input = screen.getByLabelText("Full name");
    expect(input).toHaveAttribute("type", "text");
  });

  it("date of birth should be required", () => {
    render(<SignUpPage />);

    const input = screen.getByLabelText("Date of birth");
    expect(input).toBeRequired();
  });

  it("country should be required", () => {
    render(<SignUpPage />);

    const input = screen.getByLabelText("Country");
    expect(input).toBeRequired();
  });
});
