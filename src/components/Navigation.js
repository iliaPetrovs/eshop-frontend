import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AddShoppingCart } from '@material-ui/icons'
import { Badge, ButtonBase } from '@material-ui/core'
import { StyledButton } from '../App.style'
import { Button } from 'react-bootstrap'
import classnames from 'classnames'
// import "./Navigation.s";
import useOutsideAlerter from '../hooks/useOutsideAlerter'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userAtom } from '../atoms/user'
import { authenticatedAtom } from '../atoms/authenticated'
import { cartAtom } from '../atoms/cart'
import { AiOutlineShoppingCart } from 'react-icons/fa'

export default function Navigation ({
  setCartOpen,
  getTotalItems,
  // cartItems,
  handleLogout
}) {
  const [shouldShowBasket, setShouldShowBasket] = useState(true)
  const [showNav, setShowNav] = useState(false)
  const [navCollapse, setNavCollapse] = useState()
  const wrapperRef = useRef(null)
  const [user, setUser] = useRecoilState(userAtom)
  const cartItems = useRecoilValue(cartAtom)
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedAtom)
  const [availableCategories, setAvailableCategories] = useState([
    'Bags',
    'Stickers',
    'Pins',
    'Clothes',
    'Patches'
  ])

  const handleClickOutsideElement = () => {
    setShowNav(false)
  }
  useOutsideAlerter(wrapperRef, handleClickOutsideElement)

  const handleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div className="navigation" ref={wrapperRef}>
      <div className="curve"></div>
      <div className="p-1 delivery-promo">
        {'Free delivery over so and so amount of money hehe'.toUpperCase()}
      </div>
      <div className="hamburger-wrapper">
        <label className="hamburger" htmlFor="check">
          <input
            className="hamburger-input"
            type="checkbox"
            checked={showNav}
            onChange={handleNav}
            id="check"
          />
          <span className="hamburger-1"></span>
          <span className="hamburger-2"></span>
          <span className="hamburger-3"></span>
        </label>
      </div>
      <div className="nav-container sticky-top d-flex w-100 mx-auto">
        <span className="fujifox">FujiFox</span>
        <nav className="primary-navigation navbar navbar-expand-lg">
          <div
            className={classnames('nav-wrapper', {
              hidden: !showNav
            })}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/" onClick={handleNav}>
                  HOME
                </Link>
              </li>
              <li className="nav-item dropdown-parent">
                <a className="nav-link" href="#">
                  SHOP{'  '}
                  <i className="fas fa-caret-down"></i>
                </a>
                <ul className="dropdown">
                  {availableCategories.sort().map((category, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={`/shop/${category.toLowerCase()}`}
                          onClick={handleNav}
                        >
                          {category}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about" onClick={handleNav}>
                  ABOUT
                </Link>
              </li>
              {user?.isAdmin && (
                <li className="nav-item nav-item-responsive">
                  <Link
                    className="nav-link"
                    href="/addProduct"
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
                    href="/dashboard"
                    onClick={handleNav}
                  >
                    DASHBOARD
                  </Link>
                </li>
              )}
              <li className="nav-item nav-item-responsive">
                {authenticated
                  ? (
                  <li className="nav-link" onClick={handleLogout}>
                    LOGOUT
                  </li>
                    )
                  : (
                  <Link className="nav-link" href="/login" onClick={handleNav}>
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
                    href="/addProduct"
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
                    href="/dashboard"
                    onClick={handleNav}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <li>
                {authenticated
                  ? (
                  <li className="nav-link" onClick={handleLogout}>
                    Logout
                  </li>
                    )
                  : (
                  <Link className="nav-link" href="/login" onClick={handleNav}>
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
                badgeContent={cartItems?.length}
                color="error"
              >
                a{/* <AiOutlineShoppingCart /> */}
              </Badge>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
