import React, { useState } from "react";
import axios from "axios";
import { URL_PRODUCT } from "../../../middleware/environment";

const CreateProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
    });
    
    
    const onChangeName = (event) => {

        setProduct({
            ...product,
            name: event.target.value,
        });

    };

    const onChangeDescription = (event) => {
        setProduct({
            ...product,
            description: event.target.value,
        });
    };

    const onChangePrice = (event) => {
        setProduct({
            ...product,
            price: parseFloat(event.target.value),
        });
    };

    const SubmitProduct = (event) => {
        event.preventDefault();

        let formData = {
            name: product.name,
            description: product.description,
            price: product.price,
        };

        axios.post(`${URL_PRODUCT}`, formData).then((response) => {
            console.log(response);
        });
        // do some stuff
    };

    return (
        <>
    <h1>Creer un produit</h1>
    <form onSubmit={() => SubmitProduct()}>

        <label htmlFor="name">Non du produit</label>
        <input id={"name"} type="text" onChange={onChangeName} name="name" value={product.name}/>
        <label htmlFor="description">decription du produit :</label>
        <input type="text" id="description" value={product.description} onChange={onChangeDescription}/>
        <label htmlFor="">Prix :</label>
        <input type="text" id="price" value={product.price} onChange={onChangePrice}/>
        <button onClick={() => SubmitProduct()}>Envoyer</button>
        <button type="submit">Envoyer</button>
    </form>
    </>
     );
};

export default CreateProduct;