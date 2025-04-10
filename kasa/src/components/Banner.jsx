import React from "react";

function Banner({ image, text = "" }) {
  return (
    <div className="banner">
      <img src={image} alt="bannière" className="banner__image" />
      {text && <div className="banner__text">{text}</div>}
    </div>
  );
}

export default Banner;
