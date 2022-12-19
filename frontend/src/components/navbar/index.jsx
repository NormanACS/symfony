import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="uppercase text-red-500">
          <Link to={`/`}>Accueil</Link>
        </li>
        <li>
          <Link to={`/clients`}>Clients</Link>
        </li>
        <li>
          <Link to={`/products`}>Produits</Link>
        </li>
      </ul>
    </nav>
  );
};
