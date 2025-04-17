import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`collapse__icon ${isOpen ? "open" : ""}`}
        />
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

export default Collapse;
