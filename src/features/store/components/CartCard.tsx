import { InputNumber } from "primereact/inputnumber";
import type { Item, ItemWithCount } from "../types/Item";

type props = {
    item: ItemWithCount;
    adjustCount: (item: Item, count: number) => void;
}

export default function CartCard({item, adjustCount}: props) {

    return (
        <div className="cart-card">
            <b>{item.title}</b><br />
            <div>
                <img src={item.image} alt="Image of the product"/>
                <p>£{(item.price * item.count).toFixed(2)}</p>
                <InputNumber 
                    showButtons
                    value={item.count}
                    className="numberInput"
                    onValueChange={e => e.value !== undefined && e.value !== null && adjustCount(item, e.value)}
                    min={0}
                    aria-label="Number of items"
                    name={item.title}
                    />
            </div>
        </div>
    )
}