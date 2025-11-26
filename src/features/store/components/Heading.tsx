import { useNavigate } from "react-router-dom"

interface props {
    menu?: {
        visible: boolean;
        setVisible: (visible: boolean) => void;
    }
}

export default function Heading({menu}: props) {
    const navigate = useNavigate();
    return menu 
    ? (
        <div className="heading">
            <h1>
                <span 
                    className="pi pi-bars"
                    data-testid="menu-button"
                    onClick={() => menu.setVisible(!menu.visible)}/>
                <p 
                    onClick={() => navigate("/store")} 
                >Standard</p>
            </h1>
        </div>
    )
    : (
        <div className="heading">
            <h1 onClick={() => navigate("/store")}>Standard</h1>
        </div>
    );
};