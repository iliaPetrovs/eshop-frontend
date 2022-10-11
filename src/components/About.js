import { Drawer, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import items from "../utils/mocks/items";
import Cart from "./Cart/Cart";
import ProductPage from "./ProductPage/ProductPage";

export default function About() {
    const [cartOpen, setCartOpen] = useState(true);
    return (
        <div
            className="w-100 mx-auto"
            style={{ margin: "0 auto", border: "1px solid black" }}
        ></div>
    );
}
