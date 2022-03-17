import React from "react";
import "./Newsletter.scss";

export default function Newsletter() {
  return (
    <div className="background-tint newsletter-container d-flex flex-row flex-nowrap align-items-center justify-content-center">
      <div className="newsletter-signup-1">
        <img
          className="newsletter-image"
          src="https://i.etsystatic.com/22179317/r/il/2a8ad1/2961017620/il_794xN.2961017620_n4w4.jpg"
          alt="Newsletter signup"
        />
      </div>
      <div className="newsletter-signup-2 p-5 d-flex flex-column justify-content-around">
        <h2 className="mb-3">Newsletter signup</h2>
        <p>Sign up to our newsletter and receive cool stuff I guess</p>
        {/* <p>Sign up here</p> */}
        <div className="input-container w-75 mx-auto mt-0">
          <input
            type="input"
            className="input-field"
            placeholder="Email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <button className="newsletter-submit mt-4 p-2 w-100">Submit</button>
        </div>
      </div>
    </div>
  );
}
