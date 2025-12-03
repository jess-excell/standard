import { useEffect, useState } from "react";
import type { Item, ItemWithCount } from "../types/Item";
import { getItem, setItem } from "../utils/localStorage";

export default function useBasket(): {
    items: ItemWithCount[],
    removeItem: (item: Item) => void;
    addItem: (item: Item) => void;
    adjustCount: (item: Item, count: number) => void;
} {
    const [ items, setItems ] = useState<ItemWithCount[]>(() => {
        const item = getItem("basket");
        return (item as ItemWithCount[]) || [];
    });

    function adjustCount(item: Item, newCount: number) {
    /** Adjusts the count of an item in a basket. If the item doesn't exist in the basket, it is created.
     * If the item's count is below 1, the item is removed from the basket.
     * @param item {Item} - The item to adjust the count of.
     * @param newCount {number} - The new count of the item. 
     */
        if (newCount <= 0) {
            setItems(prev => prev.filter(i => i.id != item.id));
            return;
        };
        if (!items.find(i => i.id === item.id)) {
            setItems(prev => [...prev, {...item, count: 1}]);
            return;
        }
        setItems(prev => prev.map(
            i => i.id === item.id ? {...i, count: newCount} : i
        ));
    }

    /** Decrements the count of an item in a basket by one. Removes the item if count is below 1
     * @param item - the item to decrement the count of.
     */
    function removeItem(item: Item) {
        const count = items.find(i => i.id === item.id)?.count
        if (!count) return;
        adjustCount(item, count - 1);
    }

    function addItem(item: Item) {
    /** Increments the count of an item in a basket by one. Creates a new item if not in basket.
     * @param item - the item to decrement the count of.
     */
        const count = items.find(i => i.id === item.id)?.count
        if (!count) {
            adjustCount(item, 1); 
            return;
        }
        adjustCount(item, count + 1);
    }

    /** Watches the items object and updates localStorage when it changes. */
    useEffect(() => {
        setItem("basket", items);
    }, [items])

    return { 
        items,
        adjustCount,
        addItem,
        removeItem
    }
}