import { createContext } from "react";
import type { ItemWithCount, Item } from "../types/Item";

type BasketType = {
    adjustCount: (item: Item, count: number) => void;
    addItem: (item: Item) => void;
    removeItem: (item: Item) => void;
    items: ItemWithCount[];
}

export const BasketContext = createContext<BasketType | undefined>(undefined);