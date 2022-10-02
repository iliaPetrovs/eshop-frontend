export const toCurrency = (price) => {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    }).format(price.toFixed(2));
};

export const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);
