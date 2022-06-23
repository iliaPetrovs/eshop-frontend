import axios from "axios";
import React, { useState } from "react";

export default function EditProductForm({ setModalOpen, item }) {
    const initialState = {
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        imageUrl: item.imageUrl,
        stock: item.stock,
    };
    const [state, setState] = useState(initialState);

    const categories = ["Choose category...", "Bag", "Patch", "Sticker", "Pin"];

    console.log(item);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        let bodyFormData = new FormData();
        bodyFormData.append("id", item.id);
        bodyFormData.append("name", state.name);
        bodyFormData.append("description", state.description);
        bodyFormData.append("price", state.price);
        bodyFormData.append("category", state.category);
        bodyFormData.append("imageUrl", state.imageUrl);
        bodyFormData.append("stock", state.stock);

        axios
            .put("http://localhost:8080/products", bodyFormData)
            .then(() => {
                setModalOpen(false);
                window.location.reload();
            })
            .catch((e) => console.log(e));
    };

    return (
        <>
            <div style={{ paddingTop: "140px" }}></div>
            <div className="add-product-container">
                <h2 className="add-product-header">Edit Product</h2>
                <button
                    className="close-modal"
                    onClick={() => setModalOpen(false)}
                >
                    <i class="fa-solid fa-square-xmark"></i>
                </button>
                <div className="add-form-container d-flex">
                    <form onSubmit={handleOnSubmit} className="add-form d-flex">
                        <div className="edit-product-image">
                            <img src={item.imageUrl} />
                        </div>
                        <div>
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
                                    setState({
                                        ...state,
                                        category: e.target.value,
                                    })
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
                                    setState({
                                        ...state,
                                        imageUrl: e.target.value,
                                    })
                                }
                                required
                                placeholder="Image URL"
                            ></input>
                            <input
                                className="add-input-field"
                                value={state.price}
                                type="number"
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        price: e.target.value,
                                    })
                                }
                                required
                                placeholder="Price"
                            ></input>
                            <input
                                className="add-input-field"
                                value={state.stock}
                                type="number"
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        stock: e.target.value,
                                    })
                                }
                                required
                                placeholder="Stock"
                            ></input>
                            <div className="mb-3 p-4">
                                <button
                                    type="submit"
                                    className="pay-btn-container"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
