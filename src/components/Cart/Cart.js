import React from "react";
import CartItem from "./CartItem";
import StripeContainer from "../Payments/StripeContainer";
import { Link } from "react-router-dom";
import CheckoutForm from "../Payments/CheckoutForm";
import { useStripe } from "@stripe/react-stripe-js";

export default function Cart({ cartItems, addToCart, removeFromCart, toggleCart }) {
  const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);
    
  return (
    <div className="p-4">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        // <div>dfsd</div>
      ))}
      <h2>Total: {new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(calculateTotal(cartItems).toFixed(2))}</h2>
      {/* <Link onClick={() => toggleCart()} to="/checkout" className="btn-secondary bg-dark text-white">Checkout</Link> */}
      {/* <StripeContainer total={calculateTotal} /> */}
      <Link to="/checkout" onClick={() => toggleCart()}>Pay</Link>
    </div>
  );
}
