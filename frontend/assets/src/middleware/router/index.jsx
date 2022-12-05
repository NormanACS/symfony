import React from "react";
import { createRoot } from "react-dom/client";
import {  RouterProvider } from "react-router-dom";
import { Provider } from "./provider";

 const Router = () => {
    const container= document.getElementById("root");
    const root = createRoot(container);
    root.render(<RouterProvider router={Provider} />);
 };

export default Router;