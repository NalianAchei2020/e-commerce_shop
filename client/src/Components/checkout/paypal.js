import React, { useEffect, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Paypal({ total, shippingPrice }) {
  const { orderItems } = useSelector((state) => state.product);
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

  console.log(orderItems._id);
  const paidOrder = async (data) => {
    try {
      if (orderItems._id === null || orderItems._id === undefined) {
        console.log('No order ID found');
        return;
      } else {
        const response = await axios({
          method: 'PUT',
          url: `http://localhost:8000/api/orders/${orderItems._id}/paid`,
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
  useEffect(() => {
    if (paypalBtn) {
      handleApprove();
      console.log(paypalBtn); // Log the order ID from Redux state
    }
  }, [paypalBtn]);
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
      <div>
        <PayPalButtons
          onClick={() => setPaypalBtn(true)}
          style={{ color: 'blue', layout: 'horizontal', tagline: false }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: 'test',
                  amount: {
                    currency_code: 'USD',
                    //value: (total + shippingPrice).toFixed(2),
                    value: 10,
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
      </div>
    </div>
  );
}

export default Paypal;
