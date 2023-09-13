import React from 'react';
import Card from '@mui/material/Card';
import Slider from '../Components/image-slider';
import BestSeller from '../Components/bestSeller';
function Home() {
  return (
    <section className="slider-container">
      <section>
        <Slider />
      </section>
      <section className="hero-sec2">
        <Card sx={{ height: 500 }} className="best-card">
          <div className="hero-beastSeller">
            <img src="Images/banner/best-img.png" alt="best-seller" />
            <div className="best-text">
              <h1>Best Seller</h1>
              <button className="btn-best">Shop Now</button>
            </div>
          </div>
        </Card>
        <Card sx={{ height: 500 }} className="best-card">
          <div className="hero-beastSeller">
            <img src="Images/banner/images.png" alt="best-seller2" />
            <div className="best-text">
              <h1>New Arrivals</h1>
              <button className="btn-best">Shop Now</button>
            </div>
          </div>
        </Card>
      </section>
      {/*beastSeller */}
      <BestSeller />
      <section className='trending container-fliud'>
        <h1>Trending</h1>
        <h5>TOP WISHES OF THIS WEEK
</h5>
      </section>
    </section>
  );
}

export default Home;
