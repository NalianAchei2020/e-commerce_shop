import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import Message from '../checkout/message';
import Error from '../checkout/error';
function Paypal() {
  const { orderItems } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const total = orderItems?.totalPrice;
  const shippingPrice = orderItems?.shippingPrice;

  const paidOrder = async (data) => {
    try {
      if (orderItems._id === null || orderItems._id === undefined) {
        setError('No order ID found');
        return;
      } else {
        const response = await axios({
          method: 'PUT',
          url: `https://e-commerce-backend-thjf.onrender.com/api/orders/${orderItems._id}/paid`,
          headers: {
            contentType: 'application/json',
          },
          withCredentials: true,
          data: data,
        });

        return response.data;
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleApprove = async (data) => {
    const payment = await paidOrder(data);
    if (payment) {
      setIsPaid(true);
    } else {
      setError(
        'Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support.example@gmail.com for asssistance'
      );
    }

    if (isPaid) {
      setMessage('Payment successful');
      setTimeout(() => {
        navigate('/profile');
      }, 1500);
    }
  };

  return (
    <section>
      <div className="checkout-header d-flex flex-row justify-content-between">
        <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
          {' '}
          <h2>SHOPEE</h2>
        </Link>
        <Link to="/cart" className="icon-link">
          <Tooltip title="Cart">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ color: '#000' }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
        </Link>
      </div>
      <Message message={message} setMessage={setMessage} />
      <Error setError={setError} error={error} />
      <section className="checkout-container2">
        <div className="checkout-form">
          <div className="info">
            <ul>
              <h5>Order</h5>
              <li className="d-flex flex-row gap-2">
                <h6>OrderID:</h6>
                <h6>{orderItems._id}</h6>
              </li>
            </ul>

            <ul lassName="d-flex flex-row gap-2">
              <h5>Shipping</h5>
              <li className="d-flex flex-row gap-2">
                <h6>Address:</h6>
                <h6 className="mt-1">{orderItems?.shipping?.address}</h6>
              </li>
              <li className="d-flex flex-row gap-2">
                <h6>City:</h6>
                <h6 className="mt-1">{orderItems?.shipping?.city}</h6>
              </li>
              <li className="d-flex flex-row gap-2">
                <h6>Country:</h6>
                <h6 className="mt-1">{orderItems?.shipping?.country}</h6>
              </li>
              <li className="d-flex flex-row gap-2">
                <h6>Postal Code:</h6>
                <h6 className="mt-1">{orderItems?.shipping?.postalCode}</h6>
              </li>
            </ul>
            <ul>
              <h5>Payment</h5>

              <li className="d-flex flex-row gap-2">
                <h6>Payment Method:</h6>
                <h6>{orderItems?.payment?.paymentMethod}</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="checkout-cart-wrapper">
          <div className="checkout-cart ">
            <h4 className="mb-3">Order summary</h4>
            {Array.isArray(orderItems.orderItems) &&
            orderItems.orderItems.length > 0 ? (
              <div>
                {orderItems?.orderItems?.map((item) => (
                  <ul key={item.id}>
                    <li>
                      <div className="d-flex flex-row gap-4 check-items">
                        <div className="check-imageContainer">
                          <Image
                            cloudName="sali-touch"
                            publicId={item.image.public_id}
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
                    <li>
                      <h6>Shipping</h6>
                      {orderItems.shippingPrice === 0
                        ? 'Free'
                        : orderItems.shippingPrice}
                    </li>
                    <li>
                      <h6>Total</h6>
                      <h6>${orderItems?.totalPrice}</h6>
                    </li>
                    <li>
                      <h5>Click the button below to complete your payment</h5>
                    </li>
                  </ul>
                ))}
              </div>
            ) : (
              <p>No data found</p>
            )}
            <div>
              <PayPalButtons
                style={{
                  size: 'small',
                  height: 48,
                  borderRadius: 10,
                  label: 'pay',
                  shape: 'rect',
                  color: 'blue',
                  layout: 'horizontal',
                  tagline: false,
                }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        description: 'test',
                        amount: {
                          currency_code: 'USD',
                          value: (
                            Number(total) + Number(shippingPrice)
                          ).toFixed(2),
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  const order = await actions.order.capture();
                  console.log('order:', order);

                  handleApprove({
                    orderID: data.orderID,
                    payerID: data.payerID,
                    paymentID: data.paymentID,
                  });
                }}
                onCancel={() => {
                  setMessage('Do want really want to cancel?');
                  navigate('/cart');
                }}
                onError={(err) => {
                  setError('Something went wrong, please try again later');
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Paypal;
