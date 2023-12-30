import React from 'react';
import { Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';

function NewArrivals({ handleAddToCart, handleWishlist, isItemInWishlist }) {
  const { product } = useSelector((state) => state.product);
  const newArrival = product.filter((item) => item.newArrival === true);
  const navigate = useNavigate();
  return (
    <section className="container-fluid mt-5">
      <h1 className="text-center fw-bold mt-5 mb-4">New Arrivals</h1>
      <div className="row-container">
        {newArrival.map((item) => (
          <div className="card-container" key={item._id}>
            <Link to={`/product/${item.name}`} className="product-link">
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
                  <span className="text-center">${item.price}</span>
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
                      <IconButton
                        className="whistlist"
                        onClick={() => {
                          handleWishlist(item);
                        }}
                      >
                        <FavoriteIcon
                          className="whistlist"
                          sx={{
                            color: isItemInWishlist(item._id) ? 'red' : null,
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Quick View" placement="bottom">
                      <IconButton className="whistlist">
                        <VisibilityIcon className="whistlist" />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <br />
      <div className="seeMore-container">
        <Button
          variant="contained"
          color="primary"
          className="btn-slider see-more"
          onClick={() => {
            navigate('/shop');
          }}
        >
          SEE MORE
        </Button>
      </div>
    </section>
  );
}

export default NewArrivals;
