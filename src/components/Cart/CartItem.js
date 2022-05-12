import React from "react";
import Button from "@material-ui/core/Button";
import { Wrapper } from "./CartItem.style";
import { toCurrency } from "../../utils/currency";

export default function CartItem({ item, addToCart, removeFromCart }) {
    return (
        <Wrapper className="d-flex justify-content-between p-4">
            <div>
                <h3>{item.name}</h3>
                <div className="basket-product-information">
                    <p>
                        Price:{" "}
                        {new Intl.NumberFormat("en-GB", {
                            style: "currency",
                            currency: "GBP",
                        }).format(item.price)}
                    </p>
                    <p>Subtotal: {toCurrency(item.amount * item.price)}</p>
                </div>
                <div class="quantity-box">
                    <button
                        class="decr"
                        onClick={() => removeFromCart(item.id)}
                    >
                        <span class="button-inner">-</span>
                    </button>
                    <input
                        type="number"
                        value={item.amount}
                        // onChange={handleQuantity}
                        onFocus={(e) => e.target.select()}
                        min="1"
                        max="99"
                    />
                    <button class="incr" onClick={() => addToCart(item)}>
                        <span class="button-inner">+</span>
                    </button>
                </div>
            </div>
            <img
                style={{
                    maxWidth: "80px",
                    objectFit: "cover",
                    marginLeft: "40px",
                }}
                src={item.imageUrl}
                alt={item.name}
            />
        </Wrapper>
    );
}
