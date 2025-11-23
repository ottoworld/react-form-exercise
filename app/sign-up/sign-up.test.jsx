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

    const nameInput = screen.getByLabelText("Full name");
    expect(nameInput).toBeRequired();
  });

  it("full name should be type text", () => {
    render(<SignUpPage />);

    const nameInput = screen.getByLabelText("Full name");
    expect(nameInput).toHaveAttribute("type", "text");
  });
});
