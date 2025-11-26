import type { Item } from "../types/Item";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";

type props = {
    item: Item;
    addItem: (item: Item) => void;
};

export default function ItemCard({item, addItem}: props) {
    const navigate = useNavigate()
    
    let description: string = item.description;
    if (description.length > 200) { description = `${description.substring(0, 200)}...`}
    
    return (
        <Card className="list-card">
            <h3>{item.title} £{item.price.toFixed(2)}</h3>
            <img src={item.image} alt="Image of the product"/>
            <p>{description}</p>
            <div className="buttons">
                <Button onClick={() => { navigate(`/store/${item.id}`); window.scroll({
                    top: 0
                })}} label="View" icon="pi pi-search" size="small" severity="secondary"/>
                <Button onClick={() => addItem(item)} label="Add to cart" icon="pi pi-shopping-cart" size="small"/>
            </div>
        </Card>
    )
}