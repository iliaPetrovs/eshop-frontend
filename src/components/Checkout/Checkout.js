import React, { useState } from "react";
import AddressForm from "../AddressForm/AddressForm";
import OrderSummary from "../OrderSummary/OrderSummary";
import Paypal from "../Paypal/Paypal";

export default function Checkout() {
    const [showCheckout, setShowCheckout] = useState(false);

    const goToPayment = (e) => {
        e.preventDefault()
        console.log('hello');
        setShowCheckout(true);
    };
    return (
        <div className="section">
            <div className="mx-auto">
                <div className="row">
                    <div className="col-12">
                        <OrderSummary />
                    </div>
                    <div className="col-12">
                        {showCheckout ? (
                            <Paypal />
                        ) : (
                            <AddressForm handleSubmit={goToPayment} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
