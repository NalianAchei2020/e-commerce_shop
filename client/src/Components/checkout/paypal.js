import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { paidOrder } from '../../hooks/getpaypal';

function Paypal({ total }) {
  const { usersOders } = useSelector((state) => state.product);
  const [isPaid, setIsPaid] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  console.log(usersOders);

  const handleApprove = (orderId) => {
    const payment = paidOrder(orderId);
    if (payment) {
      setIsPaid(true);
    } else {
      setErrMessage(
        'Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support.example@gmail.com for asssistance'
      );
    }
    if (isPaid) {
      setErrMessage('Payment successful');
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
                value: total,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log('order:', order);

        handleApprove(data.orderID);
      }}
    />
  );
}

export default Paypal;
