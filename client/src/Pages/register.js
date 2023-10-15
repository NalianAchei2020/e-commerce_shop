import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/productSlice';

function Register() {
  const dispatch = useDispatch();

  const { message, registerError, username } = useSelector(
    (state) => state.product
  );

  const navigate = useNavigate();
  const form = useForm();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = form;

  const handleRegister = (data) => {
    dispatch(registerUser(data));
  };
  useEffect(() => {
    if (username) {
      navigate('/');
    }
  }, [message]);

  const handleNavigateToLogin = () => {
    navigate('/login');
  };
  return (
    <section className="container-fluid mb-5 register-main-container">
      <div className="cart-heading3 d-flex flex-row gap-4 mb-3">
        <Link to="/" className="cart-text des-text-link">
          Home
        </Link>
        <div className="cart-text">
          <NavigateNextIcon />
        </div>
        <span>Create Account</span>
      </div>
      <section className="container-fluid container-register">
        <section className="register-container">
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="d-flex flex-column gap-4 ">
              <div>
                {registerError && (
                  <Alert severity="error">{registerError}</Alert>
                )}
                {message && <Alert severity="error">{message}</Alert>}
              </div>
              <h4 className="text-center">Register</h4>

              <TextField
                label="User Name"
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
              <div className="btn-register">
                <button className="btn-login btn-login2">
                  Create An Account
                </button>
              </div>
            </div>
          </form>
          <br />
          <div>
            <div className="text-center register-text">
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails.
            </div>
            <div className="btn-register btn-register1">
              <button
                className="btn-best btn-apply"
                type="submit"
                onClick={handleNavigateToLogin}
              >
                Login
              </button>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Register;
