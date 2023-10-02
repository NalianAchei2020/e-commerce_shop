import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
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

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideHeaderFooter = location.pathname.includes('/checkout');
  const [popup, setPopup] = useState(false);

  const dispatch = useDispatch();
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
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setPopup(true);
  };

  return (
    <div className="App">
      {!hideHeaderFooter && <Header handlePopup={handlePopup} />}
      <Routes>
        <Route path="/" element={<Home popup={popup} setPopup={setPopup} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/:section" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/product/:slug"
          element={<Product handleAddToCart={handleAddToCart} />}
        />
      </Routes>
      {!hideHeaderFooter && <Footer />}
      <ShoppingCart
        handleClosePopup={handleClosePopup}
        popup={popup}
        handleRouteToCart={handleRouteToCart}
      />
    </div>
  );
}

export default App;
