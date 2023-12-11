import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, IconButton } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

function CarouselProduct({
  image,
  brand,
  name,
  price,
  alt,
  numReview,
  rating,
  item,
  handleAddToCart,
  handleWishlist,
  isItemInWishlist,
}) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <Link to={`/product/${name}`} className="product-link">
            <Image cloudName="sali-touch" publicId={image.public_id} />
          </Link>
        </div>
        <div className="card-body">
          <span>{brand}</span>
          <h5 className="card-title">{name}</h5>
          <span className="text-center">${price}</span>
          <Stack spacing={2}>
            <div className="rating">
              <Rating
                name="size-large"
                defaultValue={rating}
                precision={0.5}
                readOnly
              />
              <span>{numReview}</span>
            </div>
          </Stack>
          <br />
          <div className="bttons">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddToCart(item)}
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
    </div>
  );
}

export default CarouselProduct;
