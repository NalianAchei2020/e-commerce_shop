import React from 'react';
import Slider from '../Components/image-slider';

function Home() {
  return (
    <section>
      <section>
        <Slider />
      </section>
      <section className="hero-sec2">
        <div className="hero-beastSeller">
          <img src="Images/banner/best-img.jpg" alt="best-seller" />
          <div className="best-text">
            <h1>Best Seller</h1>
            <button className="btn-best">Shop Now</button>
          </div>
        </div>
        <div className="hero-beastSeller">
          <img src="Images/banner/images.jpeg" alt="best-seller2" />
          <div className="best-text">
            <h1>New Arrivals</h1>
            <button className="btn-best">Shop Now</button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
