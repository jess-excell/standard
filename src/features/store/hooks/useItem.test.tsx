import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useItem from "./useItem";

describe ("useItem hook", () => {
    it("uses the loading hook", () => {
        const { result } = renderHook(() => useItem(1));
        expect(result.current.loading).toBe(true);
    });

    it("can get an item from the API", async () => {
        const { result } = renderHook(() => useItem(1));
        expect(result.current.loading).toBe(true);
        
        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        }, { timeout: 3000 });

        expect(result.current.item?.id).toBe(1);
    });
})