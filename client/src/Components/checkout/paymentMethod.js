import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

function PaymentMethod({ handlePaymentValue, paymentValue }) {
  return (
    <section className="container-fluid mt-5">
      <h4>Payment</h4>
      <p>All transactions are secure and encrypted.</p>
      <div>
        <FormControl sx={{ width: '100%' }}>
          <RadioGroup
            aria-labelledby="payment-method"
            name="payment-method"
            value={paymentValue}
            onChange={handlePaymentValue}
            sx={{ width: '100%' }}
          >
            <article
              className={`d-flex flex-row justify-content-between ${
                paymentValue === 'cod' ? 'active-method' : 'payment'
              }`}
            >
              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Cash on Delivery (COD)"
              />
            </article>
            <article
              className={`d-flex flex-row justify-content-between ${
                paymentValue === 'paypal' ? 'active-method' : 'payment'
              }`}
            >
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="Paypal"
              />
            </article>
          </RadioGroup>
        </FormControl>
      </div>
    </section>
  );
}

export default PaymentMethod;
