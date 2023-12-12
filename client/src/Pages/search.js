import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Image } from 'cloudinary-react';
import { fetchProduct } from '../redux/productSlice';

function Search({ handleAddToCart, handleWishlist, isItemInWishlist }) {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.product);
  const { product } = useSelector((state) => state.product);
  const filteredData = product.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <section className="container-fluid">
      <div className="cart-heading3 d-flex flex-row gap-4 mb-3">
        <Link to="/" className="cart-text des-text-link">
          Home
        </Link>
        <div className="cart-text">
          <NavigateNextIcon />
        </div>
        <div>
          <span>Result</span>
        </div>
      </div>
      <div className="row-container">
        {filteredData.length
          ? filteredData.map((item) => (
              <div className="card-container" key={item._id}>
                <div className="card">
                  <div className="card-image">
                    <Link to={`/product/${item.name}`} className="product-link">
                      <Image
                        cloudName="sali-touch"
                        publicId={item.image.public_id}
                      />
                    </Link>
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
                        onClick={() => handleAddToCart(item)}
                      >
                        ADD TO CARD
                      </Button>
                      <Tooltip title="Wishlist" placement="bottom">
                        <IconButton
                          className="whistlist"
                          onClick={() => handleWishlist(item)}
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
            ))
          : null}
      </div>
    </section>
  );
}

export default Search;
