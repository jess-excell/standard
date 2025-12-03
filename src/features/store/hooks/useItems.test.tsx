import { renderHook, waitFor } from "@testing-library/react";
import { expect, it } from "vitest";
import useItems from "./useItems";

it("uses the loading hook", () => {
    const { result } = renderHook(() => useItems());
    expect(result.current.loading).toBe(true);
});

it("can get items", async () => {
    const { result } = renderHook(() => useItems());
    
    expect(result.current.loading).toBe(true);
    
    await waitFor(() => {
        expect(result.current.loading).toBe(false);
    }, { timeout: 3000 });

    expect(result.current.items).not.toHaveLength(0);
});