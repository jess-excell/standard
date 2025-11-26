import type { Item } from "../types/Item";
import { Carousel  } from "primereact/carousel";
import type { CarouselResponsiveOption } from "primereact/carousel";
import ItemCard from "./ItemCard";
import useBasketContext from "../hooks/useBasketContext";

type props = {
    items: Item[]
}

const breakpoints: CarouselResponsiveOption[] = [
    {
        breakpoint: '1450px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1150px',
        numVisible: 1,
        numScroll: 1
    }
]

function ItemWrapper(item: Item) {
    const { addItem } = useBasketContext();
    return (
        <div className="related-items-wrapper">  
            <ItemCard item={item} addItem={() => addItem(item)} />
        </div>
    );
};

export default function RelatedItems({items}: props) {

    return (
        <div className="related-items">
            {items.length > 0 && <>
                    <h2>You may also like...</h2>
                    <Carousel 
                        value={items} 
                        numVisible={3} 
                        numScroll={1} 
                        itemTemplate={ItemWrapper} 
                        responsiveOptions={breakpoints}
                        style={{justifyContent: "center", margin: "auto", maxWidth: "calc(80vw - 310px)"}}
                    />
                </>
            }
        </div>
    )
}