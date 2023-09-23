import React, { useEffect, useState, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function CallToAction() {
  const windowWidth = window.innerWidth;
  const images = [
    {
      url: 'Images/women/heels/heels05.png',
      text: '50%',
    },
    {
      url: 'Images/women/heels/nike04.png',
      text: '30%',
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(handleNextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [handleNextImage]);

  return (
    <section
      className="container-fluid mt-4 calltoAction"
      style={{ padding: '1em' }}
    >
      <Box
        sx={{
          width: '100%',
          height: '500px',
          backgroundColor: '#9e9e9e',
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
          {windowWidth > 900 && <NavigateBeforeIcon />}
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
          {windowWidth > 900 && <NavigateNextIcon />}
        </IconButton>

        <Box>
          <div className="call-container">
            <div className="call-image">
              <img src={images[currentImageIndex].url} alt="url" />
            </div>
            <div className="box">
              <h2>SAVE OFF</h2>
              <h1>{images[currentImageIndex].text}</h1>
              <h6>NEW OFFER PRODUCTS</h6>
              <ul className="call-list">
                <li>
                  <span>106</span>
                  <br />
                  <span>DAYS</span>
                </li>
                <li>
                  <span>15</span>
                  <br />
                  <span>Hr</span>
                </li>
                <li>
                  <span>27</span>
                  <br />
                  <span>Min</span>
                </li>
                <li>
                  <span>27</span>
                  <br />
                  <span>Sec</span>
                </li>
              </ul>
              <button className="btn-best">Shop Now</button>
            </div>
          </div>
        </Box>
      </Box>
    </section>
  );
}

export default CallToAction;
