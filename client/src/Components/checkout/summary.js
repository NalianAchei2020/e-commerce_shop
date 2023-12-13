import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

function Summary() {
  const [show, setShow] = useState(false);
  const { cart } = useSelector((state) => state.product);

  const handleSummary = () => {
    setShow(!show);
  };

  return (
    <section
      className={`summary-container ${show ? 'showSummary' : 'hideSummary'}`}
    >
      <section className="checkout-cart-wrapper">
        <div className="d-flex flex-row d-md-none justify-content-between mt-3 mb-2 mtshow">
          <ul className="d-flex flex-row text-primary p-0">
            <li onClick={handleSummary}>
              {show ? (
                <span>Hide Order Summary</span>
              ) : (
                <span>Show Order Summary</span>
              )}
            </li>
            <li>
              <ExpandMoreIcon onClick={handleSummary} />
            </li>
          </ul>
          <p className="fw-bold">
            {' '}
            ${cart.reduce((a, c) => a + c.price * c.quantity, 0)}
          </p>
        </div>
        <section className="checkout-cart2">
          {cart.length === 0 ? null : (
            <div className={show ? 'showCart' : 'hideCart'}>
              {cart.map((item) => (
                <ul key={item.id}>
                  <li>
                    <div className="d-flex flex-row gap-4 check-items">
                      <div className="check-imageContainer">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="check-image"
                        />
                      </div>
                      <span>{item.name}</span>
                      <span className="check-qty">{item.quantity}</span>
                    </div>
                    <div>
                      <span>${item.price}</span>
                    </div>
                  </li>
                </ul>
              ))}
              <ul>
                <li>
                  <TextField
                    type="text"
                    label="Enter discount code"
                    sx={{ width: '100%' }}
                    name="discount"
                  />
                  <button className="btn-best btn-apply">Apply</button>
                </li>
                <li>
                  <span>Subtotal</span>
                  <span>
                    ${cart.reduce((a, c) => a + c.price * c.quantity, 0)}{' '}
                  </span>
                </li>
                <li>
                  <span>Shipping</span>
                  <span>Free</span>
                </li>
                <li>
                  <span className="fw-bold">Total</span>
                  <span>
                    {' '}
                    ${cart.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </span>
                </li>
              </ul>
            </div>
          )}
        </section>
      </section>
    </section>
  );
}

export default Summary;
