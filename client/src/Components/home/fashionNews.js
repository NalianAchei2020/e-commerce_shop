import React from 'react';
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';

function FashionNews() {
  return (
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
                The denim resurgence is the result of the long, secretive days
                that people have to stay indoors. The era of spor...
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
              <p className="fw-bold">The New Fashion Arrivals We’re Excited</p>
              <p>
                The denim resurgence is the result of the long, secretive days
                that people have to stay indoors. The era of spor...
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
                The denim resurgence is the result of the long, secretive days
                that people have to stay indoors. The era of spor...
              </p>
            </div>
          </Link>
          <Link to="/" className="link discover">
            Discover
          </Link>
        </div>
      </section>
      <br />
      <br />
      <section className="support-container">
        <Link to="/" className="link">
          <div className="support">
            <LocalShippingIcon
              className="support-icons"
              style={{ fontSize: '4rem' }}
            />
            <div>
              <h5>Return Shipping</h5>
              <span className="support-span">On order over $150</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="link">
          <div className="support">
            <SupportAgentIcon
              className="support-icons"
              style={{ fontSize: '4rem' }}
            />
            <div>
              <h5>Support 24/7</h5>
              <span className="support-span">
                Contact us 24 hours a day, 7 days a week
              </span>
            </div>
          </div>
        </Link>
        <Link to="/" className="link">
          <div className="support">
            <AssignmentReturnIcon
              className="support-icons"
              style={{ fontSize: '4rem' }}
            />
            <div>
              <h5>30 days return</h5>
              <span className="support-span">
                Simply return it within 30 days of purchase for an exhange
              </span>
            </div>
          </div>
        </Link>
      </section>
    </section>
  );
}

export default FashionNews;
