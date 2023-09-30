import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton, Drawer } from '@mui/material';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Confetti from 'react-confetti';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PercentIcon from '@mui/icons-material/Percent';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { Tooltip } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import SelectCountry from './select';

import {
  addToCart,
  removeFromCart,
  removeItem,
} from '../../redux/productSlice';

function ShoppingCart({ popup, handleClosePopup, handleRouteToCart }) {
  const form = useForm();
  const { register } = form;
  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  //alert
  const [open, setOpen] = useState(true);
  //tabs
  const [openTab, setOpenTab] = useState(null);
  const habdleTab = (value) => {
    setOpenTab(value);
  };
  const handleCloseTab = () => {
    setOpenTab(null);
  };
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
  return (
    <Drawer anchor="right" open={popup} onClose={handleClosePopup}>
      <Box spacing={2} role="presentation">
        <section
          className={popup ? 'perviewCart-container' : 'null'}
          ref={popupRef}
        >
          <div className="previewCart-title d-flex flex-row justify-content-between gap-4">
            <h3>Shopping Cart</h3>
            <ClearIcon
              className="previewCart-icon"
              onClick={handleClosePopup}
            />
          </div>
          <section>
            {cart.length
              ? cart.map((item) => (
                  <div key={item.id} className="previewCart">
                    <div className="previewCart-image">
                      <img
                        src={item.image}
                        alt="cartImage"
                        width={120}
                        height={100}
                      />
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
                      variant="filled"
                      severity="success"
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
                      sx={{ mb: 2, backgroundColor: '#1976d2' }}
                    >
                      Congratulations you got free shipping!
                    </Alert>
                  </Collapse>
                </Box>
              ) : (
                <div>
                  <div className="progress-bar-container">
                    <div className="Progress-Bar">
                      <div
                        className="Progress"
                        style={{
                          width: `${(currentValue / freeShippingValue) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div className="progress-bar-text">
                      {balance} FCFA more to get free shipping
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="tabs-container">
              <ul className="d-flex flex-row justify-content-between  gap-4 tab-list">
                <li>
                  <Tooltip title="Add Note" placement="top">
                    <NoteAltIcon
                      onClick={() => habdleTab('addNote')}
                      sx={{ fontSize: '1.8em' }}
                    />
                  </Tooltip>
                </li>
                <li className="v-line"></li>
                <li>
                  <Tooltip title="Add Coupon" placement="top">
                    <PercentIcon
                      onClick={() => habdleTab('percent')}
                      sx={{ fontSize: '1.8em' }}
                    />
                  </Tooltip>
                </li>
                <li className="v-line"></li>
                <li>
                  <Tooltip title="Estimate Shipping" placement="top">
                    <AirportShuttleIcon
                      onClick={() => habdleTab('shipping')}
                      sx={{ fontSize: '1.8em' }}
                    />
                  </Tooltip>
                </li>
              </ul>
              <div>
                {openTab === 'addNote' && (
                  <div>
                    <h5>Note</h5>
                    <TextField
                      variant="outlined"
                      type="text"
                      name="note"
                      label="Write a note"
                      multiline
                      rows={3}
                      {...register('description')}
                      sx={{ width: '100%' }}
                    />
                    <div className="d-flex flex-row justify-content-between mb-5">
                      <button className="save-btn checkout-btn">Save</button>
                      <button
                        className="cancel-btn btn-best"
                        onClick={handleCloseTab}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
                {openTab === 'percent' && (
                  <div>
                    <h5>Add A Coupon</h5>
                    <TextField
                      type="text"
                      label="Coupon Code"
                      sx={{ width: '100%' }}
                      name="description"
                      {...register('description')}
                    />
                    <div className="d-flex flex-row justify-content-between mb-5">
                      <button className="save-btn checkout-btn">Save</button>
                      <button
                        className="cancel-btn btn-best"
                        onClick={handleCloseTab}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
                {openTab === 'shipping' && (
                  <div>
                    <h5>Get shipping estimates</h5>
                    <SelectCountry />
                    <div className="d-flex flex-row gap-4 mt-3">
                      <TextField
                        type="text"
                        label="Zip Code"
                        //sx={{ width: '100%' }}
                        name="description"
                        {...register('description')}
                      />
                      <TextField
                        type="text"
                        label="City"
                        //sx={{ width: '100%' }}
                        name="description"
                        {...register('description')}
                      />
                    </div>
                    <div className="d-flex flex-row justify-content-between mb-5">
                      <button className="save-btn checkout-btn">Save</button>
                      <button
                        className="cancel-btn btn-best"
                        onClick={handleCloseTab}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
              <button
                className="viewCart-btn btn-best "
                onClick={handleRouteToCart}
              >
                View Cart
              </button>
            </div>
          </section>
        </section>
      </Box>
    </Drawer>
  );
}

export default ShoppingCart;
