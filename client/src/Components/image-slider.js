import React, { useState, useEffect } from 'react';
import { Box, IconButton, Button } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const images = [
  {
    url: 'Images/banner/banner-3.jpg',
    text: 'Men Footwear shoes',
    buttonLabel: 'Shop Now ',
  },
  {
    url: 'Images/banner/banner-1.jpg',
    text: 'Women Fashion. High Heels Closeup',
    buttonLabel: 'Shop Now',
  },
  {
    url: 'Images/banner/banner-1.jpg',
    text: 'Best Shoes For Kids',
    buttonLabel: 'Shop Now',
  },
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '500px',
        backgroundImage: `url(${images[currentImageIndex].url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onClick={handlePrevImage}
      >
        <NavigateBeforeIcon />
      </IconButton>

      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onClick={handleNextImage}
      >
        <NavigateNextIcon />
      </IconButton>

      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div className="text-btn">
          <h2 className="slider-heading">{images[currentImageIndex].text}</h2>
          <br />
          <br />
          <Button variant="contained" color="primary" className="btn-slider">
            {images[currentImageIndex].buttonLabel}
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Slider;
