import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Confetti from 'react-confetti';
import ProgressBar from '@ramonak/react-progress-bar';
import {
  addToCart,
  removeFromCart,
  removeItem,
} from '../../redux/productSlice';

function ShoppingCart({ popup, handleClosePopup }) {
  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  //free shipping
  const freeShippingValue = 200000;
  const currentValue = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  const balance = freeShippingValue - currentValue;

  const popupRef = useRef(null);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDeleteItem = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleDeleteItem2 = (item) => {
    dispatch(removeItem(item));
  };
  //close the popup container when the cursor is clicked outside of it
  /*useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup();
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);*/
  return (
    <section
      className={popup ? 'perviewCart-container' : 'null'}
      ref={popupRef}
    >
      <div className="previewCart-title d-flex flex-row justify-content-between gap-4">
        <h3>Shopping Cart</h3>
        <ClearIcon className="previewCart-icon" onClick={handleClosePopup} />
      </div>
      <section>
        {cart.length
          ? cart.map((item) => (
              <div key={item.id} className="previewCart">
                <div className="previewCart-image">
                  <img src={item.image} alt="cartImage" />
                </div>
                <div className="previewCart-details">
                  <h5>{item.name}</h5>
                  <span>{item.price} FCFA </span>
                  <ul className="d-flex flex-row gap-3 justify-content-center align-center previewCart-list">
                    <li>
                      <RemoveIcon
                        onClick={() => handleDeleteItem(item)}
                        className="previewCart-icon"
                        style={{ fontSize: '16px' }}
                      />
                    </li>
                    <li className="qty">{item.quantity}</li>
                    <li>
                      <AddIcon
                        onClick={() => handleAddToCart(item)}
                        className="previewCart-icon"
                        style={{ fontSize: '16px' }}
                      />
                    </li>
                  </ul>
                  <div className="delete">
                    <DeleteIcon
                      onClick={() => handleDeleteItem2(item)}
                      className="previewCart-icon"
                    />
                  </div>
                </div>
              </div>
            ))
          : null}
        <div className="mt-4">
          {currentValue >= freeShippingValue ? (
            <Box sx={{ width: '100%' }}>
              <Collapse in={open}>
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                />
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Congratulations you got free shipping!
                </Alert>
              </Collapse>
            </Box>
          ) : (
            <div>
              <div class="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${(currentValue / freeShippingValue) * 100}%`,
                    backgroundColor:
                      currentValue < freeShippingValue ? '#1976d2' : 'red',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '1em',
                  }}
                  aria-valuenow={currentValue}
                  aria-valuemin="0"
                  aria-valuemax={freeShippingValue}
                >
                  <span> {balance} FCFA more to get free shipping</span>
                </div>
              </div>
              <ProgressBar
                completed={80}
                customLabel={`${balance} FCFA more to get free shipping`}
                labelSize="10px"
                labelAlignment="center"
                width="100%"
              />
            </div>
          )}
        </div>
        <ul className="d-flex flex-row justify-content-between mt-4">
          <li>
            {' '}
            <h5>Sub Total</h5>
          </li>
          <li className="cart-price">
            {cart.reduce((a, c) => a + c.quantity, 0)} Items:{' '}
            {cart.reduce((a, c) => a + c.price * c.quantity, 0)} FCFA
          </li>
        </ul>
        <div className="btn-cart d-flex flex-column gap-4 mt-4 ">
          <button className="checkout-btn">Checkout Now</button>
          <button className="viewCart-btn btn-best ">View Cart</button>
        </div>
      </section>
    </section>
  );
}

export default ShoppingCart;
