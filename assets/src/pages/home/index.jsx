import React from "react";
import axios from "axios";
import { checkPropTypes } from "prop-types";

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

    return (
        <div>
            <h1>Hello HomePage !</h1>
            <button type="button" onClick={() => onSubmit()}>Envoyer</button>
        </div>
    )
}

export default Home;