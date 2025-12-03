import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import CheckoutSummary from "./CheckoutSummary";
import { exampleItemWithCount } from "../__tests__/fixtures/sampleObjects";


it("displays total 0 when there are no items in the list.", () => {
    render(<CheckoutSummary items={[]}/>);
    expect(screen.getByText("£0.00", {exact: false})).toBeInTheDocument();
});

it("displays items when they are in the list", () => {
    render(<CheckoutSummary items={[exampleItemWithCount]}/>);
    expect(screen.getByText(exampleItemWithCount.title, {exact: false})).toBeInTheDocument();
    expect(screen.getByText(exampleItemWithCount.count, {exact: false})).toBeInTheDocument();
    expect(screen.getAllByText(`£${(exampleItemWithCount.price * exampleItemWithCount.count).toFixed(2)}`, {exact: false})).not.toHaveLength(0);
});