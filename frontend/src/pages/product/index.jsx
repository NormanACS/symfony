import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditProduct } from "./functions/editProduct";
import { CreateProduct } from "./functions/createProduct";
import { GetAllProducts } from "./functions/getAllProduct";

export const Product = () => {
  return (
    <>
      <GetAllProducts />
      <EditProduct />
      <CreateProduct />
    </>
  )
};