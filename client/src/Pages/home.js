import React from 'react';
import Slider from '../Components/home/image-slider';
import BestSeller from '../Components/home/bestSeller';
import CallToAction from '../Components/home/callToAction';
import FeaturedProducts from '../Components/home/featuredProducts';
import NewArrivals from '../Components/home/newArrivals';
import FashionNews from '../Components/home/fashionNews';
import Instagram from '../Components/home/instagram';
import ShoppingCart from '../Components/home/ShoppingCart';
function Home() {
  return (
    <section className="slider-container">
      <section>
        <Slider />
      </section>
      <section className="hero-sec2">
        <div className="best-card card">
          <div className="hero-beastSeller">
            <img src="Images/banner/best-img.png" alt="best-seller" />
            <div className="best-text">
              <h1>Best Seller</h1>
              <button className="btn-best">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="best-card card">
          <div className="hero-beastSeller">
            <img src="Images/banner/images.png" alt="best-seller2" />
            <div className="best-text">
              <h1>New Arrivals</h1>
              <button className="btn-best">Shop Now</button>
            </div>
          </div>
        </div>
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
      {/* Preview ShoppingCart post */}
      <ShoppingCart />
    </section>
  );
}

export default Home;
