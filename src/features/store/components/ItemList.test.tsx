import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import ItemList from "./ItemList";
import { exampleItem } from "../__tests__/fixtures/sampleObjects";
import BasketProvider from "../contexts/BasketProvider";

it("displays items if they are provided", () => {
    render(
        <BasketProvider>
            <ItemList items={[exampleItem]}/>
        </BasketProvider> 
    );
    expect(screen.getByText(exampleItem.title, {exact: false})).toBeInTheDocument();
    expect(screen.getByText(exampleItem.price, {exact: false})).toBeInTheDocument();        
    expect(screen.getByText(exampleItem.description.substring(0, 100), {exact: false})).toBeInTheDocument();
    expect(screen.queryByText(exampleItem.id)).not.toBeInTheDocument();
    expect(screen.queryByText(exampleItem.category)).not.toBeInTheDocument();
    expect(screen.queryByText("No items to display.")).not.toBeInTheDocument();
});

it("displays a message if no items are provided", () => {
    render(
        <BasketProvider>
            <ItemList items={[]}/>
        </BasketProvider> 
    );
    expect(screen.getByText("No items to display.")).toBeInTheDocument();
});