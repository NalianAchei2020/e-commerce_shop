import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { addToCart, removeFromCart } from '../redux/productSlice';

function Product() {
  const dispatch = useDispatch();
  const [usersCount, setUsersCount] = useState(0);
  const { slug } = useParams();

  const { product } = useSelector((state) => state.product);
  const selectedProduct = product.find((item) => item.name === slug);
  console.log(selectedProduct);
  const productID = selectedProduct ? selectedProduct.id : 'error';

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDeleteItem = (item) => {
    dispatch(removeFromCart(item));
  };

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
        await axios.post('http://localhost:8000/api/views/product/leave', {
          id: productID,
        });
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

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h1>Product</h1>
      <div className="description-container">
        <div className="description-image">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>
        <div className="des-text">
          <h2>{selectedProduct.name}</h2>
          <div className="d-flex flex-row gap-4">
            <IconButton>
              <VisibilityIcon
                sx={{ color: 'black', fontSize: '2rem', fontWeight: '800' }}
              />
            </IconButton>
            <h6 className="mt-3">{usersCount} views</h6>
          </div>
          <div className="d-flex flex-row gap-4">
            <ul className="d-flex flex-row gap-3 justify-content-center align-center previewCart-list">
              <li>
                <RemoveIcon
                  onClick={() => handleDeleteItem(selectedProduct)}
                  className="previewCart-icon"
                  style={{ fontSize: '16px' }}
                />
              </li>
              <li className="qty">{selectedProduct.quantity}</li>
              <li>
                <AddIcon
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="previewCart-icon"
                  style={{ fontSize: '16px' }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
