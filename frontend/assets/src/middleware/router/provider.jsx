import React from "react";
import { createBrowserRouter } from "react-router-dom";



// PAGES CONPONENTS
import Home from "../../pages/home/index";
import Client from "../../pages/client/index";
import Product from "../../pages/product/index";

// CRUD OPERATION PRODUCT
import CreateProduct from "../../pages/product/functions/createProduct";
import EditProduct from "../../pages/product/functions/editProduct";
import ShowProduct from "../../pages/product/functions/showProduct";


export const Provider = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/clients",
        element: <Client />
    },
    // {
    //     path: "/clients",
    //     element: <CreatClient />
    // },
    // {
    //     path: "/clients",
    //     element: <ShowClient />
    // },
    // {
    //     path: "/clients",
    //     element: <EditClient />
    // },
    {
        path: "/products",
        element: <Product />
    },
    {
        path: "/products/create",
        element: <CreateProduct />
    },
    {
        path: "/products/edit/:id",
        element: <EditProduct />
    },
    {
        path: "/products/show/:id",
        element: <ShowProduct />
    },

]);
