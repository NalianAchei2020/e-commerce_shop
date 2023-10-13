import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/productSlice';

function Login() {
  const dispatch = useDispatch();
  const { message, loginError, username, isLogin } = useSelector(
    (state) => state.product
  );
  console.log(username);
  const navigate = useNavigate();
  const form = useForm();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = form;

  const handleToRegister = () => {
    navigate('/register');
  };

  const handleLogin = (data) => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (isLogin) {
      //navigate('/');
    }
  }, [isLogin]);
  return (
    <section className="container-fluid container-login">
      <div className="cart-heading3 d-flex flex-row gap-4 mb-3">
        <Link to="/" className="cart-text des-text-link">
          Home
        </Link>
        <div className="cart-text">
          <NavigateNextIcon />
        </div>
        <span>Account</span>
      </div>
      <section className="container-fluid">
        <h4 className="account-heading">Account</h4>
        <section className=" login-container">
          <div className="d-flex flex-column gap-4 login-sub">
            <div>
              {loginError && <Alert severity="error">{loginError}</Alert>}
              {message && <Alert severity="error">{message}</Alert>}
            </div>
            <h4>Login</h4>
            <form
              className="d-flex flex-column gap-4"
              onSubmit={handleSubmit(handleLogin)}
            >
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
              <Link to="#" className="login-link">
                Forgot your password?
              </Link>
              <button className="btn-login">Login</button>
            </form>
          </div>
          <div className="vertical-line"></div>
          <div className="d-flex flex-column gap-4  login-sub sub2">
            <h4>New Customer</h4>
            <Alert color="info">
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails.
            </Alert>
            <button
              className="btn-best btn-apply"
              type="submit"
              onClick={handleToRegister}
            >
              Register
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Login;
