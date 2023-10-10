import React from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Wishlist() {
  return (
    <section>
      <div className="cart-heading3 d-flex flex-row gap-4 mb-3">
        <Link to="/" className="cart-text des-text-link">
          Home
        </Link>
        <div className="cart-text">
          <NavigateNextIcon />
        </div>
        <div>
          <span>Wishlist</span>
        </div>
      </div>
      <section className="container-fluid">
        <h4>Wishlist</h4>
        <div>
          {Wishlist.length === 0 ? (
            <p>No data available</p>
          ) : (
            <div>
              {Wishlist.map((item) => {
                <div>
                  <img src={item.image} alt="wishlist-image" />
                </div>;
              })}
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default Wishlist;
