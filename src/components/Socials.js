import React from "react";

export default function Socials() {
  return (
    <div className="socials">
      {/* <div className="w-50 mx-auto"> */}
      <div className="text-center mb-3">
        <h2 className="socials-header">Follow us on our socials!</h2>
      </div>
      <div className="text-center socials-container mx-auto d-flex justify-content-between">
        <a href="https://www.facebook.com/fujifox" target="_blank">
          <i className="fab fa-facebook socials-icon"></i>
        </a>
        <a href="https://www.twitter.com/fujifox" target="_blank">
          <i className="fab fa-twitter socials-icon"></i>
        </a>
        <a href="https://www.instagram.com/fujifox" target="_blank">
          <i className="fab fa-instagram socials-icon"></i>
        </a>
        <a href="https://www.linkedin.com/fujifox" target="_blank">
          <i className="fab fa-linkedin socials-icon"></i>
        </a>
      </div>
      {/* </div> */}
    </div>
  );
}
