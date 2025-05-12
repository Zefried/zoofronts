import React, { useState, useEffect, useRef } from 'react';
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';

const images = [
  { src: img1, title: 'Title 1', desc: 'Description 1' },
  { src: img2, title: 'Title 2', desc: 'Description 2' },
  { src: img3, title: 'Title 3', desc: 'Description 3' }
];

const CommercialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const slideRef = useRef([]);

  useEffect(() => {
    const slideWidth = slideRef.current[0]?.offsetWidth || 0;
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
    <>
      <h1>asfdsdf</h1>
      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          {images.map((img, i) => (
            <div className="slide" key={i} ref={(el) => (slideRef.current[i] = el)}>
              <img src={img.src} alt={img.title} />
              <div className="slider-text">
                <h3>{img.title}</h3>
                <p>{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="nav-buttons">
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
        </div>
      </div>
    </>
  );
};

export default CommercialSlider;
