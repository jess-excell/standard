import { BasketContext } from "../../contexts/BasketContext";
import { exampleItemWithCount } from "../fixtures/sampleObjects";
import { vi } from "vitest";

type props = {
    children: React.ReactNode;
    hasItem?: boolean;
}

export default function MockBasketProvider({children, hasItem}: props) {
    const value = {
        items: hasItem? [exampleItemWithCount]: [],
        addItem: vi.fn(),
        removeItem: vi.fn(),
        adjustCount: vi.fn(),
    };

    return (
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    )
}