import React from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
        </aside>
        <main></main>
      </section>
    </section>
  );
};

export default Shop;
