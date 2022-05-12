import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Loader from "../Misc/Loader";
import { toCurrency } from "../../utils/currency";

export default function Cart({
  cartItems,
  addToCart,
  removeFromCart,
  toggleCart,
}) {
  const [clientSecret, setClientSecret] = useState(null);
  const [basketTotal, setBasketTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // fetch("http://localhost:8080/pay", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ products: [...cartItems] }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setClientSecret(data.clientSecret);
    //     console.log(clientSecret)
    //   });
  }, [cartItems]);

  const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);

  const handleCheckout = () => {
    fetch("http://localhost:8080/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ products: [...cartItems] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log(data)
        toggleCart();
      });
  };

  return (
    <div className="p-4">
      <h2 className="my-2">Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2 className="my-4">
        Total:{"  "}
        {isLoading ? (
          <Loader />
        ) : (
          toCurrency(calculateTotal(cartItems))
        )}
      </h2>
      <Link className="pay-btn" to="/checkout" onClick={handleCheckout}>
        <div className="pay-btn-container">Checkout</div>
      </Link>
    </div>
  );
}
