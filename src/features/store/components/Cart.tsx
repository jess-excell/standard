import { Divider } from "primereact/divider";
import useBasketContext from "../hooks/useBasketContext";
import CartCard from "./CartCard";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const { items, adjustCount } = useBasketContext();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <h2>Cart</h2>
            <div className="items">
            { items.length < 1
                ? <>
                    <p>No items currently in the cart.</p>
                </>
                : items.map((item, index) => <div key={item.id}>
                    <CartCard 
                        item={item} 
                        adjustCount={adjustCount}
                    />
                    {index !== items.length - 1 && <Divider />}
                </div>) 
            }
            </div>
            <div className="total">
                <p>Total: £{items.reduce((prev, curr) => prev + curr.price * curr.count, 0).toFixed(2)}</p>
                <Button severity="success" disabled={items.length <= 0} icon="pi pi-shopping-cart" label="Checkout" onClick={() => navigate("/checkout")}/>
            </div>
        </div>
    )
}