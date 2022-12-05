import axios from "axios";
import React, { useState, useEffect } from "react";
import { Await, Link } from "react-router-dom";
import deleteProduct from "./deleteProduct";
import {URL_PRODUCT, URL_PRODUCT_CREATE, URL_PRODUCT_SHOW, URL_PRODUCT_EDIT,} from "../../../middleware/environment";


const GetAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect (() =>{
        getProduct();
    }, []);

    const getProduct = async () => {
        await axios.get(`${URL_PRODUCT}`).then((response) => {
            setAllProducts(response.data["hydra:member"])
        }).catch((err) => {
            console.error(err);
        });
    };
    return(
        <>
        <h1>liste des produits</h1>
        <Link to={`${URL_PRODUCT_CREATE}`} >Creer un produit</Link>
        <table>
            <thead>
                <tr>
                    <th>
                     Nom
                    </th>
                    <th>
                      Description  
                    </th>
                    <th>
                      Prix  
                    </th>
                    <th>
                     Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {allProducts.map((product, key) => {
                    // do some stuff
                    return(
                        <tr key={key}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price} €</td>
                            <td>
                                <Link to= {`${URL_PRODUCT_SHOW}/${product.id}`}>Afficher</Link>
                                <Link to={`${URL_PRODUCT_EDIT}/${product.id}`} >Editer</Link>
                                <button onClick={() => deleteProduct(product.id)}>Supprimer</button>

                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
};


export default GetAllProducts;