import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Home from './Pages/home';
import Header from './Components/header/header';
import Upload from './Pages/upload';
import './Sass/index.scss';
import Footer from './Components/footer';
import Cart from './Pages/cart';
import { fetchProduct } from './redux/productSlice';
import Product from './Pages/product';
import Checkout from './Pages/checkout';
import Login from './Pages/login';
import Register from './Pages/register';
import ShoppingCart from './Components/ShoppingCart';
import { addToCart } from './redux/productSlice';
import Shop from './Pages/shop';
import About from './Pages/about';
import Contact from './Pages/contact';
import Blog from './Pages/blog';
import Wishlist from './Pages/wishlist';
import { addToWishlist, removeFromWishlist } from './redux/productSlice';
import Message from './Components/wishlist/message';
import Profile from './Pages/profile';
import { getPaypalClientID } from './hooks/getpaypal';
import { getAllUsersOrder } from './redux/productSlice';
import Paypal from './Components/checkout/paypal';
import OrderDetail from './Pages/orderDetail';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const hideHeaderFooter =
    location.pathname.includes('/checkout') ||
    location.pathname.includes('/payment');

  const [popup, setPopup] = useState(false);
  const [wishlist, setWishlist] = useState(
    localStorage.getItem('wishListState') || false
  );
  const [wishMessage, setWishMessage] = useState('');
  //const { orderID } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handlePopup = () => {
    setPopup(true);
  };
  const handleClosePopup = () => {
    setPopup(false);
  };
  const handleRouteToCart = () => {
    setPopup(false);
    navigate('/cart');
  };
  const navigateToCheckout = () => {
    setPopup(false);
    navigate('/checkout');
  };
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setPopup(true);
  };

  useEffect(() => {
    localStorage.setItem('wishListState', JSON.stringify(wishlist));
  }, [wishlist]);

  const Wishlist = localStorage.getItem('wishList');
  const handleWishlist = (item) => {
    setWishlist(!wishlist);
    dispatch(addToWishlist(item));
    if (Wishlist === 0) {
      setWishMessage('Removed from wishlist');
    } else {
      setWishMessage('Added to wishlist');
    }
  };

  const [paypalClientID, setPaypalClientID] = useState(null);

  useEffect(() => {
    const fetchPaypalClientID = async () => {
      try {
        const clientId = await getPaypalClientID();
        setPaypalClientID(clientId);
      } catch (error) {
        throw new Error('Something Went Wrong');
      }
    };

    fetchPaypalClientID();
  }, []);
  useEffect(() => {
    dispatch(getAllUsersOrder);
  }, [dispatch]);

  /*useEffect(() => {
    if (orderID !== null && orderID !== undefined) {
      // Perform actions with the newly created order ID
      localStorage.setItem('orderID', JSON.stringify(orderID));
    }
  }, [orderID]);*/

  return (
    <div className="App">
      <PayPalScriptProvider options={{ 'client-id': paypalClientID }}>
        {!hideHeaderFooter && <Header handlePopup={handlePopup} />}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                popup={popup}
                setPopup={setPopup}
                handleWishlist={handleWishlist}
                wishList={wishlist}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/shop"
            element={<Shop handleAddToCart={handleAddToCart} />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/product/:slug"
            element={<Product handleAddToCart={handleAddToCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                handleAddToCart={handleAddToCart}
                wishList={wishlist}
                handleWishlist={handleWishlist}
              />
            }
          />
          <Route path="/upload" element={<Upload />} />
          <Route path="/payment" element={<Paypal />} />
          <Route path="/order/:id" element={<OrderDetail />} />
        </Routes>
        {!hideHeaderFooter && <Footer />}
        <ShoppingCart
          handleClosePopup={handleClosePopup}
          popup={popup}
          handleRouteToCart={handleRouteToCart}
          navigateToCheckout={navigateToCheckout}
        />
        <Message
          wishMessage={wishMessage}
          wishlist={wishlist}
          setWishlist={setWishlist}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
