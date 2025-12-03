import { Divider } from "primereact/divider";
import type { ItemWithCount } from "../types/Item";
import { Button } from "primereact/button";
import { useState } from "react";
import MissingFeatureDialog from "./MissingFeatureDialog";
import { useNavigate } from "react-router-dom";

type props = {
    items: ItemWithCount[];
}

export default function CheckoutSummary({items}: props) {
    const [ visible, setVisible ] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <MissingFeatureDialog modalVisible={visible} setModalVisible={setVisible}/>
            <div className="summary">
            <h2>Order Summary</h2>
                <div className="items">
                    {items.map(item => <div key={item.title}>
                        <p key={item.title}>{item.title} x {item.count} (£{(item.price * item.count).toFixed(2)})</p>
                        <Divider />
                    </div>)}
                </div>
                <p>Total: £{items.reduce((prev, curr) => prev + curr.price * curr.count, 0).toFixed(2)}</p>
                <Button onClick={() => setVisible(true)}>Proceed to payment</Button>
                <Button onClick={() => navigate("/store")} severity="secondary">Return to store</Button>
            </div>
        </>
    )
}