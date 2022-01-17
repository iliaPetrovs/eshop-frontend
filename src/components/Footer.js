import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="w-75 mx-auto d-flex flex-row justify-content-between">
        <div>
          <span className="copyright">Copyright 2022 FujiFox</span>
        </div>
        <div>
          <i className="fab fa-paypal payments"></i>
          <i className="fab fa-cc-visa payments"></i>
          <i className="fab fa-cc-mastercard payments"></i>
          <i className="fab fa-cc-amex payments"></i>
        </div>
      </div>
    </footer>
  );
}
