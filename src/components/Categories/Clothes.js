import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ShopItem from "../Products/ShopItem";

export default function Clothes() {
    const [items, setItems] = useState([]);
    
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8080/products/category/clothes", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((response) => {
                console.log(response.data);
                setItems(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="category-page-wrapper">
            <div className="category-header">
                <h1>Shop Clothes</h1>
            </div>
            {items.length > 0 ? (
                <div className="slider-container w-75 mx-auto">
                    {items &&
                        items.map((item) => (
                            <ShopItem
                                key={item.id}
                                product={item}
                                handleAddToCart={() => {}}
                            />
                        ))}
                </div>
            ) : (
                <div className="no-stock-label d-flex flex-column align-items-center">
                    <h3>Sorry, there's nothing here!</h3>
                    <p>Come back later when we have more stock.</p>
                </div>
            )}
        </div>
    );
}
