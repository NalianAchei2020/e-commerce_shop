import React, { useState } from 'react';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import SelectCountry from '../Components/home/select';
import ShiipingMethod from '../Components/checkout/shiipingMethod';
import PaymentMethod from '../Components/checkout/paymentMethod';

function Checkout() {
  const [isFill, setIsFill] = useState(false);
  const { cart } = useSelector((state) => state.product);
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
              <SelectCountry />
              <div className="names">
                <TextField
                  label="First Name"
                  variant="outlined"
                  type="text"
                  name="fname"
                  sx={{ width: '50%' }}
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

                <TextField
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  name="lname"
                  sx={{ width: '50%' }}
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
                    sx={{ width: '50%' }}
                    {...register('postalCode', {
                      required: {
                        value: true,
                        message: 'Please enter postal code',
                      },
                    })}
                  />
                  {errors.postalCode && (
                    <Alert severity="error">{errors.postalCode.message}</Alert>
                  )}
                </div>
                <div>
                  <TextField
                    label="City"
                    variant="outlined"
                    type="text"
                    name="city"
                    sx={{ width: '50%' }}
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
              <ShiipingMethod />
            ) : (
              <div className="enter-address">
                <p>
                  Enter your shipping address to view available shipping
                  methods.
                </p>
              </div>
            )}

            <PaymentMethod />
            <div className="mt-3 mb-5">
              <button className="checkout-btn" type="button">
                Complete Order
              </button>
            </div>
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
            <section className="checkout-cart">
              {cart.length === 0 ? null : (
                <div>
                  {cart.map((item) => (
                    <ul key={item.id}>
                      <li>
                        <div className="d-flex flex-row gap-4 check-items">
                          <img
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={60}
                            className="check-image"
                          />
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
                      <TextField
                        type="text"
                        label="Enter discount code"
                        sx={{ width: '100%' }}
                        name="discount"
                      />
                      <button className="btn-best btn-apply">Apply</button>
                    </li>
                    <li>
                      <span>Subtotal</span>
                      <span>
                        ${cart.reduce((a, c) => a + c.price * c.quantity, 0)}{' '}
                      </span>
                    </li>
                    <li c>
                      <span>Shipping</span>
                      <span>Free</span>
                    </li>
                    <li>
                      <span className="fw-bold">Total</span>
                      <span>total</span>
                    </li>
                  </ul>
                </div>
              )}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Checkout;
