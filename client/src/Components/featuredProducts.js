import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from '../data';
import CarouselProduct from './carousel';

function FeaturedProducts() {
  const products = data.product;
  const featuredProducts = products.filter((product) => product.featured);

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

  const product = featuredProducts.map((item) => (
    <CarouselProduct
      image={item.image}
      brand={item.brand}
      name={item.name}
      price={item.price}
      rating={item.rating}
      numReview={item.numReview}
      alt={item.name}
      key={item.id}
    />
  ));
  return (
    <section className="container-fluid">
      <h1 className="text-center fw-bold mt-5 mb-4">Featured Collection</h1>
      <h6>Top Highlight this season</h6>
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
        {product}
      </Carousel>
    </section>
  );
}

export default FeaturedProducts;
