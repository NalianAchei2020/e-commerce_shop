import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Paypal({ total, shippingPrice }) {
  const { orderID } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(false);
  const [Message, setMessage] = useState('');
  const [error, setError] = useState('');

  const paidOrder = async (data) => {
    try {
      const response = await axios({
        method: 'PUT',
        url: `http://localhost:8000/${orderID}/paid`,
        headers: {
          contentType: 'application/json',
        },
        withCredentials: true,
        data: data,
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleApprove = (data) => {
    const payment = paidOrder(data);
    if (payment) {
      setIsPaid(true);
    } else {
      setError(
        'Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support.example@gmail.com for asssistance'
      );
      console.log(error);
    }
    if (isPaid) {
      setMessage('Payment successful');
      console.log(Message);
    }
  };
  return (
    <PayPalButtons
      style={{ color: 'blue', layout: 'horizontal', tagline: false }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: 'test',
              amount: {
                currency_code: 'USD',
                value: total + shippingPrice,
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
        setError(err);
        console.log(err);
      }}
    />
  );
}

export default Paypal;
