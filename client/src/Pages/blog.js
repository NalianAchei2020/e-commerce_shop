import React from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Divider from '@mui/material/Divider';

function Blog() {
  return (
    <section className="container-fluid">
      <div className="cart-heading3 d-flex flex-row gap-4 mb-3">
        <Link to="/" className="cart-text des-text-link">
          Home
        </Link>
        <div className="cart-text">
          <NavigateNextIcon />
        </div>
        <div>
          <span>Blog</span>
        </div>
      </div>
      <section className="container-fluid">
        <section className="container-fluid news">
          <h1 className="text-center fw-bold mt-5 ">Fashion News</h1>
          <h6 className="text-center mb-5">
            The latest fashion news, celebrity style, fashion week updates
          </h6>
          <section className="new-main-container">
            <div className="new-container">
              <Link to="/" className="link">
                <div className="new-image">
                  <img src="Images/women/high-heels.jpg" alt="heels" />
                </div>
                <div className="new-text">
                  <p className="date  mt-3">Feb 25, 2023</p>
                  <p className="fw-bold">The post-pandemic fashion</p>
                  <p>
                    The denim resurgence is the result of the long, secretive
                    days that people have to stay indoors. The era of spor...
                  </p>
                </div>
              </Link>
              <Link to="/" className="link discover">
                {' '}
                Discover
              </Link>
            </div>

            <div className="new-container">
              <Link to="/" className="link">
                <div className="new-image">
                  <img src="Images/women/high-heels.jpg" alt="heels" />
                </div>
                <div className="new-text">
                  <p className="date  mt-3">Feb 25, 2023</p>
                  <p className="fw-bold">
                    The New Fashion Arrivals We’re Excited
                  </p>
                  <p>
                    The denim resurgence is the result of the long, secretive
                    days that people have to stay indoors. The era of spor...
                  </p>
                </div>
              </Link>
              <Link to="/" className="link discover">
                {' '}
                Discover
              </Link>
            </div>

            <div className="new-container">
              <Link to="/" className="link">
                <div className="new-image">
                  <img src="Images/women/high-heels.jpg" alt="heels" />
                </div>
                <div className="new-text">
                  <p className="date mt-3">Feb 25, 2023</p>
                  <p className="fw-bold">The post-pandemic fashion</p>
                  <p>
                    The denim resurgence is the result of the long, secretive
                    days that people have to stay indoors. The era of spor...
                  </p>
                </div>
              </Link>
              <Link to="/" className="link discover">
                Discover
              </Link>
            </div>
          </section>
        </section>
      </section>
      <br />
      <br />
      <br />
      <Divider sx={{ backgroundColor: 'ActiveBorder' }} />
    </section>
  );
}

export default Blog;
