import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";
import { Badge, ButtonBase } from "@material-ui/core";
import { StyledButton } from "../App.style";
import { Button } from "react-bootstrap";
import classnames from "classnames";
import "./Navigation.scss";
import useOutsideAlerter from "../hooks/useOutsideAlerter";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useRecoilState } from "recoil";
import { userAtom } from "../atoms/user";
import { authenticatedAtom } from "../atoms/authenticated";

export default function Navigation({
    setCartOpen,
    getTotalItems,
    cartItems,
    handleLogout,
}) {
    const [shouldShowBasket, setShouldShowBasket] = useState(true);
    const [showNav, setShowNav] = useState(false);
    const [navCollapse, setNavCollapse] = useState();
    const wrapperRef = useRef(null);
    const [user, setUser] = useRecoilState(userAtom);
    const [authenticated, setAuthenticated] = useRecoilState(authenticatedAtom);
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
        <div className="navigation" ref={wrapperRef}>
            <div className="curve"></div>
            <div className="p-1 delivery-promo">
                {"Free delivery over so and so amount of money hehe".toUpperCase()}
            </div>
            <div className="hamburger-wrapper">
                <label class="hamburger" for="check">
                    <input
                        class="hamburger-input"
                        type="checkbox"
                        checked={showNav}
                        onChange={handleNav}
                        id="check"
                    />
                    <span class="hamburger-1"></span>
                    <span class="hamburger-2"></span>
                    <span class="hamburger-3"></span>
                </label>
            </div>
            <div className="nav-container sticky-top d-flex w-100 mx-auto">
                <span className="fujifox">FujiFox</span>
                <nav className="primary-navigation navbar navbar-expand-lg">
                    <div
                        className={classnames("nav-wrapper", {
                            hidden: !showNav,
                        })}
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/"
                                    onClick={handleNav}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item dropdown-parent">
                                <a className="nav-link" href="#">
                                    SHOP{"  "}
                                    <i className="fas fa-caret-down"></i>
                                </a>
                                <ul className="dropdown">
                                    {availableCategories
                                        .sort()
                                        .map((category, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link
                                                        to={`/shop/${category.toLowerCase()}`}
                                                        onClick={handleNav}
                                                    >
                                                        {category}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/about"
                                    onClick={handleNav}
                                >
                                    ABOUT
                                </Link>
                            </li>
                            {user?.isAdmin && (
                                <li className="nav-item nav-item-responsive">
                                    <Link
                                        className="nav-link"
                                        to="/addProduct"
                                        onClick={handleNav}
                                    >
                                        ADD
                                    </Link>
                                </li>
                            )}
                            {user?.isAdmin && (
                                <li className="nav-item nav-item-responsive">
                                    <Link
                                        className="nav-link"
                                        to="/dashboard"
                                        onClick={handleNav}
                                    >
                                        DASHBOARD
                                    </Link>
                                </li>
                            )}
                            <li className="nav-item nav-item-responsive">
                                {authenticated ? (
                                    <li
                                        className="nav-link"
                                        onClick={handleLogout}
                                    >
                                        LOGOUT
                                    </li>
                                ) : (
                                    <Link
                                        className="nav-link"
                                        to="/login"
                                        onClick={handleNav}
                                    >
                                        LOGIN
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
                {shouldShowBasket && (
                    <div className="right-nav-container">
                        <div className="admin-nav-responsive">
                            {user?.isAdmin && (
                                <li>
                                    <Link
                                        className="nav-link"
                                        to="/addProduct"
                                        onClick={handleNav}
                                    >
                                        Add
                                    </Link>
                                </li>
                            )}
                            {user?.isAdmin && (
                                <li>
                                    <Link
                                        className="nav-link"
                                        to="/dashboard"
                                        onClick={handleNav}
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            )}
                            <li>
                                {authenticated ? (
                                    <li className="nav-link" onClick={handleLogout}>
                                        Logout
                                    </li>
                                ) : (
                                    <Link
                                        className="nav-link"
                                        to="/login"
                                        onClick={handleNav}
                                    >
                                        Login
                                    </Link>
                                )}
                            </li>
                        </div>
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
                    </div>
                )}
            </div>
        </div>
    );
}
