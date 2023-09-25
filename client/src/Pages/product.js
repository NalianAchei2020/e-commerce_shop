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
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { addToCart, removeFromCart } from '../redux/productSlice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Review from '../Components/product/review';
import BestSeller from '../Components/product/bestSeller';
import MayLikeProduct from '../Components/product/mayLikeProduct';

function Product() {
  const location = useLocation();
  const productUrl = location.pathname + location.search;
  const baseURL = 'http://localhost:3000';

  const dispatch = useDispatch();
  const [usersCount, setUsersCount] = useState(0);
  const [share, setShare] = useState(false);
  const [copy, setCopy] = useState(false);
  const [Wishlist, setWishlist] = useState(false);
  const [wishlistClick, setWishlistClick] = useState(false);
  const [compare, setCompare] = useState(false);
  const [compareClick, setCompareClick] = useState(false);

  const [tabs, setTabs] = useState('description');
  const [review, setReview] = useState(false);

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
    setShare(true);
  };
  const handleCloseShare = () => {
    setShare(false);
    if (copy) {
      setCopy(false);
    }
  };
  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  const handleTabs = (tab) => {
    setTabs(tab);
  };
  const handleReview = () => {
    setReview(!review);
  };
  return (
    <section>
      <h1>Product</h1>
      <section className="description-container container-fluid">
        <div className="description-image container">
          <img src={selectedProduct.image} alt="product" />
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
          <ul className="mt-2 d-flex flex-row gap-2 mt-3 d-block">
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
                onClick={handleShare}
              >
                <ShareIcon />
                <h6>Share</h6>
              </IconButton>
            </li>
          </ul>
          <div>
            <div className={share ? 'share-container' : 'not-share'}>
              <div className="d-flex flex-row justify-content-between">
                <h5>Share</h5>
                <IconButton
                  sx={{
                    color: 'black',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                  }}
                  onClick={handleCloseShare}
                >
                  <CancelPresentationIcon />
                </IconButton>
              </div>
              <hr />
              <div className="icons d-flex flex-row gap-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com"
                  className="link"
                >
                  <img
                    src={selectedProduct.image}
                    alt="product"
                    className="d-none"
                  />
                  <Tooltip title="Facebook" placement="top">
                    <div>
                      <IconButton>
                        <FacebookIcon />
                      </IconButton>
                      <p className="icon-text">Facebook</p>
                    </div>
                  </Tooltip>
                </Link>
                <Link
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.pinterest.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com"
                >
                  <img
                    src={selectedProduct.image}
                    alt="product"
                    className="d-none"
                  />
                  <Tooltip title="Pinterest" placement="top">
                    <div>
                      <IconButton>
                        <PinterestIcon />
                      </IconButton>
                      <p className="icon-text">Pinterest</p>
                    </div>
                  </Tooltip>
                </Link>
                <Link
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.instagram.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com"
                >
                  <img
                    src={selectedProduct.image}
                    alt="product"
                    className="d-none"
                  />
                  <Tooltip title="Instagram" placement="top">
                    <div>
                      <IconButton>
                        <InstagramIcon />
                      </IconButton>
                      <p className="icon-text">Instagram</p>
                    </div>
                  </Tooltip>
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com"
                  className="link"
                >
                  <img
                    src={selectedProduct.image}
                    alt="product"
                    className="d-none"
                  />
                  <Tooltip title="Twitter" placement="top">
                    <div>
                      <IconButton>
                        <TwitterIcon />
                      </IconButton>
                      <p className="icon-text">Twitter</p>
                    </div>
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
                <CopyToClipboard
                  text={baseURL + productUrl}
                  onCopy={handleCopy}
                >
                  {copy ? <p>Copied</p> : <ContentCopyIcon />}
                </CopyToClipboard>
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
            className={compareClick && compareMessage ? 'element' : 'element2'}
          >
            {compareClick && compareMessage}
          </div>
          <hr />
          <ul className="p-0">
            <li className="d-flex flex-row gap-2">
              <p className="fw-bold">Vendor:</p>
              <span className="text-primary vendor">
                {' '}
                {selectedProduct.brand}
              </span>
            </li>

            <li className="d-flex flex-row gap-2">
              <p className="fw-bold">Availability:</p>
              {selectedProduct.countInStock >= 0 ? (
                <span className="text-success vendor">In Stock</span>
              ) : (
                <span className="text-success vendor">Out of stock</span>
              )}
            </li>
            <li className="d-flex flex-row gap-2">
              <p className="fw-bold">Category:</p>
              <span className="vendor"> {selectedProduct.category}</span>
            </li>
          </ul>
          <hr />
          <div>
            <ul className="d-flex flex-row gap-2 p-0">
              <li>
                <LocalShippingIcon />
              </li>
              <li>Free Shipping & Returns: On all orders over 200 FCFA</li>
            </ul>
            <ul className="d-flex flex-row gap-2 p-0">
              <li>
                <LocalShippingIcon />
              </li>
              <li>Estimated Delivery: Sep 28 - Oct 04</li>
            </ul>
          </div>
          <ul className="d-flex flex-row gap-4  images-list">
            <li className="list-images">
              <img
                src="/Images/icons/visa.png"
                alt="visa-card"
                height={60}
                width={40}
              />
            </li>
            <li className="list-images">
              <img
                src="/Images/icons/paypal.png"
                alt="paypal"
                height={60}
                width={40}
              />
            </li>
            <li className="list-images">
              <img
                src="/Images/icons/stripe.png"
                alt="visa-card"
                height={60}
                width={40}
              />
            </li>
            <li className="list-images">
              <img
                src="/Images/icons/amex.png"
                alt="amex"
                height={60}
                width={40}
              />
            </li>
            <li className="list-images">
              <img
                src="/Images/icons/skrill.png"
                alt="skrill"
                height={60}
                width={60}
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="product-description container-fluid">
        <div className="description-section">
          <ul
            className={window.screen.width < 768 ? 'flex-tab' : 'no-flex-tab'}
          >
            <li
              className="d-flex flex-row justify-content-between  gap-2 tab-list2"
              onClick={() => handleTabs('description')}
            >
              <span className={tabs === 'description' ? ' active-tab' : ''}>
                Description
              </span>
              <span className="mobile-icon">
                {' '}
                <ExpandMoreIcon />
              </span>
            </li>
            <li
              className="d-flex flex-row justify-content-between gap-2 tab-list2"
              onClick={() => handleTabs('custom-tab')}
            >
              <span className={tabs === 'custom-tab' ? ' active-tab' : ''}>
                Custom Tab
              </span>
              <span className="mobile-icon">
                {' '}
                <ExpandMoreIcon />
              </span>
            </li>
            <li
              className="d-flex flex-row justify-content-between gap-2 tab-list2"
              onClick={() => handleTabs('shipping-return')}
            >
              <span className={tabs === 'shipping-return' ? ' active-tab' : ''}>
                Shipping & Return
              </span>
              <span className="mobile-icon">
                {' '}
                <ExpandMoreIcon />
              </span>
            </li>
            <li
              className="d-flex flex-row justify-content-between gap-2 tab-list2"
              onClick={() => handleTabs('review')}
            >
              <span className={tabs === 'review' ? ' active-tab' : ''}>
                Reviews
              </span>
              <span className="mobile-icon">
                {' '}
                <ExpandMoreIcon />
              </span>
            </li>
          </ul>
          <hr className="hr-line" />
          <div className="container">
            {tabs === 'description' && (
              <div className="container">
                <p>{selectedProduct.description}</p>
              </div>
            )}
            {tabs === 'custom-tab' && (
              <div className="container">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <div>
                  <img
                    src="/Images/banner/banner-3.png"
                    alt="banner"
                    width={600}
                  />
                </div>
              </div>
            )}
            {tabs === 'shipping-return' && (
              <div className="container">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. I f you are going to use a passage
                  of Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc
                </p>
              </div>
            )}
            {tabs === 'review' && (
              <section>
                <div className="container d-flex flex-column flex-md-row  justify-content-between">
                  <div>
                    <p>No review yet for this product</p>
                  </div>
                  <div>
                    <button
                      className="btn-best btn-review"
                      type="button"
                      onClick={handleReview}
                    >
                      Write a review
                    </button>
                  </div>
                </div>
                {review && <Review />}
              </section>
            )}
          </div>
        </div>
        <div className="des-bestSeller">
          <h4>Best Sellers</h4>
          <BestSeller />
        </div>
      </section>
      <MayLikeProduct />
    </section>
  );
}

export default Product;
