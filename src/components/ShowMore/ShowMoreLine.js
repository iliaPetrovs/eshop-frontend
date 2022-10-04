import React from "react";
import ShopItem from "../Products/ShopItem";

import styles from "./ShowMore.module.css";

export default function ShowMoreLine({ products }) {
    return (
        <div className={styles.productContainer}>
             {products?.map((item) => (
                <ShopItem product={item} />
            ))}
        </div>
    );
}
