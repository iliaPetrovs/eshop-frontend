import React from "react";
import { Redirect } from "react-router-dom";

export default function RedirectHandler() {
  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const token = getUrlParameter("token");

  if (token) {
    localStorage.setItem("accessToken", token);
    return (
      <Redirect
        to={{
          pathname: "/profile"
        }}
      />
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: "/login"
        }}
      />
    );
  }
}
