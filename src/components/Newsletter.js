import React from "react";
import "./Newsletter.scss";

export default function Newsletter() {
  return (
    <div className="background-tint newsletter-container d-flex flex-row flex-nowrap align-items-center justify-content-center">
      <div className="newsletter-signup-1">
        <img
          className="newsletter-image"
          src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg"
          alt="Newsletter signup"
        />
      </div>
      <div className="newsletter-signup-2 p-4 d-flex flex-column">
        <h2 className="mb-3">Newsletter signup</h2>
        {/* <p>Sign up here</p> */}
        <div class="newsletter_container w-75 mx-auto mt-0">
          <input
            type="input"
            class="newsletter_field"
            placeholder="Email"
            name="email"
            id="email"
            required
          />
          <label for="email" class="newsletter_label">
            Email
          </label>
          <button className="btn btn-primary mt-4 p-2 w-100">Submit</button>
        </div>
      </div>
    </div>
  );
}
