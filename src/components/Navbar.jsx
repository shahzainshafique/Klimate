import React from "react";
import "../css/navbar.css";
const Navbar = () => {
  return (
    <React.Fragment>
      <h1 className="logo">KLIMATE</h1>
      <ul>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Our Team</a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navbar;
