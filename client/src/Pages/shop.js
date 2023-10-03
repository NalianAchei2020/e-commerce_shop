import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import Newarrival from '../Components/shop/newArrivals';
import Women from '../Components/shop/women';
import Men from '../Components/shop/men';
import Trending from '../Components/shop/trending';
import BestSeller from '../Components/shop/bestseller';
import ShopSideBar from '../Components/shopSideBar';

const Shop = ({ handleAddToCart }) => {
  const { product } = useSelector((state) => state.product);

  const [select, SetSelect] = useState('bestSeller');
  const [expand1, setExpand1] = useState(true);
  const [expand2, setExpand2] = useState(true);
  const [expand3, setExpand3] = useState(true);
  const [expand4, setExpand4] = useState(true);
  const [sideBar, setSidebar] = useState(false);

  const bestSeller = product.filter((item) => item.bestSeller === true);
  const trending = product.filter((item) => item.trending === true);
  const newarrival = product.filter((item) => item.newArrival === true);
  const women = product.filter((item) => item.category === 'women');
  const men = product.filter((item) => item.category === 'men');
  const countOne = bestSeller.length;
  const countTrending = trending.length;
  const countArrivals = newarrival.length;
  const countWomen = women.length;
  const countMen = men.length;

  const handleSection = (selected) => {
    SetSelect(selected);
    setSidebar(false);
  };

  const handleSidebar = () => {
    setSidebar(true);
  };

  const handleCloseSidebar = () => {
    setSidebar(false);
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
        <aside className="aside">
          <div>
            <ul className="d-flex flex-row gap-2 justify-content-between">
              <li>
                <h5>Collection</h5>
              </li>
              <li>
                {expand1 ? (
                  <ExpandLessIcon
                    onClick={() => {
                      setExpand1(false);
                    }}
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      setExpand1(true);
                    }}
                  />
                )}
              </li>
            </ul>
            {expand1 && (
              <ul className="aside-list">
                <li
                  className="d-flex flex-row justify-content-between"
                  onClick={() => handleSection('bestSeller')}
                >
                  <span>Best Seller</span>
                  <span>{countOne}</span>
                </li>
                <li
                  className="d-flex flex-row justify-content-between"
                  onClick={() => handleSection('trending')}
                >
                  <span>Trending</span>
                  <span>{countTrending}</span>
                </li>
                <li
                  className="d-flex flex-row justify-content-between"
                  onClick={() => handleSection('men')}
                >
                  <span>Men</span>
                  <span>{countMen}</span>
                </li>
                <li
                  className="d-flex flex-row justify-content-between"
                  onClick={() => handleSection('newArrival')}
                >
                  <span>New Arrivals</span>
                  <span>{countArrivals}</span>
                </li>
                <li
                  className="d-flex flex-row justify-content-between"
                  onClick={() => handleSection('women')}
                >
                  <span>Women</span>
                  <span>{countWomen}</span>
                </li>
              </ul>
            )}
          </div>
          <Divider sx={{ backgroundColor: 'ActiveBorder' }} />
          <div>
            <ul className="d-flex flex-row gap-2 justify-content-between mt-5">
              <li>
                <h5>Availability</h5>
              </li>
              <li>
                {expand2 ? (
                  <ExpandLessIcon
                    onClick={() => {
                      setExpand2(false);
                    }}
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      setExpand2(true);
                    }}
                  />
                )}
              </li>
            </ul>
            {expand2 && (
              <ul className="aside-list">
                <li className="d-flex flex-row justify-content-between">
                  <span>In Stock</span>
                  <span>
                    {select === 'bestSeller' && countOne}
                    {select === 'women' && countWomen}
                    {select === 'men' && countMen}
                    {select === 'trending' && countTrending}
                    {select === 'newArrival' && countArrivals}
                  </span>
                </li>
                <li className="d-flex flex-row justify-content-between">
                  <span>Out of Stock</span>
                  <span>05</span>
                </li>
              </ul>
            )}
          </div>
          <Divider sx={{ backgroundColor: 'ActiveBorder' }} />
          <div>
            <ul className="d-flex flex-row gap-2 justify-content-between mt-5">
              <li>
                <h5>Price</h5>
              </li>
              <li>
                {expand3 ? (
                  <ExpandLessIcon
                    onClick={() => {
                      setExpand3(false);
                    }}
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      setExpand3(true);
                    }}
                  />
                )}
              </li>
            </ul>
          </div>
          <Divider sx={{ backgroundColor: 'ActiveBorder' }} />
          <div>
            <ul className="d-flex flex-row gap-2 justify-content-between mt-5">
              <li>
                <h5>Brand</h5>
              </li>
              <li>
                {expand4 ? (
                  <ExpandLessIcon
                    onClick={() => {
                      setExpand4(false);
                    }}
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      setExpand4(true);
                    }}
                  />
                )}
              </li>
            </ul>
            {expand4 && (
              <ul className="d-flex flex-row flex-wrap justify-content-between mt-3">
                <li>Gucci</li>
                <li>Nike</li>
                <li>Addidas</li>
              </ul>
            )}
          </div>
          <Divider sx={{ backgroundColor: 'ActiveBorder' }} />
        </aside>
        <main>
          <div className=" container-fluid d-flex flex-row justify-content-between mb-3">
            <div>
              <h4>
                {select === 'bestSeller' && <span>Best Seller</span>}
                {select === 'women' && <span>Women</span>}
                {select === 'men' && <span>Men</span>}
                {select === 'trending' && <span>Trending</span>}
                {select === 'newArrival' && <span>New Arrivals</span>}
              </h4>
            </div>
            <div className="side-icon">
              <IconButton onClick={handleSidebar}>
                <FilterAltIcon />
              </IconButton>
            </div>
          </div>
          {select === 'bestSeller' && (
            <BestSeller handleAddToCart={handleAddToCart} />
          )}
          {select === 'trending' && (
            <Trending handleAddToCart={handleAddToCart} />
          )}
          {select === 'women' && <Women handleAddToCart={handleAddToCart} />}
          {select === 'newArrival' && (
            <Newarrival handleAddToCart={handleAddToCart} />
          )}
          {select === 'men' && <Men handleAddToCart={handleAddToCart} />}
        </main>
      </section>
      <ShopSideBar
        handleCloseSidebar={handleCloseSidebar}
        sideBar={sideBar}
        countArrivals={countArrivals}
        countMen={countMen}
        countOne={countOne}
        countTrending={countTrending}
        countWomen={countWomen}
        select={select}
        handleSection={handleSection}
      />
    </section>
  );
};

export default Shop;
