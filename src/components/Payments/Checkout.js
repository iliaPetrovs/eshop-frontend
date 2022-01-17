import React, { useEffect } from "react";
import CheckoutForm from "./CheckoutForm";
import StripeContainer from "./StripeContainer";

export default function Checkout({ cartItems }) {
  useEffect(() => console.log(cartItems), [cartItems]);
  return (
    <div>
      <CheckoutForm />
    </div>
  );
}
