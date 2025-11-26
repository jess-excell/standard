import Heading from "../components/Heading"
import CheckoutCard from "../components/CheckoutCard";
import CheckoutSummary from "../components/CheckoutSummary";
import useBasketContext from "../hooks/useBasketContext";

export default function CheckoutScreen() {
    const { items, adjustCount } = useBasketContext();
    
    return (
        <>
            <Heading />
            <div className="checkout">
                <div>
                    {items.map(item => <CheckoutCard 
                        item={item} 
                        adjustCount={adjustCount}
                        key={item.id}/>)
                    }
                </div>
                <div className="summary">
                    <CheckoutSummary items={items}/>
                </div>
            </div>
        </>
    );
};