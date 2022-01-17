import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";
import { Badge, ButtonBase } from "@material-ui/core";
import { StyledButton } from "../App.style";
import { Button } from "react-bootstrap";

export default function Navigation({ setCartOpen, getTotalItems, cartItems }) {
  const [shouldShowBasket, setShouldShowBasket] = useState(true);

  // useEffect(() => {
  //   console.log(window.location.pathname !== "/checkout")
  //   setShouldShowBasket(window.location.pathname !== "/checkout");
  // }, [])

  return (
    <>
      <div className="p-1 delivery-promo sticky-top">
        {'Free delivery over so and so amount of money hehe'.toUpperCase()}
      </div>
      <div className="nav-container sticky-top d-flex w-100 mx-auto py-2">
        <nav className="mx-auto navbar navbar-expand-lg navbar-light">
          <div className="p-0">
            <Link className="navbar-brand" to="/">
              <span className="fujifox-home">FujiFox</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="shop">
                  SHOP
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="addProduct">
                  ADD
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="dashboard">
                  DASHBOARD
                </Link>
              </li>
            </ul>
          </div>
          {shouldShowBasket && <button className="shopping-basket" onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
              <AddShoppingCart className="shopping-basket" />
            </Badge>
          </button>}
        </nav>
      </div>
    </>
  );
}
