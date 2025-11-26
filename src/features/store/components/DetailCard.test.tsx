import { fireEvent, render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import DetailCard from "./DetailCard";
import BasketProvider from "../contexts/BasketProvider";
import Navigation from "../__tests__/mocks/mockNavigation";
import { exampleItem } from "../__tests__/fixtures/sampleObjects";

it("contains only the expected information", () => {
    render(
        <BasketProvider>
            <DetailCard item={exampleItem}/>
        </BasketProvider>);
    expect(screen.getByText(exampleItem.title, {exact: false})).toBeInTheDocument();
    expect(screen.getByText(exampleItem.price, {exact: false})).toBeInTheDocument();
    expect(screen.getByText(exampleItem.description)).toBeInTheDocument();
    expect(screen.getByText(exampleItem.category)).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText("Add to cart")).toBeInTheDocument();
    expect(screen.queryByText(exampleItem.id)).not.toBeInTheDocument();
});

it("correctly displays prices", () => {
    render(
        <BasketProvider>
            <DetailCard item={{...exampleItem, price: 0.40}}/>
        </BasketProvider>
    );
    expect(screen.getByText("£0.40", {exact: false})).toBeInTheDocument();
});

it("add to cart button doesn't navigate to another page", () => {
    render(
        <BasketProvider>
            <DetailCard item={exampleItem}/>
        </BasketProvider>
    );
    const navButton = screen.getByLabelText("Add to cart");
    fireEvent.click(navButton);

    expect(Navigation).not.toHaveBeenCalled();
});

it("back button navigates to other pages", () => {
    render(
        <BasketProvider>
            <DetailCard item={exampleItem}/>
        </BasketProvider>
    );
    const navButton = screen.getByLabelText("Back");
    fireEvent.click(navButton);

    expect(Navigation).toHaveBeenCalled();
    expect(Navigation).toHaveLastReturnedWith("/store");
});