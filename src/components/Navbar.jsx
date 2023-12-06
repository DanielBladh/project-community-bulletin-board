// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavbarStyles.css";
import logo from "../assets/taskhub.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="top-nav">
      <div className="logo-container">
        <img
          src={logo}
          alt="Taskhub logo"
          style={{ width: "40px", height: "35px", filter: "invert(100%)" }}
        />
        <Link className="title-link" to="/"><h3>TaskHub</h3></Link>
      </div>

      <input
        id="menu-toggle"
        type="checkbox"
        checked={showMenu}
        onChange={toggleMenu}
      />

      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className={`menu-button ${showMenu ? "close" : ""}`}></div>
        <div className={`close ${showMenu ? "" : "hide"}`}></div>
      </label>

      <ul className={`menu ${showMenu ? "show" : ""}`}>
        <li>
          <Link to="/add" onClick={toggleMenu}>
            Add Task
          </Link>
        </li>
        <li>
          <Link to="/" onClick={toggleMenu}>
            View Tasks
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
