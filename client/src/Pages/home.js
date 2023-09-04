import React from 'react';
import Card from '@mui/material/Card';
import Slider from '../Components/image-slider';
import data from '../data';

function Home() {
  const product = data.product;
  const bestSeller = product.filter((item) => item.bestSeller === true);
  console.log(bestSeller);
  return (
    <section className="slider-container">
      <section>
        <Slider />
      </section>
      <section className="hero-sec2">
        <Card sx={{ height: 500 }} className="card">
          <div className="hero-beastSeller">
            <img src="Images/banner/best-img.png" alt="best-seller" />
            <div className="best-text">
              <h1>Best Seller</h1>
              <button className="btn-best">Shop Now</button>
            </div>
          </div>
        </Card>
        <Card sx={{ height: 500 }} className="card">
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
      <section className="best-seller container-fluid">
        <h1>Best Seller</h1>
        <div className="row">
          {bestSeller.map((item) => (
            <div className="col" key={item.id}>
              <div className="card">
                <img src={item.image} alt={item.name} />
                <div className="card-body">
                  <h5>{item.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Home;
