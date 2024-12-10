import React from "react"
import { Link } from "react-router-dom";
import { NavBar } from "../Styles/styled";



const Menu = () => {
    return (
        <>
         <NavBar>
         <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                
                </ul>
            </nav>
         </NavBar>
        </>
      );
}
 
export default Menu;