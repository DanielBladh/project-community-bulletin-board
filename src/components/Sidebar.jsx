import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../styles/SidebarStyle.css";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => (
          <li
            key={key}
            className={`row ${location.pathname === val.link ? "active" : ""}`}
          >
            <Link
              to={val.link}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="nav-links">
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
