import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";
import { Badge, ButtonBase } from "@material-ui/core";
import { StyledButton } from "../App.style";
import { Button } from "react-bootstrap";
import classnames from "classnames";
import "./Navigation.scss";
import useOutsideAlerter from "../hooks/useOutsideAlerter";

export default function Navigation({ setCartOpen, getTotalItems, cartItems }) {
  const [shouldShowBasket, setShouldShowBasket] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [navCollapse, setNavCollapse] = useState();
  const wrapperRef = useRef(null);
  const [availableCategories, setAvailableCategories] = useState([
    "Bags",
    "Stickers",
    "Pins",
    "Clothes",
    "Patches",
  ]);

  const handleClickOutsideElement = () => {
    setShowNav(false);
  };
  useOutsideAlerter(wrapperRef, handleClickOutsideElement);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div ref={wrapperRef}>
      <div className="curve"></div>
      <div className="p-1 delivery-promo sticky-top">
        {"Free delivery over so and so amount of money hehe".toUpperCase()}
      </div>
      <div className="hamburger-wrapper">
          <label class="hamburger" for="check">
            <input class="hamburger-input" type="checkbox" checked={showNav} onChange={handleNav} id="check" />
            <span class="hamburger-1"></span>
            <span class="hamburger-2"></span>
            <span class="hamburger-3"></span>
          </label>
        </div>
      <div className="nav-container sticky-top d-flex w-100 mx-auto">
        <span className="fujifox">FujiFox</span>
        <nav className="primary-navigation navbar navbar-expand-lg">
          <div
            className={classnames("nav-wrapper", { hidden: !showNav })}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleNav}>
                  HOME
                </Link>
              </li>
              <li className="nav-item dropdown-parent">
                <a className="nav-link" href="#">
                  SHOP{"  "}
                  <i className="fas fa-caret-down"></i>
                </a>
                <ul className="dropdown">
                  {availableCategories.sort().map((category, index) => {
                    return (
                      <li key={index}>
                        <Link to={`/shop/${category.toLowerCase()}`} onClick={handleNav}>{category}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" onClick={handleNav}>
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="addProduct" onClick={handleNav}>
                  ADD
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="dashboard" onClick={handleNav}>
                  DASHBOARD
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {shouldShowBasket && (
          <button
            className="shopping-basket p-2"
            onClick={() => setCartOpen(true)}
          >
            <Badge
              className="px-2"
              badgeContent={getTotalItems(cartItems)}
              color="error"
            >
              <i class="fas fa-shopping-basket basket-icon"></i>
            </Badge>
          </button>
        )}
      </div>
    </div>
  );
}
