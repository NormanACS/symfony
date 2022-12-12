import axios from "axios";
import React, { useState } from "react";
import deleteProduct from "./deleteProduct";
import Swal from "sweetalert2";
import PropTypes, { func }  from "prop-types";
import { URL_PRODUCT } from "../../../middleware/environment";
import { set } from "core-js/core/dict";
import { useParams } from "react-router-dom";



const EditProduct = () => {
const [product, setProduct] = useState({
    id: useParams().id,
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
        price: event.target.value,
    });
};

const SubmitProduct = async (event) => {
    event.preventDefault();

    await axios.put(`${URL_PRODUCT}/${product.id}`, {
        name: product.name,
        description: product.description,
        price: product.price,
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.error(err);
    });
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
    <button type="buttom" onClick={() => SubmitProduct()}>Envoyer</button>
</form>
</>
 );

}

export default EditProduct;