import React, { useEffect, useRef, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Paypal({ total, shippingPrice, OrderID }) {
  const { orderID } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(false);
  const [Message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [paypalBtn, setPaypalBtn] = useState(false);
  // const [orderId, setOrderId] = useState('');
  //console.log(orderId);

  //const orderId = localStorage.getItem('orderID')
  //  ? JSON.parse(localStorage.getItem('orderID'))

  //  : null;
  /*useEffect(() => {
    if (paypalBtn) {
      console.log(paypalBtn); // Log the order ID from Redux state
    }
  }, [paypalBtn]);*/
  console.log('Order ID:', orderID);
  const paidOrder = async (data) => {
    try {
      if (orderID === null || orderID === undefined) {
        console.log('No order ID found');
        return;
      } else {
        const response = await axios({
          method: 'PUT',
          url: `http://localhost:8000/api/orders/${orderID}/paid`,
          headers: {
            contentType: 'application/json',
          },
          withCredentials: true,
          data: data,
        });

        //return response.data;
        console.log(response.data);
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
      console.log(error);
    }

    if (isPaid) {
      setMessage('Payment successful');
      console.log(Message);
    }
  };
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Cool looking table',
                amount: {
                  currency_code: 'USD',
                  value: 650.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          console.log(data.orderID, data.payerID, data.paymentID);

          handleApprove({
            orderID: data.orderID,
            payerID: data.payerID,
            paymentID: data.paymentID,
          });
        },
        onError: (err) => {
          setError(err);
          console.log(err);
        },
        onCancel: () => {
          setMessage('Do want really want to cancel?');
          navigate('/cart');
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <button
        onClick={() =>
          handleApprove({
            orderID: '7X129950C7671193E',
            payerID: 'JZYTUZCTH54DE',
            paymentID: '4FU05979X8614812R',
          })
        }
      >
        Pay
      </button>
      <br />
      <br />
      <div ref={paypal}></div>
    </div>
  );
}

export default Paypal;
