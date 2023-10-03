import React from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import Map from '../Components/contact/map';

function Contact() {
  const form = useForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  return (
    <section className="container-fluid">
      <div className="cart-heading3 d-flex flex-row gap-4 mb-3">
        <Link to="/" className="cart-text des-text-link">
          Home
        </Link>
        <div className="cart-text">
          <NavigateNextIcon />
        </div>
        <div>
          <span>Contact</span>
        </div>
      </div>
      <div className="container-fluid">
        <h4 className="contact-h4">Contact</h4>
        <div className="contact-text">
          <div className="text">
            <h5>Get in touch with us</h5>
            <ul>
              <li className="d-flex flex-row gap-2 mt-2">
                <CallIcon />
                <span>+48 541 44 27</span>
              </li>
              <li className="d-flex flex-row gap-2 mt-2">
                <EmailIcon />
                <span>shopee@company.com</span>
              </li>
              <li className="d-flex flex-row gap-2 mt-2">
                <LocationOnIcon />
                <span>66-764 City, Street 23</span>
              </li>
            </ul>

            <ul className="d-flex flex-row gap-4 mt-2">
              <li>
                <Link to="#pinterest.com">
                  <PinterestIcon sx={{ color: '#1976d2' }} />
                </Link>
              </li>
              <li>
                <Link to="#twitter.com">
                  <TwitterIcon sx={{ color: '#1976d2' }} />
                </Link>
              </li>
              <li>
                <Link to="#facbook.com">
                  <FacebookIcon sx={{ color: '#1976d2' }} />
                </Link>
              </li>
              <li>
                <Link to="#instagram.com">
                  <InstagramIcon sx={{ color: '#1976d2' }} />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img src="Images/icons/shoes.png" alt="shoes" />
          </div>
          <div className="text">
            <Map />
          </div>
          <div className="text">
            <h5>Send us a message</h5>
            <form>
              <TextField
                label="Email"
                variant="outlined"
                type="text"
                name="email"
                sx={{ width: '100%', marginBlock: '5px' }}
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Eamil is required',
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
                <Alert severity="error" sx={{ marginTop: '5px' }}>
                  {errors.email.message}
                </Alert>
              )}
              <TextField
                variant="outlined"
                type="text"
                name="comment"
                label="Comment"
                multiline
                rows={5}
                sx={{ width: '100%', marginBlock: '5px' }}
                {...register('Comment', {
                  required: {
                    value: true,
                    message: 'Comment is required',
                  },
                })}
              />
              {errors.comment && (
                <Alert severity="error" sx={{ marginTop: '5px' }}>
                  {errors.comment.message}
                </Alert>
              )}
              <p>
                <button className="viewCart-btn btn-best " type="button">
                  Subscribe
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
