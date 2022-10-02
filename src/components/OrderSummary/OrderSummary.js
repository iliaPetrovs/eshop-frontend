import classNames from "classnames";
import React, { useState } from "react";
import { calculateTotal, toCurrency } from "../../utils/currency";

import styles from "./OrderSummary.module.css";

export default function OrderSummary({ cartItems, shipping }) {
    const [showOrderSummary, setShowOrderSummary] = useState(false);
    // const cartItems = [
    //     {
    //         id: 3,
    //         name: "sdfs",
    //         description: "sdfa",
    //         price: 231,
    //         category: "patch",
    //         imageUrl:
    //             "http://localhost:3000/static/media/coyoteSticker.bf798582302213e5ff5d.webp",
    //         stock: 23,
    //         amount: 1,
    //     },
    //     {
    //         id: 2,
    //         name: "sdfass",
    //         description: "dfas",
    //         price: 2,
    //         category: "patch",
    //         imageUrl:
    //             "http://localhost:3000/static/media/coyoteSticker.bf798582302213e5ff5d.webp",
    //         stock: 2,
    //         amount: 1,
    //     },
    //     {
    //         id: 3,
    //         name: "sdfs",
    //         description: "sdfa",
    //         price: 231,
    //         category: "patch",
    //         imageUrl:
    //             "http://localhost:3000/static/media/coyoteSticker.bf798582302213e5ff5d.webp",
    //         stock: 23,
    //         amount: 1,
    //     },
    //     {
    //         id: 2,
    //         name: "sdfass",
    //         description: "dfas",
    //         price: 2,
    //         category: "patch",
    //         imageUrl:
    //             "http://localhost:3000/static/media/coyoteSticker.bf798582302213e5ff5d.webp",
    //         stock: 2,
    //         amount: 1,
    //     },
    // ];

    return (
        <div className={styles.orderSummaryContainer}>
            <button
                className={styles.orderSummary}
                onClick={() => setShowOrderSummary(!showOrderSummary)}
            >
                <div className={styles.orderSummarySubcontainer}>
                    <div>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span className="mx-2">
                            {showOrderSummary ? "Hide" : "Show"} order details
                        </span>{" "}
                        {showOrderSummary ? (
                            <i class="fa-solid fa-caret-up"></i>
                        ) : (
                            <i class="fa-solid fa-caret-down"></i>
                        )}
                    </div>
                    {!showOrderSummary && (
                        <span className={styles.orderTotalCheckout}>
                            Total: {toCurrency(calculateTotal(cartItems))}
                        </span>
                    )}
                </div>
            </button>
            <div
                className={classNames(styles.orderSummaryDetails, {
                    [styles.orderSummaryDetailsHidden]: !showOrderSummary,
                })}
            >
                {cartItems.map((item) => (
                    <div className={styles.orderSummaryItem}>
                        <div className={styles.orderSummaryName}>
                            <img src={item.imageUrl} alt={item.name} />
                            <h3>
                                {item.name}{" "}
                                <span
                                    style={{
                                        fontWeight: "200",
                                        fontSize: "1rem",
                                    }}
                                >
                                    x{item.amount}
                                </span>
                            </h3>
                        </div>
                        <div>
                            <h4 className={styles.orderSummarySubtotal}>
                                <span>
                                    {toCurrency(calculateTotal([item]))}
                                </span>
                            </h4>
                        </div>
                    </div>
                ))}
                <div className={styles.shipping}>
                    <p>Shipping</p>
                    <p>{toCurrency(shipping)}</p>
                </div>
                <div className={styles.total}>
                    <p>Total</p>
                    <p>{toCurrency(calculateTotal(cartItems))}</p>
                </div>
            </div>
        </div>
    );
}

OrderSummary.defaultProps = {
    shipping: 0,
};
