import React from 'react';
import { Box, Drawer } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function SideBar({ handleClose, isClicked }) {
  return (
    <Drawer anchor="left" open={isClicked} onClose={handleClose}>
      <Box spacing={2} role="presentation">
        <ul className="list-01">
          <li className="btn-clear" onClick={handleClose}>
            <IconButton color="inherit" className="menu">
              <ClearIcon className="clear" />
            </IconButton>
            <span>Close</span>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop">
              SHOP
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/blog">
              BLOG
            </NavLink>
          </li>
          <ul className="list-2">
            <li>
              <Link className="nav-link" to="/login">
                SignIn
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/cart">
                View Cart
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/wishlist">
                Wishlist
              </Link>
            </li>
          </ul>
        </ul>
      </Box>
    </Drawer>
  );
}

export default SideBar;
