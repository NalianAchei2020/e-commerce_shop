import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Product() {
  const { slug } = useParams();

  const { product } = useSelector((state) => state.product);
  const selectedProduct = product.find((item) => item.name === slug);

  return (
    <section>
      <h1>Product</h1>
      <div className="description-container">
        <div className="description-image">
          <img src={selectedProduct.image} alt="desImage" />
        </div>
        <div className="des-text">
          <h2>{selectedProduct.name}</h2>
        </div>
      </div>
    </section>
  );
}

export default Product;
