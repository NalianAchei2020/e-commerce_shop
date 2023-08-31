import React, { useState } from 'react';
import { Link, NavLink, useMatch } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Tooltip } from '@mui/material';
import Searchbar from './search';

function Header() {
  // State variables
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [pages, setPages] = useState(false);

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

  const showPages = () => {
    setPages(!pages);
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
        <nav className="nav">
          <div className="menu-icons">
            <button type="button" onClick={handleClicked} className="btn-menu">
              <IconButton color="inherit" className="menu">
                <MenuIcon className="menu" />
              </IconButton>
            </button>
            <h1 className="logo">SHOPEE</h1>
          </div>
          <ul className={isClicked ? 'no-list' : 'list'}>
            <li className="btn-clear" onClick={handleClose}>
              <IconButton color="inherit" className="menu">
                <ClearIcon className="clear" />
              </IconButton>
              <span>Close</span>
            </li>
            <li className="nav-item active">
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
                className={useMatch('/Women') ? 'active-link' : 'nav-link'}
                to="/Women"
              >
                WOMEN
              </NavLink>
            </li>
            <li>
              <NavLink
                className={useMatch('/men') ? 'active-link' : 'nav-link'}
                to="/men"
              >
                MEN
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <div className="pages" onClick={showPages}>
                <NavLink
                  className={useMatch('/pages') ? 'active-link' : 'nav-link'}
                  to="/pages"
                >
                  PAGES
                </NavLink>
                <IconButton color="inherit" className="menu">
                  <ExpandMoreIcon className="cheron" />
                </IconButton>
              </div>
              <div className={pages ? 'no-content' : 'dropdown-content'}>
                <ul className="nav-item">
                  <li className="nav-item">
                    <Link className="nav-link" to="/pages/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/pages/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/pages/blog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <ul className="list-2">
              <li>
                <Link className="nav-link" to="/signin">
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
          <ul className="icons">
            <li className="nav-item">
              <Tooltip title="Search">
                <IconButton color="inherit">
                  <SearchIcon onClick={handleSearch} />
                </IconButton>
              </Tooltip>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="icon-link">
                <Tooltip title="Cart">
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge color="primary" badgeContent="cart">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/wishlist" className="icon-link none">
                <Tooltip title="Favorites">
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge color="primary" badgeContent="cart">
                      <FavoriteIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="icon-link none">
                <Tooltip title="Login/Register" placement="bottom">
                  <IconButton color="inherit">
                    <AccountCircleIcon />
                  </IconButton>
                </Tooltip>
              </Link>
            </li>
          </ul>
          {showSearchbar && <Searchbar hideSearch={hideSearch} />}
        </nav>
      </header>
    </section>
  );
}

export default Header;