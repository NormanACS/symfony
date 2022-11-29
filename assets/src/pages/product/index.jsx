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


    const addProduct = () => {
        alert(`produit ajouter : ${Product.id}`);
    };

    const deleteProduct = () => {
        alert(`produit supp : ${Product.id}`);
    };

    const updateProduct = () => {
        alert(`produit mise a jour : ${Product.id}`);
    };

    const submiteForm = () => {
        try {
             alert('ok');
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <>

        <h1>Hello product</h1>
        <hr style={{marginTop: "5rem"}}/>
        <form action="" style={{display: "flex", 
        flexDirection: "column", 
        width: "50%", 
        marginTop: "2rem", 
        marginBottom: "2rem"
        }}>
            <label htmlFor="text">Nom du produit :</label>
            <input type="text" />
            <label htmlFor="desciption">Description :</label>
            <textarea type="desciption" />
            <label htmlFor="price">Prix :</label>
            <input type="number" />
            <button type="button" onClick={() => submiteForm()}>Envoyer</button>
        </form>
        <hr style={{marginBottom: "5rem"}}/>



        {Products.map((Product) => {
        return (
          <div key={Product.id}>
            <ul>
              <li>votre produit est: {Product.name}</li>
              <li>Description du produit : {Product.description}</li>
              <li>Le prix est : {Product.price} €</li>
              <button type="button"  onClick={() => addProduct()}>Ajouter au pannier</button>
              <button type="button"  onClick={() => deleteProduct()}>Supprimer un produit</button>
              <button type="button"  onClick={() => updateProduct()}>Mise a jour</button>
            </ul>
          </div>
        );
    })}
        </>
    );
};

export default Product;