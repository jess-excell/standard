import { describe, it, expect, beforeEach } from "vitest";
import { act, renderHook } from "@testing-library/react";
import useBasket from "./useBasket";
import { exampleItem } from "../__tests__/fixtures/sampleObjects";

describe("useBasket hook", () => { 
    it("can add an item to the basket", () => {
        const { result } = renderHook(() => useBasket());
        expect(result.current.items).toHaveLength(0);
        act(() => result.current.addItem(exampleItem));
        expect(result.current.items).toHaveLength(1);
    });

    it("can remove an item from the basket", () => {
        const { result } = renderHook(() => useBasket());
        expect(result.current.items).toHaveLength(0);
        
        act(() => result.current.addItem(exampleItem));
        expect(result.current.items).toHaveLength(1);

        act(() => result.current.removeItem(exampleItem));
        expect(result.current.items).toHaveLength(0);
    });

    it("can update the count of an item in the basket", () => {
        const { result } = renderHook(() => useBasket());
        expect(result.current.items).toHaveLength(0);
        
        act(() => result.current.addItem(exampleItem));
        expect(result.current.items).toHaveLength(1);

        act(() => result.current.adjustCount(exampleItem, 4));
        expect(result.current.items[0].count).toBe(4);
    });

    it("Setting an item's count to 0 removes it from the basket", () => {
        const { result } = renderHook(() => useBasket());
        expect(result.current.items).toHaveLength(0);
        
        act(() => result.current.addItem(exampleItem));
        expect(result.current.items).toHaveLength(1);

        act(() => result.current.adjustCount(exampleItem, 0));
        expect(result.current.items).toHaveLength(0);
    });

    beforeEach(() => {
        // This should be covered in setupTests.ts, it's just an extra check
        // If localStorage holds the variables then the contents of items will
        // not clear between tests.
        expect(localStorage.getItem("basket")).toBeNull();
    });
});