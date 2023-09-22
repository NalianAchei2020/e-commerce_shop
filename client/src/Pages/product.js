import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Product() {
  const [usersCount, setUsersCount] = useState(0);
  const { slug } = useParams();

  const { product } = useSelector((state) => state.product);
  const selectedProduct = product.find((item) => item.name === slug);
  console.log(selectedProduct);
  const productID = selectedProduct ? selectedProduct.id : 'error';

  useEffect(() => {
    const viewProduct = async () => {
      try {
        await axios.post('http://localhost:8000/api/views/product/view', {
          id: productID,
        });
      } catch (error) {
        console.log(error);
      }
    };

    const leaveProduct = async () => {
      try {
        await axios.post('http://localhost:8000/api/views/product/leave');
      } catch (error) {
        console.log(error);
      }
    };

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

    viewProduct();
    getCount();

    return () => {
      leaveProduct();
    };
  }, [productID]);

  return (
    <section>
      <h1>Product</h1>
      <div className="description-container">
        <div className="description-image">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>
        <div className="des-text">
          <h2>{selectedProduct.name}</h2>
          <h3>views: {usersCount}</h3>
        </div>
      </div>
    </section>
  );
}

export default Product;
