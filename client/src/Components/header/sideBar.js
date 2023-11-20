import React from 'react';
import { Box, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector } from 'react-redux';

function SideBar({ handleClose, isClicked }) {
  const { username } = useSelector((state) => state.product);
  return (
    <Drawer anchor="left" open={isClicked} onClose={handleClose}>
      <Box spacing={2} role="presentation" width={200}>
        <ul className="list-01">
          <li className="d-flex flex-row  btn-clear mt-4 mb-4">
            <IconButton color="inherit" className="menu" onClick={handleClose}>
              <ClearIcon className="clear" sx={{ fontSize: '2rem' }} />
            </IconButton>
            <span className="mt-2">Close</span>
          </li>
        </ul>
        <ul className="list-2">
          <li className="nav-item active" onClick={handleClose}>
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item" onClick={handleClose}>
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
          </li>

          <li className="nav-item" onClick={handleClose}>
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link className="nav-link" to="/blog">
              BLOG
            </Link>
          </li>
        </ul>
        <ul className="list-2">
          {username ? (
            <li>
              <li onClick={handleClose}>
                <Link className="nav-link" to="/login">
                  SignIn
                </Link>
              </li>
              <br />
              <li onClick={handleClose}>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </li>
          ) : (
            <li>
              <li onClick={handleClose}>
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li onClick={handleClose}>
                <Link className="nav-link" to="/profile">
                  Logout
                </Link>
              </li>
            </li>
          )}

          <li onClick={handleClose}>
            <Link className="nav-link" to="/cart">
              View Cart
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link className="nav-link" to="/wishlist">
              Wishlist
            </Link>
          </li>
        </ul>
      </Box>
    </Drawer>
  );
}

export default SideBar;
