import { Drawer, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import items from "../utils/mocks/items";
import Cart from "./Cart/Cart";
import CTAImage from "./CTAImage/CTAImage";
import AddressForm from "./AddressForm/AddressForm";
import Rows from "./Rows/Rows";

export default function About() {
    const [cartOpen, setCartOpen] = useState(true);
    return (
        <div
            className="w-100 mx-auto"
            style={{ margin: "0 auto", border: "1px solid black" }}
        >
            <AddressForm />
        </div>
    );
}
