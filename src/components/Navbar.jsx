// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer } from "../styles/NavbarStyles";
import logo from "../assets/taskhub.png";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="header-title">
        <img
          src={logo}
          alt="Taskhub logo"
          style={{ width: "40px", height: "35px", filter: "invert(100%)" }}
        />

        <Link to="/" style={{textDecoration: "none", color: "white"}}>
          <h1>TaskHub</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/add">Add Task</Link>
        </li>
        <li>
          <Link to="/">View Tasks</Link>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
