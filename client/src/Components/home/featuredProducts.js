import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import CarouselProduct from './carousel';

function FeaturedProducts() {
  const { product } = useSelector((state) => state.product);
  const featuredProducts = product.filter((item) => item.featured === true);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const products = featuredProducts.map((item) => (
    <div key={item.id}>
      <CarouselProduct
        image={item.image}
        brand={item.brand}
        name={item.name}
        price={item.price}
        rating={item.rating}
        numReview={item.numReview}
        alt={item.name}
      />
    </div>
  ));
  return (
    <section className="container-fluid feature">
      <h1 className="text-center fw-bold mt-5 mb-4">Featured Collection</h1>
      <h6 className="text2">Top Highlight this season</h6>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {products}
      </Carousel>
    </section>
  );
}

export default FeaturedProducts;
