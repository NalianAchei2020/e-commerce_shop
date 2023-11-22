import React from 'react';
import { Snackbar } from '@mui/material';

const Message = ({ wishlist, wishMessage, setWishlist }) => {
  return (
    <Snackbar
      open={wishlist}
      autoHideDuration={1000}
      onClose={() => {
        setWishlist(false);
      }}
    >
      <div className={wishMessage ? 'element' : 'element2'}>{wishMessage}</div>
    </Snackbar>
  );
};

export default Message;
