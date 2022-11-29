import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";


const URL = "http://localhost:8000/api/products";




const Product = () =>{

    const [Products, getProduct] = useState([]);
    
    
    const getAllProduct = async () => {
        await axios.get(`${URL}`)
        .then((response) => {
            getProduct(response.data["hydra:member"]);
            // console.log(response.data["hydra:member"]);
        })
        .catch((err) => {
            (console.error(err));
        })
    };
    
    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <>
        <h1>Hello product</h1>
        {Products.map((Product) => {
        return (
          <div key={Product.id}>
            <ul>
              <li>votre produit est: {Product.name}</li>
              <li>Le prix est : {Product.price}</li>
            </ul>
          </div>
        );
    })}
        </>
    );
};

export default Product;