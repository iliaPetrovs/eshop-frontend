import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ShopItem from "../Products/ShopItem";
import Select from "../Misc/Select";
import CategoryHeader from "../Misc/CategoryHeader";

export default function Bags() {
    const [items, setItems] = useState([]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8080/products/category/bag", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="category-page-wrapper">
            <CategoryHeader
                categoryName="Bags"
                resultQty={items.length}
                options={["Sort by..."]}
            />
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
