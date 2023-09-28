import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:slug" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
      <a href="/upload">Upload</a>
    </div>
  );
}

export default App;
