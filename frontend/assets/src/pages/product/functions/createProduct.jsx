import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        dexcription: "",
        price: 0,
    });


    const onChangeName = () => {
        ...product;
    };

    const onChangeDescription = () => {
        ...product;
    };

    const onChangePrice = () => {
        ...product;
    };

    const SubmitProduct = (event) => {
        event.preventDefault();

        // do some stuff
    };

    return (
        <>
    <h1>Creer un produit</h1>
    <form onSubmit={() => SubmitProduct()}>

        <label htmlFor="name">Non du produit</label>
        <input id={"name"} type="text" onChange={onChangeName} name="name" value={product.name}/>
        <button onClick={() => SubmitProduct()}>Encoyer</button>
        <button type="submit">Encoyer</button>
    </form>
    </>
        )
}

export default CreateProduct;