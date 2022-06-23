import React, { useState, useMemo } from "react";
import axios from "axios";
import { Modal } from "@material-ui/core";
import { Card, Table, Image, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toCurrency } from "../../utils/currency";
import classNames from "classnames";
// import EditProductForm from "./EditProductForm";

export default function ProductDashboard() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [itemToEdit, setItemToEdit] = useState({});

    useMemo(() => {
        axios
            .get("http://localhost:8080/products", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleDelete = (itemId) => {
        axios.delete(`http://localhost:8080/products/${itemId}`);
        setItems(items.filter((item) => item.id !== itemId));
    };

    const handleEdit = (item) => {
        setItemToEdit(item);
        setModalOpen(true);
    };

    const handleClose = () => {
        setItemToEdit({});
    };

    return (
        <div className="admin-dashboard-container">
            <div style={{ paddingTop: "140px" }}></div>
            <div className="admin-container">
                <h1 className="admin-dashboard-header">Admin Dashboard</h1>
                <table>
                    <thead>
                        <tr>
                            <th className="thumbnail"></th>
                            <th>Name</th>
                            <th className="toggle-category">Description</th>
                            <th className="toggle-category">Price</th>
                            <th className="toggle-category">Category</th>
                            <th className="toggle-category">Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items &&
                            items.map((item) => (
                                <>
                                    <tr key={item.id}>
                                        <td className="thumbnail">
                                            <Image
                                                src={item.imageUrl}
                                                roundedCircle
                                                width="25"
                                                height="25"
                                            />
                                            {item.title}
                                        </td>
                                        <td>{item.name}</td>
                                        <td className="toggle-category">
                                            {item.description}
                                        </td>
                                        <td className="toggle-category">
                                            {toCurrency(item.price)}
                                        </td>
                                        <td className="toggle-category">
                                            {item.category}
                                        </td>
                                        <td className="toggle-category">
                                            {item.stock}
                                        </td>
                                        <td>
                                            <ButtonGroup>
                                                <Button
                                                    size="sm"
                                                    variant="outline-success"
                                                    onClick={() =>
                                                        handleEdit(item)
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline-danger"
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
                                                >
                                                    Bin
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                </>
                            ))}
                    </tbody>
                </table>
            </div>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditProductForm
                    setModalOpen={setModalOpen}
                    item={itemToEdit}
                />
            </Modal>
        </div>
    );
}

function EditProductForm({ setModalOpen, item }) {
    const initialState = {
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        imageUrl: item.imageUrl,
        stock: item.stock,
    };
    const [state, setState] = useState(initialState);
    const [showAlert, setShowAlert] = useState(false);

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
                            <img
                                // style={{ width: "200px" }}
                                src={item.imageUrl}
                            />
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
