import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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
import { emporaryDrawer } from './Pages/drawer';

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.includes('/checkout');
  const [popup, setPopup] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handlePopup = () => {
    setPopup(true);
    console.log('hi');
  };
  return (
    <div className="App">
      {!hideHeaderFooter && <Header handlePopup={handlePopup} />}
      <Routes>
        <Route path="/" element={<Home popup={popup} setPopup={setPopup} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/drawer" element={<emporaryDrawer />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
