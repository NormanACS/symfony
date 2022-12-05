import React from "react";
import { createBrowserRouter } from "react-router-dom";



// PAGES CONPONENTS
import Home from "../../pages/home";
import Client from "../../pages/client";
import Product from "../../pages/product";

// CRUD OPERATION PRODUCT
import CreateProduct from "../../pages/product/functions/createProduct";



export const Provider = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/clients",
        element: <Client />
    },
    {
        path: "/products",
        element: <Product />
    },
    {
        path: "/products/create",
        element: <CreateProduct />
    },
]);