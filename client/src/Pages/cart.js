import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removeItem } from '../redux/productSlice';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Image } from 'cloudinary-react';
import SelectCountry from '../Components/home/select';
function Cart() {
  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState('');
  const [isCoupon, setIsCoupon] = useState(false);
  const [discount, setDiscount] = useState('');
  const [msg, setMsg] = useState('');

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDeleteItem = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleDeleteItem2 = (item) => {
    dispatch(removeItem(item));
  };

  const handleBuy = () => {
    navigate('/checkout');
  };

  const handleDiscountCodeApplied = () => {
    if (discount === '') {
      setMsg('Please enter a discount code');
    } else {
      setCoupon('Discount code applied successfully. Thank you!');
      setIsCoupon(true);
    }
  };

  return (
    <section className="container-fluid cart-container">
      <div className="cart-heading3 d-flex flex-row gap-4 mb-3">
        <Link to="/" className="cart-text des-text-link">
          Home
        </Link>
        <div className="cart-text">
          <NavigateNextIcon />
        </div>
        <div>Cart</div>
      </div>
      <div className="cart-heading d-flex flex-row container justify-content-between">
        <h2>My Cart</h2>
        <Link to="/" className="cart-text cart-text2">
          Continue Shopping
        </Link>
      </div>
      {cart.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <div className="summary-table container">
          <div className="table-container ">
            <table className="table table-responsive mt-3">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th className="cart-total">Quantity</th>
                  <th className="cart-total">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex flex-row gap-1">
                        <DeleteIcon onClick={() => handleDeleteItem2(item)} />
                        <Link
                          to={`/product/${item.name}`}
                          className="cart-link"
                        >
                          <Image
                            cloudName="sali-touch"
                            publicId={item.image.public_id}
                            className="cartImage"
                          />
                        </Link>
                        <Link
                          to={`/product/${item.name}`}
                          className="cart-link"
                        >
                          <span className="text-wrap">{item.name}</span>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <span>{item.price}</span>
                      <div className=" list2">
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
                      </div>
                    </td>
                    <td className="cart-total">
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
                    <td className="cart-total">{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="summary mt-3">
            <h4 className="cart-heading2">ORDER SUMMARY</h4>
            <h5 className="mb-4 cart-text">Get shipping estimates</h5>
            <SelectCountry />
            <div className="d-flex flex-row gap-4 mt-3">
              <TextField type="text" label="Zip Code" name="description" />
              <TextField type="text" label="City" name="description" />
            </div>
            <button className="viewCart-btn btn-best ">
              Calculate Shipping
            </button>
            <h5 className="cart-text">Order special instructions</h5>
            <TextField
              variant="outlined"
              type="text"
              name="note"
              label="Write a note"
              multiline
              rows={3}
              sx={{ width: '100%' }}
            />
            <h5 className="cart-text">Discount Code</h5>
            <div>
              {isCoupon ? (
                <Alert severity="success">{coupon}</Alert>
              ) : (
                <div>
                  <TextField
                    type="text"
                    label="Enter discount code"
                    sx={{ width: '100%' }}
                    name="discount"
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                  <br />
                  <br />
                  {msg && <Alert severity="error">{msg}</Alert>}
                </div>
              )}
            </div>
            <button
              className="btn-best btn-apply"
              onClick={handleDiscountCodeApplied}
            >
              Apply
            </button>
            <ul className="d-flex flex-row justify-content-between mt-4 cart-price-border">
              <li>
                {' '}
                <h5>Sub Total</h5>
              </li>
              <li className="cart-price">
                {cart.reduce((a, c) => a + c.quantity, 0)} Items: $
                {cart.reduce((a, c) => a + c.price * c.quantity, 0)}
              </li>
            </ul>
            <p className="cart-text text-taxes">
              Taxes and shipping calculated at checkout
            </p>
            <button className="checkout-btn" type="button" onClick={handleBuy}>
              Checkout Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
