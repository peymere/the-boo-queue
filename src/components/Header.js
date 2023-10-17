import React from "react";
import NavBar from "./NavBar"
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
            <NavBar/>
        </header>
    );
}

export default Header; 