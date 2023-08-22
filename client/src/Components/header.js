import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip } from '@mui/material';

function Header() {
  return (
    <section>
      <header>
        <div className="d-flex flex-row">
          <ul>
            <li>
              <h5>Free shipping on all Central Africa orders $50+</h5>
            </li>
          </ul>
          <ul>
            <li>English</li>
            <li>Français</li>
          </ul>
          <ul>
            <li> FRANC CFA</li>
            <li>USD</li>
            <li>EURO</li>
          </ul>
        </div>
        <nav className=" nav">
          <h1>SHOPEE</h1>
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
            <li className="nav-item">
              <Link className="nav-link" to="/pages">
                PAGES
              </Link>
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
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                BLOG
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
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge color="primary" badgeContent="cart">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
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
        </nav>
      </header>
    </section>
  );
}

export default Header;
