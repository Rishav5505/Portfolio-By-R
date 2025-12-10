import React, { useState, useEffect } from 'react';
import carousel1 from '../assets/123.jpg';
import carousel2 from '../assets/124.jpg';
import carousel3 from '../assets/125.jpg';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlayTimer, setAutoPlayTimer] = useState(null);

  const slides = [
    { id: 1, src: carousel1 },
    { id: 2, src: carousel2 },
    { id: 3, src: carousel3 },
  ];

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(autoPlayTimer);
  }, []);

  const startAutoPlay = () => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    setAutoPlayTimer(timer);
  };

  const resetAutoPlay = () => {
    clearInterval(autoPlayTimer);
    startAutoPlay();
  };

  const goToSlide = (index) => {
    setCurrentIndex((index + slides.length) % slides.length);
    resetAutoPlay();
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  return (
    <section className="image-carousel-section">
      <div 
        className="image-carousel-container"
        onMouseEnter={() => clearInterval(autoPlayTimer)}
        onMouseLeave={startAutoPlay}
      >
        <div 
          className="image-carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="carousel-slide">
              <img src={slide.src} alt={`carousel ${slide.id}`} />
            </div>
          ))}
        </div>

        <button 
          className="carousel-arrow prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button 
          className="carousel-arrow next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ❯
        </button>

        <div className="carousel-nav">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
