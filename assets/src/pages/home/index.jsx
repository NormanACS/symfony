import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { checkPropTypes } from "prop-types";

const URL = "https://jsonplaceholder.typicode.com/posts/";
const URL_ = "http://localhost:8000/api/posts/";

const Home = () => {

    const onSubmit = () => {
        axios.get("http://localhost:8000/api/users")
            .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
        console.log("clicked");
    };

        const [posts, getAllPosts] = useState([]);
        const [postsSynfony, getPostsSynfony] = useState ([]);

        const getpostsSynfony = async () => {
            await axios.get(`${URL_}`)
            .then((response) =>{
                getPostsSynfony(response.data["hydra:momber"]);
                
            })
            .catch((error) => console.error(error));
        };  
        
        const getPosts = async () => {
            await axios.get(`${URL}`)
            .then((response) =>{
                getAllPosts(response.data);
            })
            .catch((error) => console.error(error));
        };

        useEffect(() => {
            getPosts();
            getpostsSynfony();
        }, []);

    return (
        <div>
            <h1>Hello HomePage !</h1>
            <button type="button" onClick={() => onSubmit()}>Envoyer</button>
            {postsSynfony.map((posts) => {
                return (
                    <div key={posts.id}>
                        <ul>
                            <li>votre nom:
                                {posts.nom}
                            </li>
                            <li>votre age:
                                {posts.age}
                            </li>
                        </ul>
                    </div>
                )
            })}
            
            
            {posts.map((posts) => {
                return (
                    <div key={posts.id}>
                        <ul>
                            <li>MON TITRE:
                                {posts.title}
                            </li>
                            <li>mon corp:
                                {posts.body}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;