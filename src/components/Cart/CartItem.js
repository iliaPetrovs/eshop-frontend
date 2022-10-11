import React from "react";
import { Wrapper } from "./CartItem.style";
import { toCurrency } from "../../utils/currency";
import Quantity from "../Misc/Quantity";
import classNames from "classnames";

import styles from "./Cart.module.css";

export default function CartItem({ item, addToCart, removeFromCart }) {
    return (
        <Wrapper>
            <div className="container">
                <div className={classNames(styles.desc, "row")}>
                    <div className="col-12 col-md-4">
                        <h3 className={styles.itemName}>{item.name}</h3>
                        <p className={styles.price}>
                            {item.amount} X {new Intl.NumberFormat("en-GB", {
                                style: "currency",
                                currency: "GBP",
                            }).format(item.price)}
                        </p>
                        <p className={styles.subtotal}>
                            Subtotal: {toCurrency(item.amount * item.price)}
                        </p>
                    </div>
                    <div className="col-12 col-md-8">
                        <img
                            className={styles.image}
                            src={item.imageUrl}
                            alt={item.name}
                        />
                    </div>
                </div>
                <div className={classNames(styles.quantity, "row")}>
                    <Quantity />
                </div>
            </div>
        </Wrapper>
    );
}
