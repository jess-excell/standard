import { ProgressSpinner } from "primereact/progressspinner";
import Cart from "../components/Cart";
import FilterOptions from "../components/FilterOptions";
import Heading from "../components/Heading";
import ItemList from "../components/ItemList";
import useItems from "../hooks/useItems";
import { useState } from "react";

export default function StoreScreen() {
    const { items, loading, filterItems, clearFilters } = useItems();
    const [ menuVisible, setMenuVisible ] = useState(true);

    const smallScreen = screen.width < 1000;

    if (loading) {
        return <>
            <Heading/>
            <div style={{paddingTop: "80px"}}>
                <ProgressSpinner />
                <p>Loading content...</p>
            </div>
        </>
    }


    return (
        <>
            <Heading menu={{visible: menuVisible, setVisible: setMenuVisible}}/>
            <div>
                <div style={{display: menuVisible ? "inherit" : "none"}}>
                    <FilterOptions clearFilters={clearFilters} filterItems={filterItems}/>
                </div>
                <div style={{
                    width: menuVisible 
                        ? smallScreen 
                            ? "calc(100% - 570px)"  
                            : "calc(100% - 620px)"
                        : smallScreen
                            ? "calc(100% - 260px)"
                            : "calc(100% - 310px)", 
                    marginLeft: menuVisible 
                        ? smallScreen 
                            ? "260px"
                            : "310px" 
                        : 0
                }}>
                    <ItemList items={items}/>
                </div>
                <div>
                    <Cart />
                </div>
            </div>
        </>
    )
}