import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import process from "process";

export const EditProduct = () => {
  const [product, setProduct] = useState({
    id: useParams().id,
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

const SubmitProduct = async (event) => {
  // event.preventDefault();

  await axios.put(`${process.env.URL_PRODUCT}/${product.id}`, {
    name: product.name,
    description: product.description,
    price: product.price,
  }).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.error(error);
  });
};

  return (
    <>
      <h1>éditer un produit</h1>
      <form>
        <label htmlFor="name">Nom du produit</label>
        <input value={product.name} onChange={onChangeName} type="text" name="name" />
        <label htmlFor="" >Description du produit:</label>
        <input value={product.description} onChange={onChangeDescription} type="text" name="description"/>        
        <label htmlFor="" >Prix du produit:</label>
        <input type="text" value={product.price} onChange={onChangePrice} name="price"/>
        <button type="button" onClick={() => SubmitProduct()}>Envoyer</button>
      </form>
    </>
  );
};



// import axios from "axios";
// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { URL_PRODUCT } from "../../../middleware/environment";
// import { useParams } from "react-router-dom";



// const EditProduct = () => {
// const [product, setProduct] = useState({
//     id: useParams().id,
//     name: "",
//     description: "",
//     price: 0,
//  });


//  const onChangeName = (event) => {

//     setProduct({
//         ...product,
//         name: event.target.value,
//     });

// };

// const onChangeDescription = (event) => {
//     setProduct({
//         ...product,
//         description: event.target.value,
//     });
// };

// const onChangePrice = (event) => {
//     setProduct({
//         ...product,
//         price: parseFloat(event.target.value),
//     });
// };

// const SubmitProduct = async (event) => {
//     event.preventDefault();

//     await axios.put(`${URL_PRODUCT}/${product.id}`, {
//         name: product.name,
//         description: product.description,
//         price: product.price,
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((err) => {
//         console.error(err);
//     });
// };

//  return (
//     <>
// <h1>Creer un produit</h1>
// <form onSubmit={() => SubmitProduct()}>

//     <label htmlFor="name">Non du produit</label>
//     <input id={"name"} type="text" onChange={onChangeName} name="name" value={product.name}/>
//     <label htmlFor="description">decription du produit :</label>
//     <input type="text" id="description" value={product.description} onChange={onChangeDescription}/>
//     <label htmlFor="">Prix :</label>
//     <input type="text" id="price" value={product.price} onChange={onChangePrice}/>
//     <button type="buttom" onClick={() => SubmitProduct()}>Envoyer</button>
// </form>
// </>
//  );

// }

// export default EditProduct;