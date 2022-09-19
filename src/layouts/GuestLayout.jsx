import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Logo from "../assets/icons/pet-hotel-sign-with-a-dog-and-a-cat-under-a-roof-line.png";

const GuestLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onHamburgerClick = (e) => {
    // e.preventDefault();
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <>
      <header className="header">
        <div className="wrapper header__wrapper">
          <div className="header__logo">
            <Link to="/">
              <img src={Logo} alt="Logo" className="header__logo-img" />
            </Link>
          </div>
          <nav
            className={`header__nav nav ${openMenu ? "header__nav--show" : ""}`}
          >
            <button className="nav__close" onClick={onHamburgerClick}>
              <i className="bx bx-x"></i>
            </button>
            <ul className="nav__menu menu">
              <li className="menu__item">
                <Link
                  className="menu__link"
                  to="/sign-in"
                  onClick={onHamburgerClick}
                >
                  <span className="menu__link-icon">
                    <i className="bx bx-log-in-circle"></i>
                  </span>
                  <span className="menu__link-text">Sign In</span>
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  className="menu__link"
                  to="/sign-up"
                  onClick={onHamburgerClick}
                >
                  <span className="menu__link-icon">
                    <i className="bx bx-user"></i>
                  </span>
                  <span className="menu__link-text">Sign Up</span>
                </Link>
              </li>
            </ul>
          </nav>
          <button className="header__hamburger" onClick={onHamburgerClick}>
            <i className="bx bx-menu"></i>
          </button>
        </div>
      </header>
      <main className="main">
        <div className="wrapper">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default GuestLayout;
