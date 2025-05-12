import React, { useState, useEffect, useRef } from 'react';

const WebSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const slideRef = useRef([]);

  // Update the slider whenever currentIndex changes
  useEffect(() => {
    const slideWidth = slideRef.current[0]?.offsetWidth || 0; // Ensure the slides exist
    if (sliderRef.current && slideWidth > 0) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < slideRef.current.length - 1 ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slideRef.current.length - 1));
  };

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        <div className="slide" ref={(el) => (slideRef.current[0] = el)}>
          <img src="assets/img/img1.jpg" alt="Image 1" />
          <div className="slider-text">
            <h3>Image 1</h3>
            <p>Description for image 1.</p>
          </div>
        </div>
        <div className="slide" ref={(el) => (slideRef.current[1] = el)}>
          <img src="assets/img/img2.jpg" alt="Image 2" />
          <div className="slider-text">
            <h3>Image 2</h3>
            <p>Description for image 2.</p>
          </div>
        </div>
        <div className="slide" ref={(el) => (slideRef.current[2] = el)}>
          <img src="assets/img/img3.jpg" alt="Image 3" />
          <div className="slider-text">
            <h3>Image 3</h3>
            <p>Description for image 3.</p>
          </div>
        </div>
        <div className="slide" ref={(el) => (slideRef.current[3] = el)}>
          <img src="assets/img/img1.jpg" alt="Image 4" />
          <div className="slider-text">
            <h3>Image 4</h3>
            <p>Description for image 4.</p>
          </div>
        </div>
        <div className="slide" ref={(el) => (slideRef.current[4] = el)}>
          <img src="assets/img/img2.jpg" alt="Image 5" />
          <div className="slider-text">
            <h3>Image 5</h3>
            <p>Description for image 5.</p>
          </div>
        </div>
      </div>
      <div className="nav-buttons">
        <button onClick={prevSlide}>❮</button>
        <button onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default WebSlider;
