import React from 'react';
import data from '../../../server/data';

function Cart() {
  const product = data.product;
  return (
    <section className="container-fluid cart-container">
      <p>cart</p>
    </section>
  );
}

export default Cart;
