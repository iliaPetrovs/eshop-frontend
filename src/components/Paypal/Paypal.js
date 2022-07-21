import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ButtonWrapper } from "./ButtonWrapper";

export default function Paypal({ cartItems }) {
    return (
        <div className="paypal-container">
            <PayPalScriptProvider
                options={{
                    "client-id":
                        "AXTL4sTCSX5HlA9UvwkjfVoXcTxDjZqKbp_EUHptmv6c-6koiWW18_jr01DQ0IDMfPMcMp5vibQG38s-",
                    currency: "GBP",
                }}
            >
                <ButtonWrapper
                    currency="GBP"
                    showSpinner={false}
                    cartItems={cartItems}
                />
                ;
            </PayPalScriptProvider>
        </div>
    );
}
