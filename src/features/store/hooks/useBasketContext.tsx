import { BasketContext } from "../contexts/BasketContext";
import useCustomContext from "./useCustomContext";

export default function useBasketContext() { 
    return useCustomContext(BasketContext, "Basket context has not been defined.");
}