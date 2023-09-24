import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareIcon from '@mui/icons-material/Compare';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Tooltip } from '@mui/material';

import { addToCart, removeFromCart } from '../redux/productSlice';

function Product() {
  const location = useLocation();
  const productUrl = location.pathname + location.search;
  const baseURL = 'http://localhost:3000/';

  const dispatch = useDispatch();
  const [usersCount, setUsersCount] = useState(0);
  const [share, setShare] = useState(false);
  const [shareClick, setShareClick] = useState(false);
  const [Wishlist, setWishlist] = useState(false);
  const [wishlistClick, setWishlistClick] = useState(false);
  const [compare, setCompare] = useState(false);
  const [compareClick, setCompareClick] = useState(false);

  // Get the selected product from the URL params
  const { slug } = useParams();
  const { product } = useSelector((state) => state.product);
  const selectedProduct = product.find((item) => item.name === slug);
  const productID = selectedProduct ? selectedProduct.id : 'error';

  // Add item to cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  // Remove item from cart
  const handleDeleteItem = (item) => {
    dispatch(removeFromCart(item));
  };

  useEffect(() => {
    // Send a request to view the product
    const viewProduct = async () => {
      try {
        await axios.post('http://localhost:8000/api/views/product/view', {
          id: productID,
        });
      } catch (error) {
        console.log(error);
      }
    };

    // Send a request to leave the product
    const leaveProduct = async () => {
      try {
        await axios.post('http://localhost:8000/api/views/product/leave', {
          id: productID,
        });
      } catch (error) {
        console.log(error);
      }
    };

    // Get the count of users viewing the product
    const getCount = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/views/product/count'
        );
        setUsersCount(response.data.count);
      } catch (error) {
        console.log(error);
      }
    };

    // Perform the necessary actions when the component mounts
    viewProduct();
    getCount();

    // Perform the necessary actions when the component unmounts
    return () => {
      leaveProduct();
    };
  }, [productID]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  const handlewishlist = () => {
    setWishlist(!Wishlist);
    setWishlistClick(true);
    if (!wishlistClick) {
      setTimeout(() => {
        setWishlistClick(false);
      }, 1500);
    }
  };
  const wishlistMessage = Wishlist ? (
    <p>Product has been added to wishlist</p>
  ) : (
    <p>Product has been removed from wishlist</p>
  );
  const handlecompare = () => {
    setCompare(!compare);
    setCompareClick(true);
    if (!compareClick) {
      setTimeout(() => {
        setCompareClick(false);
      }, 1500);
    }
  };
  const compareMessage = compare ? (
    <p>Product has been added to compare</p>
  ) : (
    <p>Product has been removed from compare</p>
  );
  const handleShare = () => {
    setWishlist(!Wishlist);
    setWishlistClick(true);
    setTimeout(() => {
      setWishlistClick(false);
    }, 1000);
  };

  return (
    <section>
      <h1>Product</h1>
      {selectedProduct && (
        <div className="description-container container">
          <div className="description-image container">
            <p>{selectedProduct.image ? 'image exist' : 'image not exist'}</p>
            <img src="Images/women/heels/heels03.png" alt="product" />
          </div>
          <div className="des-text container">
            <h2>{selectedProduct.name}</h2>
            <Stack spacing={2}>
              <div className="rating">
                <Rating
                  name="size-large"
                  defaultValue={selectedProduct.rating}
                  precision={0.5}
                  readOnly
                />
                <span>{selectedProduct.numReview} Reviews</span>
              </div>
            </Stack>
            <div className="d-flex flex-row gap-4">
              <IconButton>
                <VisibilityIcon
                  sx={{ color: 'black', fontSize: '2rem', fontWeight: '800' }}
                />
              </IconButton>
              <h6 className="mt-3">{usersCount} views</h6>
            </div>
            <h2>{selectedProduct.price} FCFA</h2>
            <div className="d-flex flex-row gap-4 desIcons-container">
              <ul className="d-flex flex-row gap-3 justify-content-center align-center previewCart-list">
                <li>
                  <RemoveIcon
                    onClick={() => handleDeleteItem(selectedProduct)}
                    className="previewCart-icon"
                    style={{ fontSize: '16px' }}
                  />
                </li>
                <li className="qty">{selectedProduct.quantity}</li>
                <li>
                  <AddIcon
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="previewCart-icon"
                    style={{ fontSize: '16px' }}
                  />
                </li>
              </ul>
              <button className="checkout-btn">Add to cart</button>
            </div>
            <div className="des-terms">
              <FormControlLabel
                required
                control={<Checkbox />}
                label="I agree with Terms & Conditions"
              />
            </div>
            <button className="viewCart-btn btn-best ">Buy it now</button>
            <ul className="mt-2 d-flex flex-row gap-4 mt-3 d-block">
              <li>
                <IconButton
                  className="d-flex flex-row gap-2"
                  sx={{
                    color: 'black',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                  }}
                  onClick={handlewishlist}
                >
                  <FavoriteIcon />
                  <h6 className="activeIcon">Wishlist</h6>
                </IconButton>
              </li>
              <li>
                <IconButton
                  sx={{
                    color: 'black',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                  }}
                  className="d-flex flex-row gap-2"
                  onClick={handlecompare}
                >
                  <CompareIcon />
                  <h6 className="activeIcon">Compare</h6>
                </IconButton>
              </li>
              <li>
                <IconButton
                  sx={{
                    color: 'black',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                  }}
                  className="d-flex flex-row gap-2"
                >
                  <ShareIcon />
                  <h6>Share</h6>
                </IconButton>
              </li>
            </ul>
            <div>
              <div className="share-container">
                <div className="d-flex flex-row justify-content-between">
                  <h5>Share</h5>
                  <IconButton
                    sx={{
                      color: 'black',
                      fontSize: '1.5rem',
                      fontWeight: '800',
                    }}
                  >
                    <CancelPresentationIcon />
                  </IconButton>
                </div>
                <hr />
                <div className="icons d-flex flex-row gap-4">
                  <Link to="facebook.com" className="link">
                    {' '}
                    <Tooltip title="Facebook" placement="top">
                      <IconButton>
                        <FacebookIcon />
                      </IconButton>
                      <p className="icon-text">Facebook</p>
                    </Tooltip>
                  </Link>
                  <Link to="pinterest.com" className="link">
                    {' '}
                    <Tooltip title="Pinterest" placement="top">
                      <IconButton>
                        <PinterestIcon />
                      </IconButton>
                      <p className="icon-text">Pinterest</p>
                    </Tooltip>
                  </Link>
                  <Link to="instagram.com" className="link">
                    {' '}
                    <Tooltip title="Instagram" placement="top">
                      <IconButton>
                        <InstagramIcon />
                      </IconButton>
                      <p className="icon-text">Instagram</p>
                    </Tooltip>
                  </Link>
                  <Link to="twitter.com" className="link">
                    {' '}
                    <Tooltip title="Twitter" placement="top">
                      <IconButton>
                        <TwitterIcon />
                      </IconButton>
                      <p className="icon-text">Twitter</p>
                    </Tooltip>
                  </Link>
                </div>
                <div
                  className="copy-text d-flex flex-row gap-3"
                  data-href={productUrl}
                  data-layout="button"
                  data-size="small"
                >
                  <p>{baseURL + productUrl}</p>
                  <ContentCopyIcon />
                </div>
              </div>
            </div>

            <div
              className={
                wishlistClick && wishlistMessage ? 'element' : 'element2'
              }
            >
              {wishlistClick && wishlistMessage}
            </div>
            <div
              className={
                wishlistClick && wishlistMessage ? 'element' : 'element2'
              }
            >
              {wishlistClick && wishlistMessage}
            </div>
            <div
              className={
                compareClick && compareMessage ? 'element' : 'element2'
              }
            >
              {compareClick && compareMessage}
            </div>
          </div>
        </div>
      )}
      <div
        className="fb-share-button"
        data-href={productUrl}
        data-layout="button"
        data-size="small"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            productUrl
          )}`}
          className="fb-xfbml-parse-ignore"
        >
          Share on Facebook
        </a>
      </div>
    </section>
  );
}

export default Product;
