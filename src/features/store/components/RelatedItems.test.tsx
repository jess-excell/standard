import { it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import RelatedItems from "./RelatedItems";
import BasketProvider from "../contexts/BasketProvider";
import { exampleItem } from "../__tests__/fixtures/sampleObjects";

it("displays nothing if the list is empty", () => {
    render(
        <BasketProvider>
            <RelatedItems items={[]}/>
        </BasketProvider>
    );
    expect(screen.queryByText("You may also like...")).not.toBeInTheDocument();
});

it("displays the items and message prompt", () => {
    render(
        <BasketProvider>
            <RelatedItems items={[exampleItem]}/>
        </BasketProvider>
    );
    expect(screen.getByText("You may also like...")).toBeInTheDocument();
    expect(screen.getByText(exampleItem.title, {exact: false})).toBeInTheDocument();
});