import React from "react";
import { Button } from "react-bootstrap";
import "./Newsletter.scss";

export default function Newsletter() {
  return (
    <div className="background-tint newsletter-container d-flex flex-row flex-nowrap align-items-center justify-content-center">
      <div class="custom-shape-divider-top-1650720074">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="newsletter-signup-1"></div>
      <div className="newsletter-signup-2">
        <div className="newsletter-content d-flex flex-column justify-content-center align-items-center">
          <h2 className="mb-2">Newsletter signup</h2>
          <p className="">Get 10% voucher when you sign up!</p>
          {/* <div className="input-container w-75 mx-auto mt-0">
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
        </div> */}
          <label htmlFor="email"></label>
          <input
            type="input"
            placeholder="Email address right here!"
            name="email"
            required
            className="newsletter-input mb-4"
          ></input>
          <button className="sign-up-btn">SIGN UP!</button>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1650720653">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
