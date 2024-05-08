import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav">
      <a className="title">
        <FontAwesomeIcon icon={faHippo} />
        PrimeMotors
      </a>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="./cars">Cars</NavLink>
        </li>

        <li>
          <NavLink to="./cart">Cart</NavLink>
        </li>

        <li>
          <NavLink to="./login">Sell Your Car</NavLink>
        </li>
        <li>
          <NavLink to="./sellyourcar">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="./">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
