import React, { useState, useMemo } from "react";
import axios from "axios";
import {} from "@material-ui/core";
import {
  Card,
  Table,
  Image,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductDashboard() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div>
      <Card>
        <Card.Header>Product List</Card.Header>
        <Table bordered hover striped variant="light">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image URL</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <Image
                    src={item.imageUrl}
                    roundedCircle
                    width="25"
                    height="25"
                  />{" "}
                  {item.title}
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.imageUrl}</td>
                <td>{item.stock}</td>
                <td>
                  <ButtonGroup>
                    <Link
                      to={"edit/" + item.id}
                      className="btn btn-sm btn-outline-primary"
                    >
                      Edit
                    </Link>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Bin
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
