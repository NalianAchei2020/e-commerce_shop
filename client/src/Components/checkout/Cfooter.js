import React from 'react';
import { Link } from 'react-router-dom';

function Cfooter() {
  return (
    <section className="cfooter-container">
      <div className="container-fluid checkout-footer2">
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
  );
}

export default Cfooter;
