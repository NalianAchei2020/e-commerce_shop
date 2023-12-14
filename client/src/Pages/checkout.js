import React, { useState } from 'react';
import { Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Image } from 'cloudinary-react';
import SelectCountry from '../Components/home/select';
import ShiipingMethod from '../Components/checkout/shiipingMethod';
import PaymentMethod from '../Components/checkout/paymentMethod';
import Summary from '../Components/checkout/summary';
import Cfooter from '../Components/checkout/Cfooter';
import { createOrder } from '../redux/productSlice';
import { clearCart } from '../hooks/localstorage';

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFill, setIsFill] = useState(false);
  const [selectedValue, setSelectedValue] = useState('usps');
  const [shippingprice, setShippingprice] = useState(0);
  const [errror, setError] = useState(null);
  const [coupon, setCoupon] = useState('');
  const [isCoupon, setIsCoupon] = useState(false);
  const [discount, setDiscount] = useState('');
  const [msg, setMsg] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    if (selectedValue === 'usps') {
      setShippingprice(16.25);
    } else if (selectedValue === 'dhl') {
      setShippingprice(35.21);
    } else if (selectedValue === 'usps-priority') {
      setShippingprice(56.02);
    } else if (selectedValue === 'usps-priority-mail') {
      setShippingprice(58.02);
    } else {
      setShippingprice('free').toString();
    }
  };
  const { cart, error, username } = useSelector((state) => state.product);
  const form = useForm();
  const {
    register,
    watch,
    handleSubmit,

    formState: { errors },
  } = form;

  const valueF = () => {
    watch((value) => {
      if (
        value.email !== '' &&
        value.email !== '' &&
        value.postalCode !== '' &&
        value.city !== '' &&
        value.lname !== '' &&
        value.FirstName !== '' &&
        value.address !== ''
      ) {
        setIsFill(true);
      }
    });
  };
  valueF();

  const [paymentValue, setPaymentValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handlePaymentValue = (event) => {
    setPaymentValue(event.target.value);
  };

  const handleSelectedCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  const total = cart.reduce((a, c) => a + c.price * c.quantity, 0);

  //free shipping
  const freeShippingValue = 200000;
  const currentValue = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  //order

  const handleOder = (data) => {
    const cartItems = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    const shipping = {
      address: data.address,
      city: data.city,
      postalCode: data.postalCode,
      country: selectedCountry,
      method: selectedValue,
    };

    const payment = {
      paymentMethod: paymentValue,
    };

    const orderItems = cartItems.map((item) => ({
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
      product: item._id,
    }));
    const orderData = {
      orderItems: orderItems,
      shipping: shipping,
      payment: payment,
      itemPrice: total,
      taxPrice: 0,
      shippingPrice: shippingprice,
      totalPrice: (shippingprice + total).toFixed(2),
    };
    if (orderData && username.name) {
      dispatch(createOrder(orderData));
      if (error) {
        setError('Something went wrong');
      }
      if (paymentValue === 'paypal') {
        setTimeout(() => {
          navigate('/payment');
        }, 1000);
        clearCart();
      } else {
        setTimeout(() => {
          navigate('/profile');
        }, 1000);
        clearCart();
      }
    } else {
      setError('Something went wrong! Make sure you are logged in');
    }
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
    <section className="container-checkout">
      <section className="checkout-container">
        <div className="checkout-header d-flex flex-row justify-content-between">
          <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
            {' '}
            <h2>SHOPEE</h2>
          </Link>
          <Link to="/cart" className="icon-link">
            <Tooltip title="Cart">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{ color: '#000' }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
        <section className="checkout-container2">
          <Summary />
          <section className="checkout-form">
            <ul className="d-flex flex-row justify-content-between p-0">
              <li>
                <h4>Contact</h4>
              </li>
              <li className="d-flex flex-row gap-2">
                <span>Have an account?</span>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <form className="d-flex flex-column gap-2">
              <Stack spacing={2} component="form">
                <TextField
                  label="Email"
                  variant="outlined"
                  type="text"
                  name="email"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Please enter an email',
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Email is invalid',
                    },
                    validate: (fieldValue) => {
                      return (
                        fieldValue !== 'admin@gmail.com' ||
                        'Enter a different email '
                      );
                    },
                  })}
                />
                {errors.email && (
                  <Alert severity="error">{errors.email.message}</Alert>
                )}
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Email me with news and offers"
                    {...register('EmailCheckBox')}
                  />
                </FormGroup>
                <SelectCountry
                  handleSelectedCountry={handleSelectedCountry}
                  selectedCountry={selectedCountry}
                />
                <div className="names">
                  <div>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      type="text"
                      name="fname"
                      sx={{ width: '50%', marginBottom: '1em' }}
                      {...register('FirstName', {
                        required: {
                          value: true,
                          message: 'Please enter first name',
                        },
                      })}
                    />
                    {errors.FirstName && (
                      <Alert severity="error">{errors.FirstName.message}</Alert>
                    )}
                  </div>
                  <div>
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      type="text"
                      name="lname"
                      sx={{ width: '50%', marginBottom: '1em' }}
                      {...register('lname', {
                        required: {
                          value: true,
                          message: 'Please enter last name',
                        },
                      })}
                    />
                    {errors.lname && (
                      <Alert severity="error">{errors.lname.message}</Alert>
                    )}
                  </div>
                </div>
                <TextField
                  label="Address"
                  variant="outlined"
                  type="text"
                  name="address"
                  {...register('address', {
                    required: {
                      value: true,
                      message: 'Please enter address',
                    },
                  })}
                />
                {errors.address && (
                  <Alert severity="error">{errors.address.message}</Alert>
                )}
                <div className="names">
                  <div>
                    <TextField
                      label="Postal code"
                      variant="outlined"
                      type="text"
                      name="postalCode"
                      sx={{ width: '50%', marginBottom: '1em' }}
                      {...register('postalCode', {
                        required: {
                          value: true,
                          message: 'Please enter postal code',
                        },
                      })}
                    />
                    {errors.postalCode && (
                      <Alert severity="error">
                        {errors.postalCode.message}
                      </Alert>
                    )}
                  </div>
                  <div>
                    <TextField
                      label="City"
                      variant="outlined"
                      type="text"
                      name="city"
                      sx={{ width: '50%', marginBottom: '1em' }}
                      {...register('city', {
                        required: {
                          value: true,
                          message: 'Please enter city',
                        },
                      })}
                    />
                    {errors.city && (
                      <Alert severity="error">{errors.city.message}</Alert>
                    )}
                  </div>
                </div>

                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Save this information for next time"
                    {...register('saveData')}
                  />
                </FormGroup>
              </Stack>
              {isFill ? (
                <ShiipingMethod
                  handleRadioChange={handleRadioChange}
                  selectedValue={selectedValue}
                />
              ) : (
                <div className="enter-address">
                  <p>
                    Enter your shipping address to view available shipping
                    methods.
                  </p>
                </div>
              )}

              <PaymentMethod
                handlePaymentValue={handlePaymentValue}
                paymentValue={paymentValue}
              />
              <div className="mt-3 mb-5">
                <button
                  className="checkout-btn"
                  type="button"
                  onClick={handleSubmit(handleOder)}
                >
                  Complete Order
                </button>
              </div>
            </form>
            <div className="container-fluid checkout-footer">
              <Link to="#" className="icon-link3">
                Refund policy
              </Link>
              <Link to="#" className="icon-link3">
                Privacy policy
              </Link>
              <Link to="#" className="icon-link3">
                Term of service
              </Link>
              <Link to="#" className="icon-link3">
                Contact information
              </Link>
            </div>
          </section>
          <section className="checkout-cart-wrapper">
            <section className="checkout-cart ">
              {cart.length === 0 ? null : (
                <div>
                  <h4 className="mb-3">Order summary</h4>
                  {cart.map((item) => (
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
                    </ul>
                  ))}
                  <ul>
                    <li>
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
                    </li>
                    <li>
                      <span>Subtotal</span>
                      <span className="fw-bold">
                        <small>
                          ${cart.reduce((a, c) => a + c.price * c.quantity, 0)}{' '}
                        </small>
                      </span>
                    </li>
                    <li>
                      <p>Shipping</p>
                      <div>
                        {isFill ? (
                          <div>
                            {currentValue >= freeShippingValue ? (
                              <span>Free</span>
                            ) : (
                              <span>
                                {selectedValue === 'usps' ? (
                                  <span>$16.25</span>
                                ) : selectedValue === 'dhl' ? (
                                  <span>$35.21</span>
                                ) : selectedValue === 'usps-priority' ? (
                                  <span>$56.02</span>
                                ) : selectedValue === 'usps-priority-mail' ? (
                                  <span>$58.02</span>
                                ) : null}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span>
                            <small>Enter shipping address</small>
                          </span>
                        )}
                      </div>
                    </li>
                    <li>
                      <span className="fw-bold">Total</span>
                      <div className="fw-bold">
                        {currentValue >= freeShippingValue ? (
                          <span>{total}</span>
                        ) : (
                          <span>
                            {selectedValue === 'usps' ? (
                              <span>${(total + 16.25).toFixed(2)}</span>
                            ) : selectedValue === 'dhl' ? (
                              <span>${(total + 35.21).toFixed(2)}</span>
                            ) : selectedValue === 'usps-priority' ? (
                              <span>${(total + 56.02).toFixed(2)}</span>
                            ) : selectedValue === 'usps-priority-mail' ? (
                              <span>${total + (58.02).toFixed(2)}</span>
                            ) : (
                              total
                            )}
                          </span>
                        )}
                      </div>
                    </li>
                  </ul>
                  <p>{errror}</p>
                </div>
              )}
            </section>
            <Cfooter />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Checkout;
