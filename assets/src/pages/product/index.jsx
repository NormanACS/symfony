import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { useParams } from "react-router-dom";


const URL = "http://localhost:8000/api/products";

// const ID = "http://localhost:8000/api/products/id";



const Product = () =>{
    
    const [Products, getProduct, deletProduct] = useState([]);
    
    
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
    

    // Rajouter un product 
    const addProduct = async () => {
        axios.post('/user', {
            firstName: '',
            lastName: ''
          })
          .then(function (response) {
            getAllProduct();
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

//     const element = document.querySelector('#post-request-error-handling .article-id');
// const article = { title: 'Axios POST Request Example' };
// axios.post('https://reqres.in/invalid-url', article)
//     .then(response => element.innerHTML = response.data.id )
//     .catch(error => {
//         element.parentElement.innerHTML = `Error: ${error.message}`;
//         console.error('There was an error!', error);
//     });


    const {id} = useParams();

                        // Delete un product
    const deleteProduct = (id) => {
         axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                getAllProduct();
                console.log();
            })
            .catch(error => {
                console.error(error);
            });
        [];
     };


    // Update un product
    const updateProduct = async () => {
        alert(`produit mise a jour : ${Product.id}`);

        // await axios.put('http://localhost:8000/api/products/2', article)
        // .then(response => this.setState({ updatedAt: response.data.updatedAt }))
        // .catch(error => {
        //     this.setState({ errorMessage: error.message });
        //     console.error('There was an error!', error);
        // });

        await axios.put(`${URL}`)
        .then(response => this.setState({ updatedAt: response.data.updatedAt }))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
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
              <button type="button"  onClick={() => addProduct()}>Ajouter</button>
              <button type="button"  onClick={() => deleteProduct(Product.id)}>Supprimer un produit</button>
              <button type="button"><a href="../contact">Mise a jour</a></button>
              {/* <button type="button"  onClick={() => updateProduct()}> <a href="../contact">Mise a jour</a></button> */}
            </ul>
          </div>
        );
    })}
        </>
    );
};

export default Product;