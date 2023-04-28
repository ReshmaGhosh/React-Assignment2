import React from "react";

import "./Navbar.css";
import hamburgur from "../image/hamburger.png";
import openbook from "../image/open-book.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={openbook} alt="" />

        <img src={hamburgur} alt="" />
      </nav>
    </div>
  );
}
