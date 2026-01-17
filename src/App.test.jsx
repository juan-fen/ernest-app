import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Sidebar from "../components/Sidebar";
import Grid from "../components/Grid";
import Viewport from "../components/Viewport";

describe("Viewport Grid Application", () => {
  // Test 1: App renders with default values
  it("renders App component with default grid settings", () => {
    render(<App />);

    const gridSettings = screen.getByText("Grid Settings");
    expect(gridSettings).toBeInTheDocument();

    // Check that rows and columns inputs are present
    const rowsInput = screen.getByLabelText("Number of rows");
    const columnsInput = screen.getByLabelText("Number of columns");

    expect(rowsInput).toHaveValue(3);
    expect(columnsInput).toHaveValue(3);
  });

  // Test 2: Sidebar toggle functionality
  it("toggles sidebar open and closed", async () => {
    const { container } = render(<App />);

    const toggleButton = screen.getByLabelText("Toggle sidebar");
    expect(toggleButton).toBeInTheDocument();

    // Initial state - sidebar should be open
    const sidebar = container.querySelector(".sidebar");
    expect(sidebar).toHaveClass("open");

    // Click toggle
    await userEvent.click(toggleButton);
    expect(sidebar).toHaveClass("closed");

    // Click again to open
    await userEvent.click(toggleButton);
    expect(sidebar).toHaveClass("open");
  });

  // Test 3: Grid updates when rows/columns change
  it("updates grid when rows and columns values change", async () => {
    render(<App />);

    const rowsInput = screen.getByLabelText("Number of rows");
    const columnsInput = screen.getByLabelText("Number of columns");

    // Change rows to 5
    await userEvent.clear(rowsInput);
    await userEvent.type(rowsInput, "5");
    expect(rowsInput).toHaveValue(5);

    // Change columns to 4
    await userEvent.clear(columnsInput);
    await userEvent.type(columnsInput, "4");
    expect(columnsInput).toHaveValue(4);

    // Grid should have 5x4 = 20 viewports
    const viewports = screen.getAllByText(/^\d+$/).filter((el) => {
      return el.className === "viewport-id";
    });
    expect(viewports.length).toBe(20);
  });

  // Test 4: Sidebar input constraints (1-10 range)
  it("constrains row and column values between 1 and 10", async () => {
    render(<App />);

    const rowsInput = screen.getByLabelText("Number of rows");
    const columnsInput = screen.getByLabelText("Number of columns");

    // Try to set value > 10
    await userEvent.clear(rowsInput);
    await userEvent.type(rowsInput, "15");
    expect(rowsInput).toHaveValue(10); // Should be capped at 10

    // Try to set value < 1
    await userEvent.clear(rowsInput);
    await userEvent.type(rowsInput, "0");
    expect(rowsInput).toHaveValue(1); // Should be set to 1

    // Test columns similarly
    await userEvent.clear(columnsInput);
    await userEvent.type(columnsInput, "25");
    expect(columnsInput).toHaveValue(10);

    await userEvent.clear(columnsInput);
    await userEvent.type(columnsInput, "-5");
    expect(columnsInput).toHaveValue(1);
  });

  // Additional test: Viewport component renders with ID
  it("renders Viewport with unique ID", () => {
    const { container } = render(<Viewport id={42} />);

    const viewportId = container.querySelector(".viewport-id");
    expect(viewportId).toBeInTheDocument();
    expect(viewportId).toHaveTextContent("42");
  });

  // Additional test: Grid renders correct number of viewports
  it("renders Grid with correct number of viewports", () => {
    const { container } = render(<Grid rows={2} columns={3} />);

    const viewports = container.querySelectorAll(".viewport");
    expect(viewports.length).toBe(6); // 2 rows × 3 columns
  });

  // Additional test: Sidebar renders with correct labels
  it("renders Sidebar with proper input labels and initial values", () => {
    const handleRowsChange = () => {};
    const handleColumnsChange = () => {};

    render(
      <Sidebar
        rows={4}
        columns={5}
        onRowsChange={handleRowsChange}
        onColumnsChange={handleColumnsChange}
        isOpen={true}
        onToggle={() => {}}
      />,
    );

    expect(screen.getByLabelText("Number of rows")).toHaveValue(4);
    expect(screen.getByLabelText("Number of columns")).toHaveValue(5);
    expect(screen.getByText("Grid Settings")).toBeInTheDocument();
  });
});
