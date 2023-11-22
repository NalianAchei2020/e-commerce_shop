import React, { useState } from 'react';
import { Box, Drawer } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ShopSideBar = ({
  handleCloseSidebar,
  sideBar,
  countArrivals,
  countMen,
  countOne,
  countTrending,
  countWomen,
  handleSection,
  select,
}) => {
  const [expand1, setExpand1] = useState(true);
  const [expand2, setExpand2] = useState(true);
  const [expand3, setExpand3] = useState(true);
  const [expand4, setExpand4] = useState(true);

  return (
    <>
      <Drawer anchor="left" open={sideBar} onClose={handleCloseSidebar}>
        <Box spacing={2} role="presentation">
          <aside className="side-container">
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
                    <span>0</span>
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
              {expand3 && (
                <ul className="d-flex flex-row flex-wrap justify-content-between mt-3">
                  <li>$0</li>
                  <li>to</li>
                  <li>$70</li>
                </ul>
              )}
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
                <ul className="d-flex flex-row gap-2 flex-wrap justify-content-between mt-3">
                  <li>Gucci</li>
                  <li>Nike</li>
                  <li>Addidas</li>
                </ul>
              )}
            </div>
            <Divider sx={{ backgroundColor: 'ActiveBorder' }} />
          </aside>
        </Box>
      </Drawer>
    </>
  );
};

export default ShopSideBar;
