export const setStorage = (cart) => {
    localStorage.setItem("FUJI_SESSION", JSON.stringify(cart));
};

export const getStorage = () => {
    return JSON.parse(localStorage.getItem("FUJI_SESSION")) || [];
};
