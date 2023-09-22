import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, IconButton } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

function CarouselProduct({
  image,
  brand,
  name,
  price,
  alt,
  numReview,
  rating,
}) {
  return (
    <div className="card-container">
      <Link to="/" className="product-link">
        <div className="card">
          <div className="card-image">
            <img src={image} alt={alt} />
          </div>
          <div className="card-body">
            <span>{brand}</span>
            <h5 className="card-title">{name}</h5>
            <span className="text-center">{price} FCFA</span>
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
              <Button variant="contained" color="primary">
                ADD TO CARD
              </Button>
              <Tooltip title="Wishlist" placement="bottom">
                <IconButton className="whistlist">
                  <FavoriteIcon className="whistlist" />
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
  );
}

export default CarouselProduct;
