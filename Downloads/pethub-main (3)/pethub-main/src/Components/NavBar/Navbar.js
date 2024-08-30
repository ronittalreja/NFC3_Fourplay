import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>PetHub</p>
        </Link>
      </div>
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
          <li>
            <Link to="#">Reports and Analytics</Link>
          </li>
          <li>
            <Link to="/Shelters">Shelters</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="http://localhost:3003/login">
          <button className="Navbar-button">Login/SignUp</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
