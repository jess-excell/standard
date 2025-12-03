import { fireEvent, render, screen } from "@testing-library/react";
import { it, expect, vi } from "vitest";
import ItemCard from "./ItemCard";
import type { Item } from "../types/Item";
import { exampleItemWithCount as exampleItem } from "../__tests__/fixtures/sampleObjects";
import Navigation from "../__tests__/mocks/mockNavigation";

const exampleFunction = vi.fn((item: Item) => {
    console.log("Function called with values:", item);
    return 0;
});

it("contains only the expected information", () => {
    render(<ItemCard item={exampleItem} addItem={() => exampleFunction} />);
    expect(screen.getByText(exampleItem.title, {exact: false})).toBeInTheDocument();
    expect(screen.queryByText(exampleItem.price, {exact: false})).toBeInTheDocument();
    expect(screen.queryByText(exampleItem.description.substring(0, 100), {exact: false})).toBeInTheDocument();
    
    expect(screen.queryByText(exampleItem.id)).not.toBeInTheDocument();
    expect(screen.queryByText(exampleItem.category)).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue(exampleItem.count)).not.toBeInTheDocument();
});

it("can be added to the cart", () => {
    render(<ItemCard item={exampleItem} addItem={exampleFunction} />);
    
    const btn = screen.getByLabelText("Add to cart");
    fireEvent.click(btn);

    expect(Navigation).not.toHaveBeenCalled();
    expect(exampleFunction).toHaveBeenCalled();
});

it("detail page can be reached", () => {
    render(<ItemCard item={exampleItem} addItem={exampleFunction} />);
    exampleFunction.mockClear();
    
    const btn = screen.getByLabelText("View");
    fireEvent.click(btn);

    expect(Navigation).toHaveBeenCalled();
    expect(exampleFunction).not.toHaveBeenCalled();
});