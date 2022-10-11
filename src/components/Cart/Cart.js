import React, { useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Loader from "../Misc/Loader";
import { toCurrency } from "../../utils/currency";

import styles from "./Cart.module.css";
import Squiggle from "../Misc/Squiggle";
import Button from "../Button/Button";

export default function Cart({
  cartItems,
  addToCart,
  removeFromCart,
  toggleCart,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);

  const handleCheckout = () => {
    console.log('checkout')
  };

  return (
    <div className={styles.cart}>
      <h2 className="my-2">Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <>
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <Squiggle />
        </>
      ))}
      <h2 className="mt-4 mb-3">
        Total:{"  "}
        {isLoading ? (
          <Loader />
        ) : (
          toCurrency(calculateTotal(cartItems))
        )}
      </h2>
      <Link className={styles.checkout} to="/checkout" onClick={handleCheckout}>
        <Button colour="primary" value="Checkout" rounded={true}/>
      </Link>
    </div>
  );
}
