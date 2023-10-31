import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserOrder } from '../redux/productSlice';

function OrderDetail() {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { orders, username } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);
  const selectedOrder = orders.find((order) => order._id === id);
  console.log(selectedOrder);
  const {
    shipping,
    payment,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    orderItems,
    isDelivered,
    deliveredAt,
    isPaid,
    paidAt,
  } = selectedOrder;
  const isAdmin = username.isAdmin;

  return (
    <section>
      <div class="order">
        <div class="order-info">
          <div>
            <h2>Shipping</h2>
            <div>
              ${shipping.address}, ${shipping.city}, ${shipping.postalCode}, $
              {shipping.country}
            </div>
            $
            {isDelivered ? (
              `<div class="success">
        Delivered at ${deliveredAt}</div>`
            ) : (
              <div class="error">Not Delivered</div>
            )}
            ;
          </div>

          <div>
            <h2>Payment</h2>
            <div>Payment Method: ${payment.paymentMethod}</div>$
            {isPaid
              ? `<div class="success">
        Paid at ${paidAt}</div>`
              : `<div class="error">Not Paid</div>`}
            ;
          </div>

          <div>
            <div>
              <ul class="cart-list-container">
                <li>
                  <h2>Shopping Cart</h2>
                  <div>Price</div>
                </li>
                {orderItems.map((item) => (
                  <li key={item.id}>
                    <div class="cart-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div class="cart-name">
                      <div>
                        <a href={`/product/${item.product}`}>{item.name}</a>
                      </div>
                      <div>Qty: {item.qty}</div>
                    </div>
                    <div class="cart-price">${item.price}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div class="order-action">
          <ul>
            <li>
              <h2>Order Summary</h2>
            </li>
            <li>
              <div>Items</div>
              <div>${itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>${shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>$${taxPrice}</div>
            </li>
            <li class="total">
              <div>Order Total</div>
              <div>$${totalPrice}</div>
            </li>
            <li>
              <div class="fw" id="paypal-button"></div>
            </li>
            <li>
              $
              {isPaid && !isDelivered && isAdmin ? (
                <button id="deliver-order-button" class="primary fw">
                  Deliver Order
                </button>
              ) : (
                ''
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OrderDetail;
