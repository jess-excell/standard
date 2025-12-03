import type { Item, ItemWithCount } from "../../types/Item";

export const exampleItem: Item = {
    title: "Item title",
    id: 44,
    description: "This is the item description",
    price: 9.99,
    category: "Examples",
    image: undefined
};

export const exampleItemWithCount: ItemWithCount = {
    ...exampleItem, 
    count: 4
};