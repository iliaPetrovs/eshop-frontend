import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { Routes, Route, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { cartAtom } from "../../atoms/cart";

export const ButtonWrapper = ({ currency, showSpinner }) => {
    const history = useHistory();
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const cartItems = useRecoilValue(cartAtom);

    const calculateTotal = (items) =>
        items.reduce((ack, item) => ack + item.amount * item.price, 0);

    const style = { layout: "vertical" };
    const total = calculateTotal(cartItems);
    const itemsFinal = cartItems.map((item) => {
        return {
            name: item.name,
            quantity: item.amount,
            unit_amount: {
                currency_code: "GBP",
                value: item.price,
            },
            description: item.description,
            tax: {
                currency_code: "GBP",
                value: "0.00",
            },
            category: "PHYSICAL_GOODS",
        };
    });

    const purchaseUnits = [
        {
            amount: {
                currency_code: "GBP",
                value: total,
                breakdown: {
                    item_total: {
                        currency_code: "GBP",
                        value: total,
                    },
                    shipping: {
                        currency_code: "GBP",
                        value: "0.00",
                    },
                    discount: {
                        currency_code: "GBP",
                        value: "0.00",
                    },
                    tax_total: {
                        currency_code: "GBP",
                        value: "0.00",
                    },
                },
            },
            reference_id: "FujiFox",
            description: "Hand made goods",
            shipping: {
                address: {
                    address_line_1: "123 Townsend St",
                    address_line_2: "Floor 6",
                    admin_area_2: "San Francisco",
                    admin_area_1: "CA",
                    postal_code: "94107",
                    country_code: "US",
                },
            },
            items: itemsFinal,
        },
    ];

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
                forceReRender={[total, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: purchaseUnits,
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            console.log(orderId);
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                        console.log(data);
                        history.push('/success');
                    });
                }}
            />
        </>
    );
};
