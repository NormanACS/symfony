import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <Nav>
            <ul>
                <li>
                    <Link to={`/`} >
                        Acceuil</Link>
                </li>
                <li>
                <Link to={`/clients`} >
                        Clients</Link>
                </li>
                <li>
                <Link to={`/products`} >
                        Products</Link>
                </li>
            </ul>
        </Nav>
    )
}

export default Navbar;