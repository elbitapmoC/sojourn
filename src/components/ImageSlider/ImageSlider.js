import React, { useState } from "react";
import Link from "next/link";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    position: "relative",
    height: "100%",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${slides[currentIndex].thumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "7px solid #8C00FA",
  };

  const leftArrow = {
    border: 0,
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "12px",
    paddingRight: "13px",
    backgroundColor: "#343434",
    cursor: "pointer",
  };

  const rightArrow = {
    border: 0,
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "13px",
    paddingRight: "12px",
    backgroundColor: "#343434",
    cursor: "pointer",
  };

  const arrowsContainer = {
    position: "absolute",
    bottom: "-50px",
    right: 0,
  };

  const slideTitle = {
    textAlign: "center",
    marginTop: "2.4rem",
    fontSize: "3.2rem",
  };

  const sliderNumbers = {
    fontSize: "2.4rem",
    fontWeight: "bold",
  };

  const goForward = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goBack = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <aside style={sliderStyles}>
      <p style={sliderNumbers}>
        {currentIndex + 1} / {slides.length}
      </p>
      <span style={arrowsContainer}>
        <button
          aria-label="Button to move slide forward to next image"
          style={leftArrow}
          onClick={goBack}
        >
          <svg
            width="26"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.47 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 1 0 1.06-1.06L2.061 6l4.242-4.243a.75.75 0 0 0-1.06-1.06L.47 5.47ZM26 5.25H1v1.5h25v-1.5Z"
              fill="#fff"
            />
          </svg>
        </button>
        <button
          aria-label="Button to move slide back to previous image"
          style={rightArrow}
          onClick={goForward}
        >
          <svg
            width="26"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.53 6.53a.75.75 0 0 0 0-1.06L20.757.697a.75.75 0 0 0-1.06 1.06L23.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L25.53 6.53ZM0 6.75h25v-1.5H0v1.5Z"
              fill="#fff"
            />
          </svg>
        </button>
      </span>
      <Link href={slides[currentIndex].href}>
        <aside style={slideStyles}></aside>
      </Link>

      <p style={slideTitle}>{slides[currentIndex].title}</p>
    </aside>
  );
};

export default ImageSlider;
