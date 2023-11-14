import React from 'react';
import { Link } from 'react-router-dom';

function Instagram() {
  return (
    <section className="container-fluid">
      <h2 className="text-center fw-bold mt-5 ">@ Follows Us On</h2>
      <h6 className="text-center mb-5 ">INSTAGRAM</h6>
      <section className="instagram-container">
        <Link to="instagram.com">
          <img
            src="Images/banner/insta1.jpeg"
            alt="instagram"
            height={200}
            width={300}
          />
        </Link>
        <Link to="instagram.com">
          <img
            src="Images/banner/insta2.jpeg"
            alt="instagram"
            height={200}
            width={300}
          />
        </Link>
        <Link to="instagram.com">
          <img
            src="Images/banner/insta3.jpeg"
            alt="instagram"
            height={200}
            width={300}
          />
        </Link>
        <Link to="instagram.com">
          <img
            src="Images/banner/insta6.jpeg"
            alt="instagram"
            height={200}
            width={300}
          />
        </Link>
        <Link to="instagram.com">
          <img
            src="Images/banner/insta4.jpg"
            alt="instagram"
            height={200}
            width={300}
          />
        </Link>
        <Link to="instagram.com">
          <img
            src="Images/banner/insta5.jpg"
            alt="instagram"
            height={200}
            width={300}
          />
        </Link>
      </section>
    </section>
  );
}

export default Instagram;
