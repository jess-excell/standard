import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import Cart from "./Cart";
import { exampleItemWithCount as exampleItem } from "../__tests__/fixtures/sampleObjects";
import MockBasketProvider from "../__tests__/mocks/mockBasketProvider";

it("displays no items when the basket is empty", () => {
    render(
        <MockBasketProvider>
            <Cart />
        </MockBasketProvider>
    );
    expect(screen.getByText("£0.00", {exact: false})).toBeInTheDocument();
    expect(screen.queryByText(exampleItem.title)).not.toBeInTheDocument();
});

it("displays items when in the basket", () => {
    render(
        <MockBasketProvider hasItem>
            <Cart />
        </MockBasketProvider>
    );
    expect(screen.queryByText("£0.00", {exact: false})).not.toBeInTheDocument();
    
    expect(screen.getAllByText(`£${(exampleItem.price * exampleItem.count).toFixed(2)}`, {exact: false})).not.toHaveLength(0);
    expect(screen.getByText(exampleItem.title)).toBeInTheDocument();
    expect(screen.getByDisplayValue(exampleItem.count)).toBeInTheDocument();
    expect(screen.queryByText(exampleItem.id)).not.toBeInTheDocument();
    expect(screen.queryByText(exampleItem.price)).not.toBeInTheDocument();
    expect(screen.queryByText(exampleItem.description)).not.toBeInTheDocument();
    expect(screen.queryByText(exampleItem.category)).not.toBeInTheDocument();
});