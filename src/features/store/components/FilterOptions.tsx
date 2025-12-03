import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { Divider } from "primereact/divider";
import useItems from "../hooks/useItems";
import { Checkbox } from "primereact/checkbox";
import { Message } from "primereact/message";

type props = {
    filterItems: (minPrice: number | null, maxPrice: number | null, categories: string[]) => void;
    clearFilters: () => void;
}

export default function FilterOptions({filterItems, clearFilters}: props) {
    const [ minPrice, setMinPrice ] = useState<number | null>(null);
    const [ maxPrice, setMaxPrice ] = useState<number | null>(null);
    const [ categories, setCategories ] = useState<string[]>([]);
    const { items, loading } = useItems();

    function handleCheckboxUpdate(category: string) {
        if (categories.indexOf(category) !== -1) {
            setCategories(prev => prev.filter(cat => cat !== category));
        }
        else {
            setCategories(prev => [...prev, category]);
        }
    }

    function filter() {
        filterItems(minPrice, maxPrice, categories);
    }

    function clear() {
        clearFilters();
        setMinPrice(null);
        setMaxPrice(null);
        setCategories([]);
    }

    if (loading) {
        return (
            <div className="filter-menu">
                <p>Loading filters...</p>
            </div>
        );
    };

    return (
        <div className="filter-menu">
            <h2>Filter options</h2>
            <h3>Price</h3>
            <label id="min-price">
                Minimum price
                <InputNumber name="min-price" value={minPrice} onChange={(e) => setMinPrice(e.value)} mode="currency" currency="GBP"/>
            </label>
            <label id="max-price">
                Maximum price
                <InputNumber name="max-price" value={maxPrice} onChange={(e) => setMaxPrice(e.value)} mode="currency" currency="GBP"/>
            </label>
            { minPrice && maxPrice && minPrice > maxPrice && 
                <Message severity="error" text="Minimum price cannot exceed maximum price." style={{marginTop: "10px"}}/>
            }

            <Divider />      

            <h3>Category</h3>
            {
                [...new Set(items.map(item => item.category))].map(i => <div key={i}>
                    <label className="checkbox-label" id={i}>
                        <Checkbox name={i} id={i} checked={categories.includes(i)} onChange={() => handleCheckboxUpdate(i)} />
                        {i}
                    </label>
                    <br />
                </div>)
            }

            <Divider />

            { minPrice && maxPrice && minPrice > maxPrice
                ? <Button disabled label="Filter" icon="pi pi-filter"/>
                : <Button onClick={filter} label="Filter" icon="pi pi-filter"/>
            }
            <Button onClick={clear} label="Clear" icon="pi pi-filter-slash" severity="secondary"/>
        </div>
    )
}