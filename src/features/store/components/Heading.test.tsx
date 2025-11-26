import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import Heading from "./Heading";

const setVisible = vi.fn((val: boolean) => {
    console.log("Function called with value", val);
})

it("can display heading without menu", () => {
    render(<Heading />);
    expect(screen.getByText("Standard")).toBeInTheDocument();
    expect(screen.queryByTestId("menu-button")).not.toBeInTheDocument();
});

it("can display heading with menu", () => {
    render(<Heading menu={{visible: false, setVisible: setVisible}}/>);
    expect(screen.getByText("Standard")).toBeInTheDocument();
    expect(screen.getByTestId("menu-button")).toBeInTheDocument();
});

it("can show the menu on click", () => {
    render(<Heading menu={{visible: false, setVisible: setVisible}}/>);
    const btn = screen.getByTestId("menu-button");
    setVisible.mockClear(); // Have to ignore setVisible call on initial render
    
    fireEvent.click(btn);
    expect(setVisible).toHaveBeenCalled();
    expect(setVisible).toBeCalledWith(true);
});

it("can hide the menu on click", () => {
    render(<Heading menu={{visible: true, setVisible: setVisible}}/>);
    const btn = screen.getByTestId("menu-button");
    setVisible.mockClear(); // Have to ignore setVisible call on initial render
    
    fireEvent.click(btn);
    expect(setVisible).toHaveBeenCalled();
    expect(setVisible).toBeCalledWith(false);
});