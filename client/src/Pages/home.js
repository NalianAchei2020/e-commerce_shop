import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/productSlice';
import Slider from '../Components/home/image-slider';
import BestSeller from '../Components/home/bestSeller';
import CallToAction from '../Components/home/callToAction';
import FeaturedProducts from '../Components/home/featuredProducts';
import NewArrivals from '../Components/home/newArrivals';
import FashionNews from '../Components/home/fashionNews';
import Instagram from '../Components/home/instagram';

//import Header from '../Components/header/header';
function Home({ setPopup }) {
  const dispatch = useDispatch();

  //const [popup, setPopup] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setPopup(true);
  };
  return (
    <section className="slider-container">
      <section>
        <Slider />
      </section>
      <section className="hero-sec2">
        <div className="best-card card">
          <div className="hero-beastSeller">
            <img src="Images/banner/best-img.png" alt="best-seller" />
            <div className="best-text">
              <h1>Best Seller</h1>
              <button className="btn-best">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="best-card card">
          <div className="hero-beastSeller">
            <img src="Images/banner/images.png" alt="best-seller2" />
            <div className="best-text">
              <h1>New Arrivals</h1>
              <button className="btn-best">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
      {/*beastSeller */}
      <BestSeller handleAddToCart={handleAddToCart} />
      {/* call to action */}
      <CallToAction />
      {/* featured products */}
      <FeaturedProducts handleAddToCart={handleAddToCart} />
      {/* New arrivals products */}
      <NewArrivals handleAddToCart={handleAddToCart} />
      {/* Fashion news */}
      <FashionNews />
      {/* Instagram post */}
      <Instagram />
      {/* Preview ShoppingCart post */}
    </section>
  );
}

export default Home;
