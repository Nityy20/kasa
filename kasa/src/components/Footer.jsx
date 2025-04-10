import React from "react";
// @ts-ignore
import logoFooter from "../assets/logo-footer.png";
import "../styles/components/_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa - logo footer" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
