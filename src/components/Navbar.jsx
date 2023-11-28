// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer } from "../styles/NavbarStyles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="header-title">
      <h1>TaskHub</h1>
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
