import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { getUserOrder } from '../redux/productSlice';

function OrderDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);
  const { orders, username } = useSelector((state) => state.product);

  const selectedOrder = orders.find((order) => order._id === id);

  return (
    <section>
      <section className="checkout-container2">
        <div className="checkout-form">
          <div className="info">
            <ul>
              <h5>Order</h5>
              <li className="d-flex flex-row gap-2">
                <h6>OrderID:</h6>
                <h6>{selectedOrder?._id}</h6>
              </li>
            </ul>

            <ul lassName="d-flex flex-row gap-2">
              <h5>Shipping</h5>
              <li className="d-flex flex-row gap-2">
                <h6>Address:</h6>
                <h6 className="mt-1">{selectedOrder?.shipping?.address}</h6>
              </li>
              <li className="d-flex flex-row gap-2">
                <h6>City:</h6>
                <h6 className="mt-1">{selectedOrder?.shipping?.city}</h6>
              </li>
              <li className="d-flex flex-row gap-2">
                <h6>Country:</h6>
                <h6 className="mt-1">{selectedOrder?.shipping?.country}</h6>
              </li>
              <li className="d-flex flex-row gap-2">
                <h6>Postal Code:</h6>
                <h6 className="mt-1">{selectedOrder?.shipping?.postalCode}</h6>
              </li>
            </ul>
            <ul>
              <h5>Payment</h5>

              <li className="d-flex flex-row gap-2">
                <h6>Payment Method:</h6>
                <h6>{selectedOrder?.payment?.paymentMethod}</h6>
              </li>
              <li className="d-flex flex-row gap-2">
                <h6>Payment Status: </h6>
                <h6>{selectedOrder?.isPaid ? 'Paid' : 'Not paid'}</h6>
              </li>
              <li className="d-flex flex-row gap-2">
                <h6>Delivered:</h6>
                <h6>{selectedOrder?.isDelivered ? 'Yes' : 'No'}</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="checkout-cart-wrapper">
          <div className="checkout-cart ">
            <h4 className="mb-3">Order summary</h4>
            {Array.isArray(selectedOrder?.orderItems) &&
            selectedOrder?.orderItems.length > 0 ? (
              <div>
                {selectedOrder?.orderItems?.map((item) => (
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
                      {selectedOrder.shippingPrice === 0
                        ? 'Free'
                        : selectedOrder.shippingPrice}
                    </li>
                    <li>
                      <h6>Total</h6>
                      <h6>${selectedOrder?.totalPrice}</h6>
                    </li>
                    <li></li>
                  </ul>
                ))}
                <div>
                  {selectedOrder.isDelivered &&
                  selectedOrder.isPaid &&
                  username.isAdmin ? (
                    <button
                      className="checkout-btn"
                      type="button"
                      onClick={() => {
                        navigate('/admin');
                      }}
                    >
                      Deliver
                    </button>
                  ) : (
                    <div>
                      {selectedOrder.isPaid ? (
                        <button
                          className="checkout-btn"
                          type="button"
                          onClick={() => {
                            navigate('/');
                          }}
                        >
                          Go Shopping
                        </button>
                      ) : (
                        <button
                          className="checkout-btn"
                          type="button"
                          onClick={() => {
                            navigate('/payment');
                          }}
                        >
                          Complete Payment
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p>No data found</p>
            )}
            <div></div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default OrderDetail;
