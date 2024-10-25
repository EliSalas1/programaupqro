import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Header({ setShowNav, showNav }){
    return (
        <header class="barra">          
        <div class="contbarra">
            
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} /> {/* Al hacer clic, alterna el estado */}

        {/* <GiHamburgerMenu/>   */}
        </div>
    </header>
    )
}
export default Header;