import React from "react";
import "../styles/Header.scss";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="bg-img">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="present-text">PRESENTS</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
