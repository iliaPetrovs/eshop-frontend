import React from "react";
import items from "../utils/mocks/items";
import ProductPage from "./ProductPage/ProductPage";

export default function About() {
    return (
        <div
            className="w-100 mx-auto"
            style={{ margin: "0 auto", border: "1px solid black" }}
        >
            <ProductPage item={items[0]} />
        </div>
    );
}
