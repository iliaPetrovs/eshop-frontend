import classNames from "classnames";
import React, { useState } from "react";
import { toCurrency } from "../../utils/currency";
import Paypal from "../Paypal/Paypal";

export default function Checkout({ cartItems }) {
    const [showOrderSummary, setShowOrderSummary] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);

    const calculateTotal = (items) =>
        items.reduce((ack, item) => ack + item.amount * item.price, 0);

    const goToPayment = () => {
        setShowCheckout(true);
    };

    console.log(cartItems)

    return (
        <div className="checkout-container">
            {showCheckout ? (
                <div>
                    <div className="order-summary-container">
                        <button
                            className="order-summary"
                            onClick={() =>
                                setShowOrderSummary(!showOrderSummary)
                            }
                        >
                            <div className="order-summary-subcontainer">
                                <div>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <span className="mx-2">
                                        {showOrderSummary ? "Hide" : "Show"}{" "}
                                        order details
                                    </span>{" "}
                                    {showOrderSummary ? (
                                        <i class="fa-solid fa-caret-up"></i>
                                    ) : (
                                        <i class="fa-solid fa-caret-down"></i>
                                    )}
                                </div>
                                <span className="order-total-checkout">
                                    Total: {toCurrency(calculateTotal(cartItems))}
                                </span>
                            </div>
                        </button>
                        <div
                            className={classNames("order-summary-details", {
                                "order-summary-details-hidden":
                                    !showOrderSummary,
                            })}
                        >
                            {cartItems.map((item) => (
                                <div className="order-summary-item">
                                    <div className="order-summary-name">
                                        <h3>{item.name} <span style={{fontWeight: '200', fontSize: '1rem'}}>x{item.amount}</span></h3>
                                    </div>
                                    <div>
                                        <h4 className="order-summary-subtotal">
                                            Subtotal:{"  "}
                                            <span>
                                                {toCurrency(
                                                    calculateTotal([item])
                                                )}
                                            </span>
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Paypal cartItems={cartItems} />
                </div>
            ) : (
                <div>
                    <div className="order-summary-container">
                        <button
                            className="order-summary"
                            onClick={() =>
                                setShowOrderSummary(!showOrderSummary)
                            }
                        >
                            <div className="order-summary-subcontainer">
                                <div>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <span className="mx-2">
                                        {showOrderSummary ? "Hide" : "Show"}{" "}
                                        order details
                                    </span>{" "}
                                    {showOrderSummary ? (
                                        <i class="fa-solid fa-caret-up"></i>
                                    ) : (
                                        <i class="fa-solid fa-caret-down"></i>
                                    )}
                                </div>
                                <span className="order-total-checkout">
                                    {toCurrency(29)}
                                </span>
                            </div>
                        </button>
                        <div
                            className={classNames("order-summary-details", {
                                "order-summary-details-hidden":
                                    !showOrderSummary,
                            })}
                        >
                            <h3>Hello</h3>
                            <img src="https://ishadeed.com/assets/scrollbars/scrollbar-intro.jpg" />
                        </div>
                    </div>
                    <form className="details-section">
                        <div className="contact-section">
                            <div className="section-header">
                                <h2>Contact information</h2>
                            </div>
                            <div className="section-content">
                                <label></label>
                                <input placeholder="Email" />
                            </div>
                        </div>
                        <div className="shipping-information">
                            <div className="section-header">
                                <h2>Shipping information</h2>
                            </div>
                            <div className="section-content">
                                <label></label>
                                <input placeholder="Country" />
                                <label></label>
                                <input placeholder="First name" />
                                <label></label>
                                <input placeholder="Last name" />
                                <label></label>
                                <input placeholder="Street name and house number" />
                                <label></label>
                                <input placeholder="City" />
                                <label></label>
                                <input placeholder="Postal code" />
                                <label></label>
                                <input placeholder="Phone number" />
                            </div>
                            <div>
                                <button
                                    className="pay-btn-container"
                                    onClick={() => goToPayment()}
                                >
                                    Continue to payment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
