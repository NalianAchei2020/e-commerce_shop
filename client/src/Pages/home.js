import React from 'react';
import Card from '@mui/material/Card';
import Slider from '../Components/image-slider';

function Home() {
  return (
    <section className="slider-container">
      <section>
        <Slider />
      </section>
      <section className="hero-sec2">
        <Card sx={{ height: 500 }} className="card">
          <div className="hero-beastSeller">
            <img src="Images/banner/best-img.jpg" alt="best-seller" />
            <div className="best-text">
              <h1>Best Seller</h1>
              <button className="btn-best">Shop Now</button>
            </div>
          </div>
        </Card>
        <Card sx={{ height: 500 }} className="card">
          <div className="hero-beastSeller">
            <img src="Images/banner/images.jpeg" alt="best-seller2" />
            <div className="best-text">
              <h1>New Arrivals</h1>
              <button className="btn-best">Shop Now</button>
            </div>
          </div>
        </Card>
      </section>
    </section>
  );
}

export default Home;
