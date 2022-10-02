import React, { useState, useMemo } from "react";
import axios from "axios";
import { Modal } from "@material-ui/core";
import { Card, Table, Image, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toCurrency } from "../../utils/currency";
import classNames from "classnames";
import EditProductForm from "./EditProductForm";
import Orders from "../Orders/Orders";
import CompletedOrders from "../Orders/CompletedOrders";

export default function ProductDashboard() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [itemToEdit, setItemToEdit] = useState({});
    const [currentPage, setCurrentPage] = useState("Dashboard");

    console.log(currentPage)

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
            {/* <div className="container">
                <div className="row">
                    <div className="col">fetchf</div>
                    <div className="col-5">f</div>
                </div>
            </div> */}
            <div style={{ paddingTop: "100px" }}></div>
            <div className="dashboard-sidebar-container">
                <div className="dashboard-sidebar">
                    <h2>Control Panel</h2>
                    <ul>
                        <li>
                            <button
                                className="btn"
                                onClick={() => setCurrentPage("Dashboard")}
                            >
                                <i class="fa-solid fa-display"></i>Products
                            </button>
                        </li>
                        <li>
                            <button
                                className="btn"
                                onClick={() => setCurrentPage("Pending")}
                            >
                                <i class="fa-solid fa-book"></i>Pending Orders
                            </button>
                        </li>
                        <li>
                            <button
                                className="btn"
                                onClick={() => setCurrentPage("Completed")}
                            >
                                <i class="fa-regular fa-square-caret-left"></i>Completed Orders
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {(currentPage === "Pending") && <Orders />}
            {(currentPage === "Completed") && <CompletedOrders />}
            {(currentPage === "Dashboard") && (
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
                                                            handleDelete(
                                                                item.id
                                                            )
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
            )}
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
