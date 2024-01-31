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
          <img
            className="object-cover w-full h-full"
            src="/assets/pic/logo.png"
            alt=""
          />
        </div>
        {/* .home-header-links-container{
        display: none;
    }
     */}
        <div className="home-header-links-container">
          <ul
            className={`${
              toggleMobileMenuButton ? "mobile-navbar-view" : "mobile-hide"
            }`}
          >
            {/*  */}
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li className="header-link-side-link">
              <p></p>
            </li>
            <li>
              <NavLink>Blog</NavLink>
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
              style={{ fontSize: "5.046vh" }}
              onClick={() => setToggleMobileMenuButton(false)}
            >
              &#x2715;
            </p>
          ) : (
            <p onClick={() => setToggleMobileMenuButton(true)}>&#9776;</p>
          )}
        </div>
      </div>
      {/* <div className="mobile-nav-container">
          <ul>
            <li>
              <NavLink>HOme</NavLink>
            </li>
            <li>
              <NavLink>HOme</NavLink>
            </li>
            <li>
              <NavLink>HOme</NavLink>
            </li>
            <li>
              <NavLink>HOme</NavLink>
            </li>
            <li>
              <NavLink>HOme</NavLink>
            </li>

          </ul>
      </div> */}
    </div>
  );
}

export default Header;
