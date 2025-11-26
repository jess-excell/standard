import type { Item, ItemWithCount } from "../types/Item";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

interface props {
    item: ItemWithCount;
    adjustCount: (item: Item, newCount: number) => void;
}

const style = {
    maxHeight: "30px", 
    verticalAlign: "middle"
};

export default function CheckoutCard({item, adjustCount}: props) {
    return (
        <Card className="checkout-card">
            <div className="checkout-card-content">
                <img src={item.image} alt="image of item"/>
                <div>
                    <h3>{item.title} (£{(item.price * item.count).toFixed(2)})</h3>
                    <p>{item.description}</p>
                    <div style={{width: "100%"}}>
                        <InputNumber 
                            showButtons 
                            buttonLayout="horizontal" 
                            incrementButtonIcon="pi pi-plus" 
                            decrementButtonIcon="pi pi-minus" 
                            className="numberInput"
                            style={style}
                            min={0}
                            value={item.count}
                            onValueChange={e => e.target.value !== undefined && e.target.value !== null && adjustCount(item, e.target.value)}
                        />
                        <Button 
                            icon="pi pi-trash" 
                            size="small" 
                            severity="danger" 
                            label="Remove from cart"
                            style={style}
                            onClick={() => adjustCount(item, 0)}/>
                    </div>
                </div>
            </div>
        </Card>
    )
}