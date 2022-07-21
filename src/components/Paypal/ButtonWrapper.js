import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import {Routes, Route, useHistory} from 'react-router-dom';
import React, { useEffect } from "react";

export const ButtonWrapper = ({ currency, showSpinner, cartItems }) => {
    const history = useHistory();
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    const calculateTotal = (items) =>
        items.reduce((ack, item) => ack + item.amount * item.price, 0);

    const style = { layout: "vertical" };
    const amount = calculateTotal(cartItems);

    const purchaseUnits = cartItems.map((item) => {
        return {
            description: item.name,
            amount: {
                currency_code: currency,
                value: calculateTotal([item]),
            },
        };
    });

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);

    return (
        <>
            {showSpinner && isPending && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: purchaseUnits,
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                        history.push('/success');
                    });
                }}
            />
        </>
    );
};
