import axios from "axios";
import React, { useState } from "react";

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

  const categories = ["None", "Bag", "Patch", "Sticker", "Pin"];

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
      .then(() => {setState(initialState)})
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <form
        className="border border-dark bg-dark text-white"
        onSubmit={handleOnSubmit}
      >
        <div className="mb-3 p-4">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            required
          ></input>
        </div>
        <div className="mb-3 p-4">
          <label className="form-label">Description</label>
          <input
            className="form-control"
            value={state.description}
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
            required
          ></input>
        </div>
        <div className="mb-3 p-4">
          <label className="form-label">Category</label>
          <select
            id="category"
            className="custom-select"
            onChange={(e) => setState({ ...state, category: e.target.value })}
            required
          >
            {categories.map((category) => {
              return <option value={category.toLowerCase()}>{category}</option>;
            })}
          </select>
        </div>
        <div className="mb-3 p-4">
          <label className="form-label">Image URL</label>
          <input
            className="form-control"
            value={state.imageUrl}
            onChange={(e) => setState({ ...state, imageUrl: e.target.value })}
            required
          ></input>
        </div>
        <div className="mb-3 p-4">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            value={state.price}
            type="number"
            onChange={(e) => setState({ ...state, price: e.target.value })}
            required
          ></input>
        </div>
        <div className="mb-3 p-4">
          <label>Stock</label>
          <input
            className="form-control"
            value={state.stock}
            type="number"
            onChange={(e) => setState({ ...state, stock: e.target.value })}
            required
          ></input>
        </div>
        <div className="mb-3 p-4">
          <button className="btn btn-primary w-100">Submit</button>
        </div>
      </form>
    </div>
  );
}
