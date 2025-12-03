import { useParams } from "react-router-dom";
import Cart from "../components/Cart";
import Heading from "../components/Heading";
import useItem from "../hooks/useItem";
import DetailCard from "../components/DetailCard";
import useItems from "../hooks/useItems";
import RelatedItemsCard from "../components/RelatedItems";
import { ProgressSpinner } from "primereact/progressspinner";

export default function ItemScreen() {
    const { id } = useParams();
    const { getRelatedItems, loading } = useItems();
    const { item } = useItem(Number(id));
    
    function CreateContent(children: React.ReactNode) {
        return (<>
            <Heading/>
            <div className="item-screen">
                {children}
            </div>
            <Cart />
        </>)
    }

    if (loading) return CreateContent(<div className="wrapper"><ProgressSpinner /><p>Loading...</p></div>);
    if (!item) return CreateContent(<div className="wrapper"><p>An unexpected error occured.</p></div>)

    const related = getRelatedItems(item)
    return CreateContent(<div className="wrapper">
        <DetailCard item={item}/>
        {related.length > 0 && <RelatedItemsCard items={related}/>}
    </div>)
}