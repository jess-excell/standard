import useBasketContext from "../hooks/useBasketContext";
import type { Item } from "../types/Item";
import ItemCard from "./ItemCard";

type props = {
    items: Item[];
}

export default function ItemList({items}: props) {
    if (items.length < 1) return <p>No items to display.</p>
    const { addItem } = useBasketContext();

    return (
        <div className="list">
            { items.map(item =>
                <ItemCard item={item} addItem={addItem} key={item.id} />
            )}
        </div>
    );
}