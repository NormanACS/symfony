import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import process from "process";

export const CreateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  // faire un set product de name pour la fonction on change name
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
    // event.preventDefault();

    let formData = {
      name: product.name,
      description: product.description,
      price: product.price,
    };
    axios.put(`${process.env.URL_PRODUCT}`, formData).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <h1>Créer un produit</h1>
      <form>
        <label htmlFor="name">Nom du produit</label>
        <input
          id={"name"}
          value={product.name}
          onChange={onChangeName}
          type="text"
          name="name"
        />
        <label id={"name"} htmlFor="">
          Description du produit:
        </label>
        <input
          id="description"
          value={product.description}
          onChange={onChangeDescription}
          type="text"
          name="description"
        />
        <label id={"name"} htmlFor="">
          Prix du produit:
        </label>
        <input
          id="price"
          type="text"
          value={product.price}
          onChange={onChangePrice}
          name="price"
        />
        <button type="button" onClick={() => SubmitProduct()}>
          Envoyer
        </button>
      </form>
    </>
  );
};

// event prevent default, permet de submit mais sans refresh tout le contenu de la page
