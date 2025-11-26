import type { Item } from "../types/Item";
import { Chip } from "primereact/chip";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import useBasketContext from "../hooks/useBasketContext";
import { useNavigate } from "react-router-dom";

interface props {
    item: Item
}

export default function DetailCard({item}: props) {
    const { addItem } = useBasketContext();
    const navigation = useNavigate();

    return (
        <Card className="detail-card">
            <h2>{item.title} (£{item.price.toFixed(2)})</h2>
            <img src={item.image} alt="Image of the product"/>
            <div className="chip-container"><Chip label={item.category}/></div>
            <p>{item.description}</p>
            <Button severity="secondary" onClick={() => navigation("/store")} label="Back" icon="pi pi-home"/>
            <Button onClick={() => addItem(item)} label="Add to cart" icon="pi pi-shopping-cart"/>
        </Card>
    );
};