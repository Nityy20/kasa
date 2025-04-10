import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <span className={`collapse__icon ${isOpen ? "open" : ""}`}>⌄</span>
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Collapse;
