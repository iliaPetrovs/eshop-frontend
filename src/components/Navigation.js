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
  const [navHidden, setNavHidden] = useState(true);
  const [navCollapse, setNavCollapse] = useState();
  const wrapperRef = useRef(null);
  const [availableCategories, setAvailableCategories] = useState([
    "Bags",
    "Stickers",
    "Pins",
    "Badges",
    "Patches",
  ]);

  const handleClickOutsideElement = () => {
    setNavHidden(true);
  };
  useOutsideAlerter(wrapperRef, handleClickOutsideElement);

  const handleNav = () => {
    setNavHidden(!navHidden);
  };

  useEffect(() => {}, []);

  return (
    <div ref={wrapperRef}>
      <div className="p-1 delivery-promo sticky-top">
        {"Free delivery over so and so amount of money hehe".toUpperCase()}
      </div>
      <div className="nav-container sticky-top d-flex w-100 mx-auto">
        <button className="nav-toggle" onClick={handleNav}>
          {navHidden ? (
            <i class="fa-solid fa-bars"></i>
          ) : (
            <i class="fa-thin fa-x"></i>
          )}
        </button>
        <span className="fujifox">FujiFox</span>
        <nav className="primary-navigation navbar navbar-expand-lg">
          {/* <div className="p-0">
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
          </div> */}
          <div
            className={classnames("nav-wrapper", { hidden: navHidden })}
            id="navbarNavDropdown"
          >
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
