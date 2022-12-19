import React from "react";
import { Navbar } from "../../components/navbar";

const DashBord = () => {
    return (
        <>
        <Navbar/>
        <h1>Hello {window.user.allias}, Bienvenue sur votre profil : </h1>
        </>
    );
};

export default DashBord;