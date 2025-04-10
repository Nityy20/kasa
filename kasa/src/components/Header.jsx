import React from "react";
import { NavLink } from "react-router-dom";
// @ts-ignore
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="header__link">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
