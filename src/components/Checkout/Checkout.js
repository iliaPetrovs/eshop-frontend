import React from "react";
import AddressForm from "../AddressForm/AddressForm";
import OrderSummary from "../OrderSummary/OrderSummary";

export default function Checkout() {
    return (
        <div className="">
            <div className="mx-auto">
                <div className="row">
                    <div className="col-12">
                        <OrderSummary />
                    </div>
                    <div className="col-12">
                        <AddressForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
