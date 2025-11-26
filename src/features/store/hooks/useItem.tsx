import { useState, useEffect } from "react";
import type { Item } from "../types/Item";
import { APIURL } from "../constants/APIURL";

export default function useItem(id: number) {
    const [ item, setItem ] = useState<Item | undefined>(undefined);
    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${APIURL}/${id}`)
            .then(response => response.json())
            .then(data => setItem(data))
            .finally(() => setLoading(false));
    }, [id])
    
    return { item, loading }
}