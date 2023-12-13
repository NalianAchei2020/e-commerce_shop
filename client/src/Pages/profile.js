import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import {
  CTable,
  CTableBody,
  CTableHeaderCell,
  CTableHead,
  CTableRow,
  CTableDataCell,
} from '@coreui/react';
import { getUserOrder } from '../redux/productSlice';
import { clearUser } from '../hooks/localstorage';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = form;
  const { orders } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);

  const handleUpdate = (data) => {};
  const handleLogout = () => {
    clearUser();
    navigate('/');
  };
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
              <div className="d-flex flex-row  gap-2">
                <button className="btn-login">Update</button>
                <button className="btn-login" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="profile-orders">
          <h2>Order History</h2>
          <CTable responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">ORDER ID</CTableHeaderCell>
                <CTableHeaderCell scope="col">DATE</CTableHeaderCell>
                <CTableHeaderCell scope="col">TOTAL</CTableHeaderCell>
                <CTableHeaderCell scope="col">PAID</CTableHeaderCell>
                <CTableHeaderCell scope="col">DELIVERED</CTableHeaderCell>
                <CTableHeaderCell scope="col">ACTIONS</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {orders.length === 0 ? (
                <CTableRow>
                  <CTableDataCell>No data found</CTableDataCell>
                </CTableRow>
              ) : (
                orders.map((order) => (
                  <CTableRow>
                    <CTableDataCell>{order._id}</CTableDataCell>
                    <CTableDataCell>{order.createdAt}</CTableDataCell>
                    <CTableDataCell>$ {order.totalPrice}</CTableDataCell>
                    <CTableDataCell>
                      {order.paidAt ? 'YES' : 'No'}
                    </CTableDataCell>
                    <CTableDataCell>
                      {order.deliveryAt ? 'YES' : 'No'}
                    </CTableDataCell>
                    <CTableDataCell>
                      <a href={`/order/${order._id}`}>DETIALS</a>{' '}
                    </CTableDataCell>
                  </CTableRow>
                ))
              )}
            </CTableBody>
          </CTable>
        </div>
      </section>
    </section>
  );
}

export default Profile;
