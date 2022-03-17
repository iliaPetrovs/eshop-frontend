import axios from "axios";
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

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="add-product-container">
      <form
        onSubmit={handleOnSubmit}
        className=""
      >
        <div className="input-container w-100 mb-3 p-4">
          <input
            className="input-field"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            required
          ></input>
          <label className="input-label">Name</label>
        </div>
        <div className="input-container w-100 mb-3 p-4">
          <input
            className="input-field"
            value={state.description}
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
            required
            placeholder="Description"
          ></input>
          <label htmlFor="description" className="input-label">Description</label>
        </div>
        <div className="mb-3 p-4">
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
          <label className="form-label">Category</label>
        </div>
        <div className="input-container w-100 mb-3 p-4">
          <input
            className="input-field"
            value={state.imageUrl}
            onChange={(e) => setState({ ...state, imageUrl: e.target.value })}
            required
            placeholder="Image URL"
          ></input>
          <label className="input-label">Image URL</label>
        </div>
        <div className="input-container w-100 mb-3 p-4">
          <input
            className="input-field"
            value={state.price}
            type="number"
            onChange={(e) => setState({ ...state, price: e.target.value })}
            required
            placeholder="Price"
          ></input>
          <label className="input-label">Price</label>
        </div>
        <div className="input-container w-100 mb-3 p-4">
          <input
            className="input-field"
            value={state.stock}
            type="number"
            onChange={(e) => setState({ ...state, stock: e.target.value })}
            required
            placeholder="Stock"
          ></input>
          <label className="input-label">Stock</label>
        </div>
        <div className="mb-3 p-4">
          <button type="submit" className="pay-btn-container">Submit</button>
        </div>
      </form>
    </div>
  );
}
