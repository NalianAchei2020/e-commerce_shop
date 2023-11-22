import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';

const BestSeller = () => {
  const { product } = useSelector((state) => state.product);
  const bestSeller = product.filter((item) => item.bestSeller === true);
  const bestTwo = bestSeller.slice(0, 2);
  return (
    <div>
      <div className="product-bestSeller">
        {bestTwo.map((item) => (
          <div className="card-container" key={item._id}>
            <div className="card">
              <div className="card-image">
                <Link to={`/product/${item.name}`} className="product-link">
                  <Image
                    cloudName="sali-touch"
                    publicId={item.image.public_id}
                    className="desbest-imgae"
                  />
                </Link>
              </div>
              <div className="card-body">
                <span>{item.brand}</span>
                <h5 className="card-title">{item.name}</h5>
                <span className="text-center">{item.price} FCFA</span>
                <Stack spacing={2}>
                  <div className="rating">
                    <Rating
                      name="size-large"
                      defaultValue={item.rating}
                      precision={0.5}
                      readOnly
                    />
                    <span>{item.numReview} Reviews</span>
                  </div>
                </Stack>
                <br />
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default BestSeller;
