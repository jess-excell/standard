import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function LandingScreen({acceptDisclaimer}: {acceptDisclaimer: () => void}) {
    const navigate = useNavigate();
    return (
        <>
            <h1>Hi there!</h1>
            <p>This is just a little notice to clarify that this project is not a real ecommerce site. Standard is just a little project I made to work on my React skills. I therefore ask that you read the disclaimer below :)</p>

            <h2>Disclaimer</h2>
            <p>This site is a personal prototype created for learning and demonstration purposes only. It is not a real e-commerce platform and should not be used for actual transactions. Do not enter any personal, financial, or sensitive information.</p>
            <p>Any resemblance to existing websites, businesses, or services is purely coincidental. This site uses localStorage to temporarily save basket items, which are stored only in your browser and not transmitted or stored externally.</p>
            <p>By clicking "I understand", you acknowledge that you are accessing a non-functional demo and agree to use it at your own discretion. If you have any questions, please raise an issue on GitHub. </p>
            <Button onClick={() => { acceptDisclaimer(); navigate("/store")}}>I understand</Button>
        </>
    )
}