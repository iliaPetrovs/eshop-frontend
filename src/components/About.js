import React from "react";
import Footer from "./Footer/Footer";
import OrderSummary from "./OrderSummary/OrderSummary";

export default function About() {
    return (
        <div
            className="w-100 mx-auto"
            style={{ margin: "0 auto", border: "1px solid black" }}
        >
            <OrderSummary />
        </div>
    );
}
