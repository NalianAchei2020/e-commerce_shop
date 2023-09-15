import React from 'react';
import Card from '@mui/material/Card';
import Slider from '../Components/home/image-slider';
import BestSeller from '../Components/home/bestSeller';
import CallToAction from '../Components/home/callToAction';
import FeaturedProducts from '../Components/home/featuredProducts';
import NewArrivals from '../Components/home/newArrivals';
import FashionNews from '../Components/home/fashionNews';
import Instagram from '../Components/home/instagram';
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
      {/* call to action */}
      <CallToAction />
      {/* featured products */}
      <FeaturedProducts />
      {/* New arrivals products */}
      <NewArrivals />
      {/* Fashion news */}
      <FashionNews />
      {/* Instagram post */}
      <Instagram />
    </section>
  );
}

export default Home;
