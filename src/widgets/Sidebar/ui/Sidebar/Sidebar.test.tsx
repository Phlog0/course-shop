import { screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests";
import userEvent from "@testing-library/user-event";
import { Sidebar } from "widgets/Sidebar";
describe("Sidebar", () => {
  test("renders Sidebar", () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("Sidebar toggle", async () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    await userEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
