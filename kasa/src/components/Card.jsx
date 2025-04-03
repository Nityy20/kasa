import React from "react";
import "./Card.scss";

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card__image" />
      <div className="card__overlay">
        <h2 className="card__title">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
