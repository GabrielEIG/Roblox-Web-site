import React, { useEffect, useState } from 'react';

const ImageCarousel = () => {
  const images = [
    'imgHome/slice-1.jpg',
    'imgHome/slice-2.jpg',
    'imgHome/slice-3.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  
    return () => {
      clearInterval(interval);
    };
  }, [images.length]);
  

  return (
    <div className="image-carousel">
      <img src={process.env.PUBLIC_URL + images[currentImageIndex]} alt={`${currentImageIndex + 1}`} />
    </div>
  );
};

export default ImageCarousel;
