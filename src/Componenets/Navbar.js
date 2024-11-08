import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="flex justify-around">
        <div>
          <NavLink to="/">LOGO</NavLink>
        </div>
        <div className="flex justify-between gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart Logo</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
