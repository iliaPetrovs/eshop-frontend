import React, { useState, useMemo } from "react";
import Category from "../../Tools/utils.ts";
import ShopItem from "./ShopItem";
import jsonData from "../../api/products.json";
import { Server } from "miragejs";
import { Grid } from "@material-ui/core";
import axios from "axios";
import Loader from "../Misc/Loader";

export default function Slider({ handleAddToCart }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
          <span className="nested-separator">NEW IN</span>
        </h2>
      </div>
      {items.length === 0 ? (
        <Loader />
      ) : (
        // <div className="slider-container flex-wrap d-flex mx-auto w-75">
        <div className="slider-container w-75 mx-auto">
          {/* <Grid
          className="w-75 d-flex justify-content-between mx-auto"
          container
          spacing={4}
        > */}
          {items?.map((item) => {
            return (
              <ShopItem
                key={item.id}
                data={item}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
          {/* </Grid> */}
        </div>
      )}
    </div>
  );
}