import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip } from '@mui/material';
import Searchbar from './search';

function Header() {
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
        <nav className=" nav">
          <h1 className="logo">SHOPEE</h1>
          <ul className=" list">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                SHOP
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/pages">
                PAGES
              </Link>
              <div className="dropdown-content">
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
            <li className="nav-item">
              <Link className="nav-link" to="/Women">
                WOMEN
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/men">
                MEN
              </Link>
            </li>
          </ul>
          <ul className="icons">
            <li className="nav-item">
              <Link to="/cart" className="icon-link">
                <Tooltip title="Search">
                  <IconButton color="inherit">
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
              </Link>{' '}
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
              </Link>{' '}
            </li>
            <li className="nav-item">
              <Link to="/cart" className="icon-link">
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
              </Link>{' '}
            </li>
            <li className="nav-item">
              <Link to="/cart" className="icon-link">
                <Tooltip title="Login/Register" placement="bottom">
                  <IconButton color="inherit">
                    <AccountCircleIcon />
                  </IconButton>
                </Tooltip>
              </Link>{' '}
            </li>
          </ul>
          <Searchbar className="searcher" />
        </nav>
      </header>
    </section>
  );
}

export default Header;
