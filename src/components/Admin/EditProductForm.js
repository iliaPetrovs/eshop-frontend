import axios from "axios";
import React, { useLayoutEffect, useState } from "react";

export default function EditProductForm() {
    const initialState = {
        name: "",
        description: "",
        price: "",
        category: "",
        imageUrl: "",
        stock: "",
    };

    const [state, setState] = useState(initialState);

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
            .then(() => alert("SUCCESS"))
            .then(() => {
                setState(initialState);
            })
            .catch((e) => console.log(e));
    };

    return (
        <div className="inline-edit-container">
            <form>
                <td>
                <input
                    className="add-input-field"
                    placeholder="Name"
                    value={state.name}
                    onChange={(e) =>
                        setState({ ...state, name: e.target.value })
                    }
                    required
                ></input>
                </td>
                <td>
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
                </td>
                <td>
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
                </td>
                <td>
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
                </td>
                <td>
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
                </td>
                <td>
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
                </td>
            </form>
        </div>
    );
}
