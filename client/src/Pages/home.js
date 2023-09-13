import React from 'react';
import Card from '@mui/material/Card';
import Slider from '../Components/image-slider';
import { Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
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
      <section className="best-seller container-fluid">
        <h1 className='text-center mt-5'>Best Seller</h1>
        <h5 className='text-center mb-5'>TOP PRODUCTS OF THIS WEEK</h5>
        <div className="row-container">
          {bestSeller.map((item) => (
            <div className="card-container" key={item.id}>
              <div className="card">
                <img src={item.image} alt={item.name} />
                <div className="card-body">
                  <span>{item.brand }</span>
                  <h5 className='card-title'>{item.name}</h5>
                  <span className='text-center'>{item.price}FCFA</span>
                  <Stack spacing={2}>
                    <div  className='rating'>
                    <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                      <span>{item.numReview} Reviews</span>
                      </div>
                  </Stack><br/>
                  <div className='bttons'>
                  <Button variant="contained" color="primary" >
                 ADD TO CARD
                    </Button>
                    <IconButton className='whistlist'>
                      <FavoriteIcon className='whistlist'/>
                    </IconButton>
                  </div>
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
