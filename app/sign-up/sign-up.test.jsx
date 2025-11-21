import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SignUpPage from "./page.tsx";

describe("SignUpPage", () => {
  it("should have sign up page heading", () => {
    render(<SignUpPage />);

    expect(screen.getByText("Sign up page"));
  });
});
