import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";
import { Badge, ButtonBase } from "@material-ui/core";
import { StyledButton } from "../App.style";
import { Button } from "react-bootstrap";
import "./Navigation.scss";

export default function Navigation({ setCartOpen, getTotalItems, cartItems }) {
  const [shouldShowBasket, setShouldShowBasket] = useState(true);
  const [availableCategories, setAvailableCategories] = useState([
    "Bags",
    "Stickers",
    "Pins",
    "Badges",
    "Patches",
  ]);

  return (
    <>
      <div className="p-1 delivery-promo sticky-top">
        {"Free delivery over so and so amount of money hehe".toUpperCase()}
      </div>
      <div className="nav-container sticky-top d-flex w-100 mx-auto py-2">
        <nav className="primary-navigation mx-auto navbar navbar-expand-lg">
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
                <a className="nav-link" href="#">
                  SHOP{"  "}
                  <i className="fas fa-caret-down"></i>
                </a>
                <ul className="dropdown">
                  {availableCategories.sort().map((category, index) => {
                    return (
                      <li key={index}>
                        <a href="#">{category}</a>
                      </li>
                    );
                  })}
                </ul>
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
          {shouldShowBasket && (
            <button
              className="shopping-basket p-2"
              onClick={() => setCartOpen(true)}
            >
              <Badge className="px-2" badgeContent={getTotalItems(cartItems)} color="error">
                <i style={{fontSize: '1.5rem'}} class="fas fa-shopping-basket basket-icon"></i>
              </Badge>
            </button>
          )}
        </nav>

      </div>
    </>
  );
}
