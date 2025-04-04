import React, { useState } from "react";
import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow__image"
      />

      {total > 1 && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            onClick={goToPrevious}
          >
            ‹
          </button>
          <button
            className="slideshow__arrow slideshow__arrow--right"
            onClick={goToNext}
          >
            ›
          </button>
          <div className="slideshow__counter">
            {currentIndex + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;
