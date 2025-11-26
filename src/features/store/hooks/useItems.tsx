import { useEffect, useState } from "react"
import type { Item } from "../types/Item"
import { APIURL } from "../constants/APIURL";

export default function useItems() {
    const [ data, setData ] = useState<Item[]>([]);
    const [ items, setItems ] = useState<Item[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetch(APIURL)
            .then(response => response.json())
            .then(data => {setData(data); setItems(data)})
            .then()
            .finally(() => setLoading(false));
    }, []);

    function filterItems(minPrice: number | null, maxPrice: number | null, categories: string[]) {
        setItems(data);
        if (minPrice) {
            setItems(prev => prev.filter(item => item.price >= minPrice));
        };
        if (maxPrice) {
            setItems(prev => prev.filter(item => item.price <= maxPrice));
        };
        if (categories.length > 0) {
            setItems(prev => prev.filter(item => categories.indexOf(item.category) !== -1));
        };
    };

    function getRelatedItems(item: Item) {
        return items.filter(i => i.category === item.category && i.id !== item.id);
    }

    function clearFilters() {
        setItems(data);
    };

    return { 
        loading,
        items, 
        filterItems, 
        clearFilters,
        getRelatedItems
    };
}