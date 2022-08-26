/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { GoThreeBars } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Links } from "../data.js";

function Navbar() {
  // toogle button state
  const [navshow, setNavShow] = useState(false);

  // active class
  const isActive = ({ isActive }) => {
    return isActive ? "active--nav" : "";
  };
  const links = Links.map(({ name, path }, index) => {
    return (
      <li key={index}>
        <NavLink to={path} className={isActive} onClick={toggleNav}>
          {name}
        </NavLink>
      </li>
    );
  });

  function toggleNav() {
    setNavShow((prevNav) => !prevNav);
  }
  return (
    // rendered component
    <nav>
      <div className="container nav--container">
        <Link
          className="logo"
          to="/"
          onClick={() => {
            setNavShow(false);
          }}
        >
          M<span>a</span>n<span>u</span>
        </Link>
        <ul className={`nav--links ${navshow ? "show--nav" : "hide--nav"}`}>
          {links}
        </ul>
        <button onClick={toggleNav} className="nav--toggle-btn">
          {navshow ? <GrClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
