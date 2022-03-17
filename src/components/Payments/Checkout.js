import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import StripeContainer from "./StripeContainer";
import { CheckoutStage } from "../../Tools/utils.ts";
import Loader from "../Misc/Loader";
import AddressForm from "./AddressForm";

export default function Checkout({ cartItems, clientSecret }) {
  const [checkoutStages, setCheckoutStages] = useState([
    "EMAIL",
    "ADDRESS",
    "PAYMENT",
    "SUCCESS",
  ]);
  const [currentCheckoutStage, setCurrentCheckoutStage] = useState(
    checkoutStages[0]
  );
  const [isLoading, setIsLoading] = useState(false);
  //   useEffect(() => console.log(cartItems), [cartItems]);
  //   return (
  //     <div>{addressComplete ? <CheckoutForm /> : <div>finish address</div>}</div>
  //   );
  const handleCheckoutStage = (e) => {
    setIsLoading(true);
    const dir = e.target.name;
    const currentIndex = checkoutStages.indexOf(currentCheckoutStage);
    if (dir === "next") {
      setCurrentCheckoutStage(checkoutStages[currentIndex + 1]);
    } else {
      setCurrentCheckoutStage(checkoutStages[currentIndex - 1]);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const transformPriceToCurrency = (price) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price.toFixed(2));
  };

  const calculateTotal = () =>
    cartItems.reduce((ack, item) => ack + item.amount * item.price, 0);

  if (isLoading) return <Loader />;
  return (
    <div>
      {(() => {
        switch (currentCheckoutStage) {
          case "EMAIL":
            return (
              <div>
                <form className="d-flex">
                  <div className="input-container mx-auto">
                    <input
                      name="email"
                      className="input-field"
                      placeholder="Email"
                      autoComplete="email"
                    ></input>
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                  </div>
                </form>
              </div>
            );
          case "ADDRESS":
            return (
              <AddressForm
                clientSecret={clientSecret}
                handleCheckoutStage={handleCheckoutStage}
              />
            );
          case "PAYMENT":
            return (
              <div className="border d-flex justify-content-between shadow">
                <CheckoutForm cartItems={cartItems} />
                <div className="m-auto order-summary">
                  <h2 className="border-bottom text-center">Order Summary</h2>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="col">Product</th>
                        <th className="col">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => {
                        return (
                          <tr>
                            <td>
                              {item.name} x {item.amount}
                            </td>
                            <td>{transformPriceToCurrency(item.price)}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td className="col">Total</td>
                        <td className="col">
                          {transformPriceToCurrency(calculateTotal())}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table">
                    <tr>
                      <thead></thead>
                    </tr>
                  </table>
                </div>
              </div>
            );
          default:
            return <Loader />;
        }
      })()}
      <div className="d-flex justify-content-between w-50 m-auto mt-5">
        <button
          disabled={checkoutStages.indexOf(currentCheckoutStage) === 0}
          className="btn btn-primary"
          onClick={handleCheckoutStage}
        >
          BACK
        </button>
        {checkoutStages.indexOf(currentCheckoutStage) < 2 && (
          <button
            className="btn btn-primary"
            onClick={handleCheckoutStage}
            name="next"
          >
            PROCEED TO PAYMENT
          </button>
        )}
      </div>
    </div>
  );
}
