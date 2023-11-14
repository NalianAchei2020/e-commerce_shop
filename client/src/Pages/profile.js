import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { getUserOrder } from '../redux/productSlice';

function Profile() {
  const dispatch = useDispatch();
  const form = useForm();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = form;
  const { orders, username } = useSelector((state) => state.product);
  console.log(orders);
  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);

  const handleUpdate = (data) => {};
  return (
    <section className="container-fluid ">
      <div className="cart-heading3 d-flex flex-row gap-4 mb-3">
        <Link to="/" className="cart-text des-text-link">
          Home
        </Link>
        <div className="cart-text">
          <NavigateNextIcon />
        </div>
        <span>Profile</span>
      </div>
      <section className="content profile">
        <div className="profile-info">
          <div className="form-container">
            <h3>User Profile</h3>
            <form
              className="d-flex flex-column gap-4"
              onSubmit={handleSubmit(handleUpdate)}
            >
              <TextField
                label="username"
                variant="outlined"
                value={username.name}
                type="text"
                name="name"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Please enter a username',
                  },
                })}
              />
              {errors.name && (
                <Alert severity="error">{errors.name.message}</Alert>
              )}
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
              <TextField
                label="Password"
                variant="outlined"
                type="text"
                name="password"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Please enter a password',
                  },
                })}
              />
              {errors.password && (
                <Alert severity="error">{errors.password.message}</Alert>
              )}
              <div className="d-flex flex-row flex-sm-column">
                <button className="btn-login">Update</button>
                <button className="btn-login">Logout</button>
              </div>
            </form>
          </div>
        </div>
        <div className="profile-orders">
          <h2>Order History</h2>
          <table>
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="6">No Order Found.</td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr>
                    <td>{order._id}</td>
                    <td>{order.createdAt}</td>
                    <td>$ {order.totalPrice}</td>
                    <td>{order.paidAt ? 'YES' : 'No'}</td>
                    <td>{order.deliveryAt ? 'YES' : 'No'}</td>
                    <td>
                      <a href={`/order/${order._id}`}>DETIALS</a>{' '}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

export default Profile;
