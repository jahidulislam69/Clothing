import React, { useState, useEffect } from 'react';
import back1 from '../assets/back1.jpg'
import back2 from '../assets/back2.jpg'

const images = [
  back1,
  back2,
  "https://i.pinimg.com/1200x/8f/0f/ca/8f0fca25bc3336cae618ee45f790488b.jpg",
  "https://i.pinimg.com/736x/e9/65/3b/e9653b95dcf54fd2c008894cb1f83226.jpg",
  "https://i.pinimg.com/736x/17/de/1e/17de1ec2de604a1e422f08774a882c10.jpg"
];

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} className="w-full h-[90vh] object-cover  flex-shrink-0" alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="flex items-center mt-3 md:mt-0 space-x-2 absolute top-55 sm:-bottom-70 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`sm:w-3 sm:h-3 w-1 h-1 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-black/20'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;