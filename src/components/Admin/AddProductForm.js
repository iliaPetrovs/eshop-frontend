import axios from "axios";
import classNames from "classnames";
import React, { useLayoutEffect, useState } from "react";

export default function AddProductForm() {
    const initialState = {
        name: "",
        description: "",
        price: "",
        category: "",
        imageUrl: "",
        stock: "",
    };
    const [state, setState] = useState(initialState);
    const [showAlert, setShowAlert] = useState(false);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = ["Choose category...", "Bag", "Patch", "Sticker", "Pin"];

    const handleOnSubmit = (e) => {
        e.preventDefault();

        let bodyFormData = new FormData();
        bodyFormData.append("name", state.name);
        bodyFormData.append("description", state.description);
        bodyFormData.append("price", state.price);
        bodyFormData.append("category", state.category);
        bodyFormData.append("imageUrl", state.imageUrl);
        bodyFormData.append("stock", state.stock);

        axios
            .post("http://localhost:8080/products", bodyFormData)
            .then(() => {
                setState(initialState);
                displayAlert();
            })
            .catch((e) => console.log(e));
    };

    const displayAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    };

    return (
        <>
            <div style={{ paddingTop: "140px" }}></div>
            <div className="add-product-container">
                <h2 className="add-product-header">Add Product</h2>
                <div className="add-form-container">
                    <form onSubmit={handleOnSubmit} className="add-form">
                        <input
                            className="add-input-field"
                            placeholder="Name"
                            value={state.name}
                            onChange={(e) =>
                                setState({ ...state, name: e.target.value })
                            }
                            required
                        ></input>
                        <input
                            className="add-input-field"
                            value={state.description}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    description: e.target.value,
                                })
                            }
                            required
                            placeholder="Description"
                        ></input>
                        <select
                            id="category"
                            className="custom-select"
                            onChange={(e) =>
                                setState({ ...state, category: e.target.value })
                            }
                            required
                        >
                            {categories.map((category) => {
                                return (
                                    <option value={category.toLowerCase()}>
                                        {category}
                                    </option>
                                );
                            })}
                        </select>
                        <input
                            className="add-input-field"
                            value={state.imageUrl}
                            onChange={(e) =>
                                setState({ ...state, imageUrl: e.target.value })
                            }
                            required
                            placeholder="Image URL"
                        ></input>
                        <input
                            className="add-input-field"
                            value={state.price}
                            type="number"
                            onChange={(e) =>
                                setState({ ...state, price: e.target.value })
                            }
                            required
                            placeholder="Price"
                        ></input>
                        <input
                            className="add-input-field"
                            value={state.stock}
                            type="number"
                            onChange={(e) =>
                                setState({ ...state, stock: e.target.value })
                            }
                            required
                            placeholder="Stock"
                        ></input>
                        <div className="mb-3 p-4">
                            <button type="submit" className="pay-btn-container">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div
                className={classNames("alert-wrapper", {
                    "alert-hidden": !showAlert,
                })}
            >
                <div className="alert-container">
                    <div className="alert-box">
                        <span className="info-circle-container"></span>
                        <i class="fa-solid fa-circle-info info-circle"></i>
                        <span className="alert-content">
                            Product added successfully
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
