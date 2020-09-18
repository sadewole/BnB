import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        BnB
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="true"
        aria-label="Toggle navigation"
        onClick={() => setCollapse(!collapse)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`navbar-collapse collapse ${collapse && "show"}`}
        id="navbarColor01"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/explore">
              Explore Meals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
