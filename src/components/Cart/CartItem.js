import React from "react";
import { Wrapper } from "./CartItem.style";
import { toCurrency } from "../../utils/currency";
import Quantity from "../Misc/Quantity";
import classNames from "classnames";

import styles from "./Cart.module.css";
import { useRecoilState } from "recoil";
import { cartAtom } from "../../atoms/cart";
import { setStorage } from "../../utils/basketManager";

export default function CartItem({ item }) {
    const [cartItems, setCartItems] = useRecoilState(cartAtom);
    const onIncrease = () => {
        const newItem = { ...item, amount: item.amount + 1 };
        const idx = cartItems.indexOf(item)
        const newCart = [...cartItems];
        newCart.splice(idx, 1, newItem);

        setStorage(newCart);
        setCartItems(newCart);
    };

    const onDecrease = () => {
        const newItem = { ...item, amount: item.amount - 1 };
        const idx = cartItems.indexOf(item)
        const newCart = [...cartItems];
        newCart.splice(idx, 1, newItem);

        setCartItems(newCart);
        setStorage(newCart);
    };
    return (
        <Wrapper>
            <div className="container">
                <div className={classNames(styles.desc, "row")}>
                    <div className="col-12 col-md-4">
                        <h3 className={styles.itemName}>{item.name}</h3>
                        <p className={styles.price}>
                            {item.amount} X{" "}
                            {new Intl.NumberFormat("en-GB", {
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
                    <Quantity
                        value={item.amount}
                        onDecrease={onDecrease}
                        onIncrease={onIncrease}
                    />
                </div>
            </div>
        </Wrapper>
    );
}
