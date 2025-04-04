import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error404.scss";

function Error404() {
  return (
    <div className="error">
      <div className="error__code">404</div>
      <div className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link to="/" className="error__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error404;
