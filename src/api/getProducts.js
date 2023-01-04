import axios from "axios";

export const getProducts = async () => {
    const res = await axios.get("http://localhost:8080/products", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    return res.data;
};
