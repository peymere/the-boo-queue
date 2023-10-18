import React from "react";
import HalloweenCountdown from "./HalloweenCountdown"

function Header() {
    return (
        <header>
            <h1>
                Halloween Movie App
            </h1>
            <h5>
                <HalloweenCountdown/> 
            </h5>
        </header>
    );
}

export default Header; 