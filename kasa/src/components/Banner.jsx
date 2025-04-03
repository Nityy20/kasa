import React from "react";
import "./Banner.scss";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner__image" />
      <div className="banner__overlay"></div>
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}

export default Banner;
