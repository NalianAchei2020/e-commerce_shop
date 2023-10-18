import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { useMediaQuery } from 'react-responsive';
import { Image } from 'cloudinary-react';

function Trending({ handleAddToCart }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; // Define the number of items to display per page
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Check if the screen is mobile

  const { product } = useSelector((state) => state.product);

  const trending = product.filter((item) => item.trending === true);
  if (product.isLoading) {
    return <p>...Loading</p>;
  }

  // Calculate pagination related variables
  const totalItems = trending.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = trending.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <section className="best-seller container-fluid">
      <section className="women">
        <div className="row-container2">
          {currentItems.map((item) => (
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
            </div>
          ))}
        </div>
        {isMobile && (
          <Pagination
            count={totalPages}
            page={page}
            color="primary"
            onChange={handlePageChange}
            sx={{ marginTop: '1em' }}
          />
        )}
      </section>
    </section>
  );
}

export default Trending;
