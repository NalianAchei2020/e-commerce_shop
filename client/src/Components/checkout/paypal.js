import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

function Paypal() {
  return (
    <PayPalButtons
      style={{ color: 'blue', layout: 'horizontal', tagline: false }}
      createOrder={(data, action) => {
        return action.order.create({
          purchase_units: [
            {
              description: 'test',
              amount: { value: '10.00' },
            },
          ],
        });
      }}
    />
  );
}

export default Paypal;
