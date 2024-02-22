import React, { useState } from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  // state for managem menu button click toggle
  const [toggleMobileMenuButton, setToggleMobileMenuButton] = useState(false);

  return (
    <div
      className={`mobile-view ${
        toggleMobileMenuButton && "menu-btn-overlap-shade"
      }`}
    >
      <div className="home-header">
        <div className="home-header-logo-div">
          <Link to={"/"}>
            <img
              className="object-cover w-full h-full"
              src="/assets/pic/logo.png"
              alt=""
            />
          </Link>
        </div>

        <div className="home-header-links-container">
          <ul
            className={`${
              toggleMobileMenuButton ? "mobile-navbar-view" : "mobile-hide"
            }`}
          >
            {/*  */}
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="header-link-side-link">
              <p></p>
            </li>
            <li>
              <NavLink to={"/dailyblog"}>Blog</NavLink>
            </li>
            <li className="header-link-side-link">
              <p></p>
            </li>
            <li>
              <NavLink>Luxury Propreties</NavLink>
            </li>
            <li className="header-link-side-link">
              <p></p>
            </li>
            <li>
              <NavLink>Land Search</NavLink>
            </li>
          </ul>
        </div>
        <div className="mobile-buttons">
          {toggleMobileMenuButton ? (
            <p
              className="text-[30px] transition-all"
              onClick={() => setToggleMobileMenuButton(false)}
            >
              &#x2715;
            </p>
          ) : (
            <p
              onClick={() => setToggleMobileMenuButton(true)}
              className="text-[30px] transition-all"
            >
              &#9776;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
