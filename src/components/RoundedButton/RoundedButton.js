import React from "react";

import styles from "./RoundedButton.module.css";

export default function RoundedButton({handleAddToCart, disabled}) {
    return (
        <button
            className={styles.btnBasket}
            onClick={handleAddToCart}
            disabled={disabled}
        >
            Add to cart
        </button>
    );
}
