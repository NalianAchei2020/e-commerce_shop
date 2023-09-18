import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Header from './Components/header/header';
import Upload from './Pages/upload';
import './Sass/index.scss';
import Footer from './Components/footer';
import Cart from './Pages/cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
        <Footer />
      </Router>
      <a href="/upload">Upload</a>
    </div>
  );
}

export default App;
