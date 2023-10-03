import React from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Contact() {
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
      <h3>contact</h3>
    </section>
  );
}

export default Contact;
