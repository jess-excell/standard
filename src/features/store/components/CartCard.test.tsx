import { fireEvent, render, screen } from "@testing-library/react";
import { it, expect, vi } from "vitest";
import CartCard from "./CartCard";
import type { Item } from "../types/Item";
import { exampleItemWithCount as exampleItem } from "../__tests__/fixtures/sampleObjects";

const exampleFunction = vi.fn((item: Item, adjustCount: number) => {
    console.log("Function called with values:", item, adjustCount);
    return 0;
});

it("contains only the expected information", () => {
    render(<CartCard item={exampleItem} adjustCount={exampleFunction}/>);
    expect(screen.getByText(exampleItem.title)).toBeInTheDocument();
    expect(screen.getByText("£" + (exampleItem.price * exampleItem.count).toFixed(2))).toBeInTheDocument();
    expect(screen.getByDisplayValue(exampleItem.count)).toBeInTheDocument();
    
    expect(screen.queryByText(exampleItem.id)).not.toBeInTheDocument();
    expect(screen.queryByText(exampleItem.price)).not.toBeInTheDocument();
    expect(screen.queryByText(exampleItem.description)).not.toBeInTheDocument();
    expect(screen.queryByText(exampleItem.category)).not.toBeInTheDocument();
});

it("correctly displays prices", () => {
    render(<CartCard item={{...exampleItem, price: 0.40}} adjustCount={exampleFunction}/>);
    expect(screen.getByText("£" + (0.4 * exampleItem.count).toFixed(2))).toBeInTheDocument();
});

it("OnChange method is called when price is changed", async () => {
    render(<CartCard item={exampleItem} adjustCount={exampleFunction} />);
    screen.debug();
    const input = screen.getByLabelText("Number of items");
    expect(input).toHaveValue(4);

    fireEvent.input(input, { target: { value: 1 }});
    
    expect(exampleFunction).toHaveBeenCalled();
    expect(exampleFunction).toHaveBeenCalledWith(exampleItem, 1);
});

