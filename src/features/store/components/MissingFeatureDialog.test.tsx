import { it, expect, vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import MissingFeatureDialog from "./MissingFeatureDialog";

const exampleFunction = vi.fn((visible: boolean) => {
    console.log("Function called with value:", visible);
});


it("displays nothing when the modal's visibility is false", () => {
    render(<MissingFeatureDialog modalVisible={false} setModalVisible={exampleFunction}/>);
    expect(screen.queryByText("Sorry! This feature has not yet been implemented.")).not.toBeInTheDocument();
});

it("displays a 'missing feature' message when visible", () => {
    render(<MissingFeatureDialog modalVisible={true} setModalVisible={exampleFunction}/>);
    expect(screen.getByText("Sorry! This feature has not yet been implemented.")).toBeInTheDocument();
})

it("calls the setVisible function when closed", () => {
    render(<MissingFeatureDialog modalVisible={true} setModalVisible={exampleFunction}/>);
    
    const btn = screen.getByRole("button");
    fireEvent.click(btn);

    expect(exampleFunction).toHaveBeenCalledWith(false);
});