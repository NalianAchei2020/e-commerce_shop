import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Tooltip } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import AppleIcon from '@mui/icons-material/Apple';

function Footer() {
  return (
    <section className="container-fluid ">
      <section className="footer-contianer">
        <div className="footer-logo">
          <Link to="/" className="link">
            <h1 className="mt-5">SHOPEE</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="icons d-flex flex-row gap-4">
            <Link to="facebook.com" className="link">
              {' '}
              <Tooltip title="Facebook" placement="top">
                <FacebookIcon />
              </Tooltip>
            </Link>
            <Link to="pinterest.com" className="link">
              {' '}
              <Tooltip title="Pinterest" placement="top">
                <PinterestIcon />
              </Tooltip>
            </Link>
            <Link to="instagram.com" className="link">
              {' '}
              <Tooltip title="Instagram" placement="top">
                <InstagramIcon />
              </Tooltip>
            </Link>
            <Link to="twitter.com" className="link">
              {' '}
              <Tooltip title="Twitter" placement="top">
                <TwitterIcon />
              </Tooltip>
            </Link>
          </div>
          <Link to="tel:+400252346753" className="link">
            <div className="calls d-flex flex-row gap-4">
              <CallIcon />
              <h6>Call us:(+400) 2523 465 376</h6>
            </div>
          </Link>
          <Link to="tel:+400252346753" className="link">
            <div className="emails d-flex flex-row gap-4">
              <MarkEmailReadIcon />
              <h6>shopee@company.com</h6>
            </div>
          </Link>
        </div>
        <div>
          <ul>
            <p className="mt-5 fw-bold">QUICK LINKS</p>
            <li>
              {' '}
              <Link className="link2" to="#">
                My Account
              </Link>
            </li>
            <li>
              {' '}
              <Link className="link2" to="#">
                Gift Cards
              </Link>
            </li>
            <li>
              {' '}
              <Link className="link2" to="#">
                Careers
              </Link>
            </li>
            <li>
              <Link className="link2" to="#">
                Accessibility
              </Link>
            </li>
            <li>
              <Link className="link2" to="#">
                Need Help?
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="mt-5 fw-bold">INFORMATION</p>
            <li>
              {' '}
              <Link className="link2" to="#">
                About Us
              </Link>
            </li>
            <li>
              {' '}
              <Link className="link2" to="#">
                Contact Us
              </Link>
            </li>
            <li>
              {' '}
              <Link className="link2" to="#">
                Sitemap
              </Link>
            </li>
            <li>
              {' '}
              <Link className="link2" to="#">
                Tracking Order
              </Link>
            </li>
            <li>
              <Link className="link2" to="#">
                Payment Methods
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="mt-5 fw-bold">LEGAL</p>
            <li>
              {' '}
              <Link className="link2" to="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              {' '}
              <Link className="link2" to="#">
                Terms of Service
              </Link>
            </li>
            <li>
              {' '}
              <Link className="link2" to="#">
                Shipping
              </Link>
            </li>
            <li>
              {' '}
              <Link className="link2" to="#">
                Returns and Refunds Policy
              </Link>
            </li>
            <li>
              <Link className="link2" to="#">
                Cancellation & Modification
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="copywrite-container d-flex flex-row justify-content-between mt-5">
        <p>© 2023 Copyright By Shopee</p>
        <ul className="d-flex flex-row  gap-4 copywrite-icons">
          <li>
            <Tooltip title="Apply Pay" placement="bottom">
              <img
                src="Images/icons/applePay.png"
                alt="apple"
                height={50}
                width={80}
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Apply Pay" placement="bottom">
              <img
                src="Images/icons/google.png"
                alt="apple"
                height={50}
                width={80}
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Apply Pay" placement="bottom">
              <img
                src="Images/icons/discover.png"
                alt="apple"
                height={50}
                width={80}
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Apply Pay" placement="bottom">
              <img
                src="Images/icons/meta.jpeg"
                alt="apple"
                height={50}
                width={80}
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Apply Pay" placement="bottom">
              <img
                src="Images/icons/paypal.png"
                alt="apple"
                height={50}
                width={80}
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Apply Pay" placement="bottom">
              <img
                src="Images/icons/visa.png"
                alt="apple"
                height={50}
                width={80}
              />
            </Tooltip>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
