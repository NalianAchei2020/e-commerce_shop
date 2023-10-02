import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Divider from '@mui/material/Divider';
import { useSelector } from 'react-redux';
import Newarrival from '../Components/shop/newArrivals';
import Women from '../Components/shop/women';
import Men from '../Components/shop/men';
import Trending from '../Components/shop/trending';
import BestSeller from '../Components/shop/bestseller';

const Shop = () => {
  const { product } = useSelector((state) => state.product);
  const [select, SetSelect] = useState('bestSeller');
  const bestSeller = product.filter((item) => item.bestSeller === true);
  const countOne = bestSeller.length;

  const handleSection = (selected) => {
    SetSelect(selected);
  };
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
              <li
                className="d-flex flex-row justify-content-between"
                onClick={() => handleSection('bestSeller')}
              >
                <Link to={`/${select}`}>Best Seller</Link>
                <span>{countOne}</span>
              </li>
              <li
                className="d-flex flex-row justify-content-between"
                onClick={() => handleSection('trending')}
              >
                <span>Trending</span>
                <span>05</span>
              </li>
              <li
                className="d-flex flex-row justify-content-between"
                onClick={() => handleSection('men')}
              >
                <span>Men</span>
                <span>05</span>
              </li>
              <li
                className="d-flex flex-row justify-content-between"
                onClick={() => handleSection('newArrival')}
              >
                <span>New Arrivals</span>
                <span>05</span>
              </li>
              <li
                className="d-flex flex-row justify-content-between"
                onClick={() => handleSection('women')}
              >
                <span>Women</span>
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
                <span>In Stock</span>
                <span>05</span>
              </li>
              <li className="d-flex flex-row justify-content-between">
                <span>Out of Stock</span>
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
          {select === 'bestSeller' && <BestSeller />}
          {select === 'trending' && <Trending />}
          {select === 'women' && <Women />}
          {select === 'newArrival' && <Newarrival />}
          {select === 'men' && <Men />}
        </main>
      </section>
    </section>
  );
};

export default Shop;
