export const toCurrency = (price) => {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    }).format(price.toFixed(2));
};
