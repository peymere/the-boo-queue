import React from "react";
import HalloweenCountdown from "./HalloweenCountdown"

function Header() {
    return (
        <header>
            <h1 className="site-header">
                THE BOO QUEUE
            </h1>
            {/* <h1 className="header-test-1">THE BOO QUEUE</h1>
            <h1 className="header-test-2">Gore & Giggles Gathering</h1>
            <h1 className="header-test-3">EERIE ENCORES</h1> */}
            <h5>
                <HalloweenCountdown/> 
            </h5>
        </header>
    );
}

export default Header; 