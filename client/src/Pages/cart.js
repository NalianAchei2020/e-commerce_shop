import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removeItem } from '../redux/productSlice';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SelectCountry from '../Components/home/select';
function Cart() {
  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDeleteItem = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleDeleteItem2 = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <section className="container-fluid cart-container p-5">
      <div className="cart-heading d-flex flex-row justify-content-between mb-5">
        <h2>My Cart</h2>
        <Link to="/">Continue Shopping</Link>
      </div>
      {cart.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <div className="summary-table">
          <table className="table mt-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr>
                  <td className="d-flex flex-row gap-4">
                    <DeleteIcon />
                    <img
                      src={item.image}
                      alt="cartImage"
                      width={80}
                      height={70}
                    />
                    <span>{item.name}</span>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <ul className="d-flex flex-row gap-3 justify-content-center align-center previewCart-list">
                      <li>
                        <RemoveIcon
                          onClick={() => handleDeleteItem(item)}
                          className="previewCart-icon"
                          style={{ fontSize: '16px' }}
                        />
                      </li>
                      <li className="qty">{item.quantity}</li>
                      <li>
                        <AddIcon
                          onClick={() => handleAddToCart(item)}
                          className="previewCart-icon"
                          style={{ fontSize: '16px' }}
                        />
                      </li>
                    </ul>
                  </td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="summary">
            <h4>ORDER SUMMARY</h4>
            <h5>Get shipping estimates</h5>
            <SelectCountry />
            <div className="d-flex flex-row gap-4 mt-3">
              <TextField
                type="text"
                label="Zip Code"
                //sx={{ width: '100%' }}
                name="description"
              />
              <TextField
                type="text"
                label="City"
                //sx={{ width: '100%' }}
                name="description"
              />
            </div>
            <button className="viewCart-btn btn-best ">
              Calculate Shipping
            </button>
            <h5>Order special instructions</h5>
            <textarea type="text" name="description" cols={40} rows={4} />
            <h5>Discount Code</h5>
            <TextField
              type="text"
              label="Enter discount code"
              sx={{ width: '100%' }}
              name="description"
            />
            <button>Apply</button>
            <ul className="d-flex flex-row justify-content-between mt-4">
              <li>
                {' '}
                <h5>Sub Total</h5>
              </li>
              <li className="cart-price">
                {cart.reduce((a, c) => a + c.quantity, 0)} Items:{' '}
                {cart.reduce((a, c) => a + c.price * c.quantity, 0)} FCFA
              </li>
            </ul>
            <p>Taxes and shipping calculated at checkout</p>
            <button className="checkout-btn">Checkout Now</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
