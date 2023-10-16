import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';

function BestSeller({ handleAddToCart, handleWishlist, wishList }) {
  const [section, setSection] = useState('bestSeller-men');
  const { product } = useSelector((state) => state.product);

  const bestSeller = product.filter(
    (item) => item.bestSeller === true && item.category === 'women'
  );
  const bestSellermen = product.filter(
    (item) => item.bestSeller === true && item.category === 'men'
  );
  const trending = product.filter((item) => item.trending === true);
  const handleSection = (selected) => {
    setSection(selected);
  };

  if (product.isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <section className="best-seller container-fluid">
      <h1 className="text-center fw-bold mt-5 mb-4">Best Seller</h1>
      <div className="nav-bar">
        <Link
          className={section === 'bestSeller-men' ? 'active' : 'link'}
          onClick={() => handleSection('bestSeller-men')}
        >
          Men
        </Link>
        <Link
          className={section === 'bestSeller-women' ? 'active' : 'link'}
          onClick={() => handleSection('bestSeller-women')}
        >
          Women
        </Link>
        <Link
          className={section === 'bestSeller-trending' ? 'active' : 'link'}
          onClick={() => handleSection('bestSeller-trending')}
        >
          Trending
        </Link>
      </div>
      {section === 'bestSeller-women' && (
        <section className="women">
          <div className="row-container">
            {bestSeller.map((item) => (
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
                            sx={{ color: wishList ? 'red' : null }}
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
            ))}
          </div>
          <br />
          <div className="seeMore-container">
            <Button
              variant="contained"
              color="primary"
              className="btn-slider see-more"
            >
              SEE MORE
            </Button>
          </div>
        </section>
      )}
      {section === 'bestSeller-men' && (
        <section className="men">
          <div className="row-container">
            {bestSellermen.map((item) => (
              <div className="card-container" key={item.id}>
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
                            sx={{ color: wishList ? 'red' : null }}
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
            ))}
          </div>
          <br />
          <div className="seeMore-container">
            <Button
              variant="contained"
              color="primary"
              className="btn-slider see-more"
            >
              SEE MORE
            </Button>
          </div>
        </section>
      )}
      {section === 'bestSeller-trending' && (
        <section className="trending">
          <div className="row-container">
            {trending.map((item) => (
              <div className="card-container" key={item.id}>
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
                            sx={{ color: wishList ? 'red' : null }}
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
            ))}
          </div>
          <br />
          <div className="seeMore-container">
            <Button
              variant="contained"
              color="primary"
              className="btn-slider see-more"
            >
              SEE MORE
            </Button>
          </div>
        </section>
      )}
    </section>
  );
}

export default BestSeller;
