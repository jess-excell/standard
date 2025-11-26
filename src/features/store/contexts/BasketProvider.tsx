import useBasket from "../hooks/useBasket";
import { BasketContext } from "./BasketContext";

type props = {
    children: React.ReactNode;
}

export default function BasketProvider({children}: props) {
    const { adjustCount, items, addItem, removeItem } = useBasket();

    return (
        <BasketContext value={{ adjustCount, items, addItem, removeItem }}>
            {children}
        </BasketContext>
    )
}