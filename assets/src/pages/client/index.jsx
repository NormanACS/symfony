import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";

const URL = "http://localhost:8000/api/clients";

const Client = () =>{

    const [Clients, getClient] = useState([]);



      // const getPosts = async () => {
  //   await axios
  //     .get(`${URL}`)
  //     .then((response) => {
  //       getAllPosts(response.data);
  //     })
  //     .catch((error) => console.error(error));
  // };

    const getAllClient = async () => {
        await axios.get(`${URL}`)
        .then((response) => {
            getClient(response.data["hydra:member"]);
            // console.log(response.data["hydra:member"]);
        })
        .catch((error) => {
            (console.error(error));
        })
    };

    useEffect(() => {
        getAllClient();
    }, []);

    return (
        <>
        <h1>Hello</h1>
        {Clients.map((client) => {
        return (
          <div key={client.id}>
            <ul>
              <li>Le votre nom est : {client.full_name}</li>
              <li>Le corps du mail : {client.email}</li>
            </ul>
          </div>
        );
    })}
        </>
    );
};

export default Client;