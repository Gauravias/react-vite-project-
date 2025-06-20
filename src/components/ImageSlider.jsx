import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)),
      4000
    );
    return () => resetTimeout();
  }, [currentIndex, slides.length]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide" style={{ backgroundImage: `url(${slide.url})` }}>
            <div className="slide-overlay">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-caption">{slide.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={goToPrevious} className="slider-arrow left">
        <ChevronLeft size={24} />
      </button>
      <button onClick={goToNext} className="slider-arrow right">
        <ChevronRight size={24} />
      </button>

      <div className="slider-dots">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`dot ${currentIndex === slideIndex ? 'active' : ''}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
