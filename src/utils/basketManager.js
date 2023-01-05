export const setStorage = (cart) => {
    if (typeof window !== "undefined") {
        window.localStorage.setItem("FUJI_SESSION", JSON.stringify(cart));
    }
};

export const getStorage = () => {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem("FUJI_SESSION")) || [];
    }
};
