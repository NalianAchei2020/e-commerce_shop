import React from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Divider from '@mui/material/Divider';
import BestSeller from '../Components/shop/bestseller';

const Shop = () => {
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
          <span>Collections</span>
        </div>
      </div>
      <section className="container-fluid shop-container">
        <aside>
          <div>
            <ul className="d-flex flex-row justify-content-between">
              <li>
                <h5>Collection</h5>
              </li>
              <li>
                <ExpandLessIcon />
              </li>
            </ul>
            <ul className="aside-list">
              <li className="d-flex flex-row justify-content-between">
                <spn>Best Seller</spn>
                <span>05</span>
              </li>
              <li className="d-flex flex-row justify-content-between">
                <spn>Trending</spn>
                <span>05</span>
              </li>
              <li className="d-flex flex-row justify-content-between">
                <spn>Men</spn>
                <span>05</span>
              </li>
              <li className="d-flex flex-row justify-content-between">
                <spn>New Arrivals</spn>
                <span>05</span>
              </li>
              <li className="d-flex flex-row justify-content-between">
                <spn>Women</spn>
                <span>05</span>
              </li>
            </ul>
          </div>
          <Divider sx={{ backgroundColor: 'ActiveBorder' }} />
          <div>
            <ul className="d-flex flex-row justify-content-between mt-5">
              <li>
                <h5>Availability</h5>
              </li>
              <li>
                <ExpandLessIcon />
              </li>
            </ul>
            <ul className="aside-list">
              <li className="d-flex flex-row justify-content-between">
                <spn>In Stock</spn>
                <span>05</span>
              </li>
              <li className="d-flex flex-row justify-content-between">
                <spn>Out of Stock</spn>
                <span>05</span>
              </li>
            </ul>
          </div>
          <Divider sx={{ backgroundColor: 'ActiveBorder' }} />
          <div>
            <ul className="d-flex flex-row justify-content-between mt-5">
              <li>
                <h5>Price</h5>
              </li>
              <li>
                <ExpandLessIcon />
              </li>
            </ul>
          </div>
          <Divider sx={{ backgroundColor: 'ActiveBorder' }} />
          <div>
            <ul className="d-flex flex-row justify-content-between mt-5">
              <li>
                <h5>Brand</h5>
              </li>
              <li>
                <ExpandLessIcon />
              </li>
            </ul>
            <ul className="d-flex flex-row justify-content-between mt-3">
              <li>Gucci</li>
              <li>Nike</li>
              <li>Addidas</li>
            </ul>
          </div>
          <Divider sx={{ backgroundColor: 'ActiveBorder' }} />
        </aside>
        <main>
          <BestSeller />
        </main>
      </section>
    </section>
  );
};

export default Shop;
