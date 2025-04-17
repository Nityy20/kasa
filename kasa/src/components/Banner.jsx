import React from "react";

/**
 * @param {{
 *  image: string,
 *  text?: string | React.ReactNode,
 *  className?: string
 * }} props
 */
function Banner({ image, text = "", className = "" }) {
  return (
    <div className={`banner ${className}`}>
      <img src={image} alt="bannière" className="banner__image" />
      {text && <div className="banner__text">{text}</div>}
    </div>
  );
}

export default Banner;
