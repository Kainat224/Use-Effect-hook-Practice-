import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <a href="#">Logo</a>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
