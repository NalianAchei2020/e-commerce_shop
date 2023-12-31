import React from 'react';
import { Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/productSlice';

function MayLikeProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.product);
  const newArrival = product.filter((item) => item.newArrival === true);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleView = (itemName) => {
    navigate(`/product/${itemName}`);
  };
  return (
    <section className=" mt-5">
      <h1 className="text-center fw-bold mt-5 mb-4">You may also like</h1>
      <div className="row-container">
        {newArrival.map((item) => (
          <div className="card-container" key={item.id}>
            <a href={`/product/${item.name}`} className="product-link">
              <div className="card">
                <div className="card-image">
                  <Image
                    cloudName="sali-touch"
                    publicId={item.image.public_id}
                  />
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
                  <div className="bttons">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        handleAddToCart(item);
                      }}
                    >
                      ADD TO CARD
                    </Button>
                    <Tooltip title="Wishlist" placement="bottom">
                      <IconButton className="whistlist">
                        <FavoriteIcon className="whistlist" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Quick View" placement="bottom">
                      <IconButton
                        className="whistlist"
                        onClick={() => handleView(item.name)}
                      >
                        <VisibilityIcon className="whistlist" />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <br />
    </section>
  );
}

export default MayLikeProduct;
