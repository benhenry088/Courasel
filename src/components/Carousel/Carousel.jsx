

import React, { useState } from "react";
import "./Carousel.css";

import image1 from "../../assets/712x384_updated.jpg";
import image2 from "../../assets/712x384.jpg";
import image3 from "../../assets/Artboard_1.png";
import image4 from "../../assets/Desktop_Homepage_Slider__712x384 (1).jpg";
import image5 from "../../assets/Desktop_Homepage_Slider__712x384.jpg";
import image6 from "../../assets/Maybelline_fit_me_712x384.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5, image6];

  const startSlideTimeout = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      startSlideTimeout(); 
    }, 9000);
  };

  if (currentIndex === 0) {
    startSlideTimeout();
  }

  const handlePrev = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    
  };

  const handleNext = () => {
     const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    
  };


  
  return (
    <main className="mainContainer">
      <section className="carouselWrapper">
         <div className="carousel-inner">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="prev" onClick={handlePrev}>❮</button>
        <button className="next" onClick={handleNext}>❯</button>
      </section>
    </main>
  );
};

export default Carousel;
