import React from 'react';
import { useSelector } from 'react-redux';
function Cart() {
  const { cart } = useSelector((state) => state.product);
  return (
    <section className="container-fluid cart-container">
      <p>cart</p>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </section>
  );
}

export default Cart;
