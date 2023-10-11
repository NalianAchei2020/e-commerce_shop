import React from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/productSlice';

function Wishlist({ handleAddToCart, wishList }) {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.product);
  const handleWishlist = (item) => {
    dispatch(addToWishlist(item));
  };
  return (
    <section>
      <div className="cart-heading3 d-flex flex-row gap-4 mb-3">
        <Link to="/" className="cart-text des-text-link">
          Home
        </Link>
        <div className="cart-text">
          <NavigateNextIcon />
        </div>
        <div>
          <span>Wishlist</span>
        </div>
      </div>
      <section className="container-fluid">
        {wishlist.length === 0 ? (
          <p>No data found</p>
        ) : (
          <div className="row-container">
            {wishlist.map((item) => (
              <div className="card-container" key={item.id}>
                <div className="card">
                  <div className="card-image">
                    <Link to={`/product/${item.name}`} className="product-link">
                      <img src={item.image} alt={item.name} />
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
                          onClick={handleWishlist(item)}
                        >
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
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}

export default Wishlist;
