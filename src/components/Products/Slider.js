import React, { useState, useMemo } from "react";
import ShopItem from "./ShopItem";
import axios from "axios";
import Loader from "../Misc/Loader";

export default function Slider({ handleAddToCart }) {
  const [items, setItems] = useState([]);

  useMemo(() => {
    axios
      .get("http://localhost:8080/products", {
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
    <div className="shopfront">
      <div className="shop-header p-4 w-75 mx-auto">
        <h2 className="separator">
          <span className="nested-separator">SHOP ALL</span>
        </h2>
      </div>
      {items.length === 0 ? (
        <Loader />
      ) : (
        <div className="slider-container mx-auto">
          {items?.map((item) => {
            return (
              <ShopItem
                key={item.id}
                product={item}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
