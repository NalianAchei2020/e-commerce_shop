import React, { useState } from 'react';
import { Link, NavLink, useMatch, useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import Searchbar from './search';
import SideBar from './sideBar';
import Avater from './avater';

function Header({ handlePopup }) {
  const { cart, wishlist, username } = useSelector((state) => state.product);

  const location = useLocation();
  const hideCartIcon = location.pathname.includes('/cart');

  // State variables
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Event handlers
  const handleSearch = () => {
    setShowSearchbar(true);
  };

  const hideSearch = () => {
    setShowSearchbar(false);
  };

  const handleClicked = () => {
    setIsClicked(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  // Check if current route is active
  const isActive = useMatch({
    path: '/',
  });

  return (
    <section>
      <header>
        <div className="header-head">
          <ul>
            <li>
              <h5>Free shipping on all Central Africa orders $50+</h5>
            </li>
          </ul>
          <ul className="d-flex flex-row ">
            <li>
              <select className="language-dropdown">
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </li>
            <li>
              <select className="language-dropdown">
                <option value="franc">FRANC CFA</option>
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
              </select>
            </li>
          </ul>
        </div>
        <nav className="nav container-fluid">
          <div className="menu-icons">
            <div className="menu-icon-one">
              <IconButton color="inherit" onClick={handleClicked}>
                <MenuIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
            </div>
            <h1 className="logo">
              <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                SHOPEE
              </Link>{' '}
            </h1>
          </div>
          <ul className="list">
            <li className="nav-item">
              <NavLink className={isActive ? 'active-link' : 'nav-link'} to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={useMatch('/shop') ? 'active-link' : 'nav-link'}
                to="/shop"
              >
                SHOP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={useMatch('/about') ? 'active-link' : 'nav-link'}
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                className={useMatch('/contact') ? 'active-link' : 'nav-link'}
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                className={useMatch('/blog') ? 'active-link' : 'nav-link'}
                to="/blog"
              >
                BLOG
              </NavLink>
            </li>
          </ul>
          <ul className="icons">
            <li className="nav-item">
              <Tooltip title="Search">
                <IconButton color="inherit" onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
            </li>
            <li className={hideCartIcon ? 'hidecart-icon' : 'nav-item'}>
              <Tooltip title="Cart">
                <IconButton
                  size="large"
                  aria-label="show cart"
                  color="inherit"
                  onClick={handlePopup}
                >
                  <Badge color="primary" badgeContent={cart.length}>
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </li>
            <li className="nav-item">
              <Link to="/wishlist" className="icon-link none">
                <Tooltip title="Favorites">
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge color="primary" badgeContent={wishlist.length}>
                      <FavoriteIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Link>
            </li>
            <li className="nav-item ave-item">
              {username.name ? (
                <Link to="/profile">
                  <Avater />
                </Link>
              ) : (
                <Link to="/login" className="icon-link none">
                  <Tooltip title="Login/Register" placement="bottom">
                    <IconButton color="inherit">
                      <AccountCircleIcon />
                    </IconButton>
                  </Tooltip>
                </Link>
              )}
            </li>
          </ul>

          <Searchbar hideSearch={hideSearch} showSearchbar={showSearchbar} />
        </nav>
      </header>
      <SideBar handleClose={handleClose} isClicked={isClicked} />
    </section>
  );
}

export default Header;
