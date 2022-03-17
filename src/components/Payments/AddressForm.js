import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import Countries from "./Countries";

export default function AddressForm({ clientSecret, handleCheckoutStage }) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("Please Select...");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [telephone, setTelephone] = useState("");

  const [customerId, setCustomerId] = useState(null);

  const stripe = useStripe();

  const saveCustomer = (customer) => {
    axios
    .post("http://localhost:8080/customers", customer)
    .then((res) => setCustomerId(res.data.id))
    .catch((e) => console.log(e));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const address = {
    //   addressLine1: addressLine1,
    //   addressLine2: addressLine2,
    //   // country: country,
    //   city: city,
    //   state: state,
    //   postCode: postcode,
    // };
    let customer = new FormData();
    customer.append("name", name);
    customer.append("addressLine1", addressLine1);
    customer.append("addressLine2", addressLine2);
    customer.append("city", city);
    customer.append("state", state);
    customer.append("postcode", postcode);
    saveCustomer(customer);
    console.log(customer);
    console.log(stripe);
    console.log(clientSecret);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <div className="input-container mx-auto">
          <input
            name="fullname"
            className="input-field"
            placeholder="Full Name"
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <label htmlFor="fullname" className="input-label">
            Full Name{" "}
            <span
              style={{ color: "red", display: "inline", float: "right" }}
              className="p-0 m-0"
            >
              *
            </span>
          </label>
        </div>
        <div className="input-container mx-auto mt-0">
          <Countries country={country} setCountry={setCountry} />
        </div>
        <div className="input-container mx-auto">
          <input
            name="address1"
            className="input-field"
            placeholder="Address Line 1"
            autoComplete="address-line1"
            required
            onChange={(e) => setAddressLine1(e.target.value)}
            value={addressLine1}
          ></input>
          <label htmlFor="address" className="input-label">
            Address Line 1
            <span
              style={{ color: "red", display: "inline", float: "right" }}
              className="p-0 m-0"
            >
              *
            </span>
          </label>
        </div>
        <div className="input-container mx-auto">
          <input
            name="address2"
            className="input-field"
            placeholder="Address Line 2"
            autoComplete="address-line2"
            onChange={(e) => setAddressLine2(e.target.value)}
            value={addressLine2}
          ></input>
          <label htmlFor="address2" className="input-label">
            Address Line 2
          </label>
        </div>
        <div className="input-container mx-auto">
          <input
            name="state"
            className="input-field"
            placeholder="State / County"
            onChange={(e) => setState(e.target.value)}
            value={state}
          ></input>
          <label htmlFor="state" className="input-label">
            State / County
          </label>
        </div>
        <div className="d-flex w-50 mx-auto">
          <div className="input-container mx-auto">
            <input
              name="city"
              className="input-field"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            ></input>
            <label htmlFor="city" className="input-label">
              City
            </label>
          </div>
          <div className="input-container mx-auto">
            <input
              name="zip"
              className="input-field"
              placeholder="Postcode / ZIP"
              autoComplete="postal-code"
              required
              onChange={(e) => setPostcode(e.target.value)}
              value={postcode}
            ></input>
            <label htmlFor="zip" className="input-label">
              Postcode / ZIP{" "}
              <span
                style={{ color: "red", display: "inline", float: "right" }}
                className="p-0 m-0"
              >
                *
              </span>
            </label>
          </div>
        </div>
        {/* <div className="input-container mx-auto">
          <input
            name="tel"
            inputMode="numeric"
            className="input-field"
            placeholder="Telephone Number"
            autoComplete="tel"
            onChange={(e) => setTelephone(e.target.value)}
            value={telephone}
          ></input>
          <label htmlFor="tel" className="input-label">
            Telephone Number
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary w-25 mx-auto mt-4">
          PROCEED TO PAYMENT
        </button>
      </form>
    </div>
  );
}
