import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "shared/ui";
describe("Button", () => {
  test("renders button", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
  test("renders button with clear-theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    // screen.debug();
  });
});
