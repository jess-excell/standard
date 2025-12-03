import { it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutCard from "./CheckoutCard";
import { exampleItemWithCount as exampleItem } from "../__tests__/fixtures/sampleObjects";
import type { Item } from "../types/Item";

const exampleFunction = vi.fn((item: Item, newCount: number) => {
    console.log("Function called with values: ", item, newCount);
});

it("displays only the expected information", () => {
    render(<CheckoutCard item={exampleItem} adjustCount={exampleFunction}/>);
    expect(screen.getByText(`${exampleItem.title} (£${(exampleItem.price * exampleItem.count).toFixed(2)})`)).toBeInTheDocument();
    expect(screen.getByDisplayValue(exampleItem.count)).toBeInTheDocument();
    expect(screen.getByText(exampleItem.description)).toBeInTheDocument();
    expect(screen.getByText("Remove from cart")).toBeInTheDocument();
    
    expect(screen.queryByText(exampleItem.id)).not.toBeInTheDocument();
    expect(screen.queryByText(exampleItem.price)).not.toBeInTheDocument();
    expect(screen.queryByText(exampleItem.category)).not.toBeInTheDocument();
});

it("correctly displays prices", () => {
    render(<CheckoutCard item={{...exampleItem, price: 0.40}} adjustCount={exampleFunction}/>);
    expect(screen.getByText(`${exampleItem.title} (£${(0.4 * exampleItem.count).toFixed(2)})`)).toBeInTheDocument();
});

it("can remove from cart", () => {
    render(<CheckoutCard item={exampleItem} adjustCount={exampleFunction}/>);
    
    const btn = screen.getByLabelText("Remove from cart");
    fireEvent.click(btn);
    
    expect(exampleFunction).toHaveBeenCalled();
    expect(exampleFunction).toHaveBeenCalledWith(exampleItem, 0);
});