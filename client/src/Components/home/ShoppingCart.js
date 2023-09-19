import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import {
  addToCart,
  removeFromCart,
  removeItem,
} from '../../redux/productSlice';

function ShoppingCart({ popup, handleClosePopup }) {
  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();

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
                  <ul className="d-flex flex-row gap-5 previewCart-list">
                    <li>
                      <RemoveIcon
                        onClick={() => handleDeleteItem(item)}
                        className="previewCart-icon"
                      />
                    </li>
                    <li className="qty">{item.quantity}</li>
                    <li>
                      <AddIcon
                        onClick={() => handleAddToCart(item)}
                        className="previewCart-icon"
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
        <ul className="d-flex flex-row justify-content-between mt-4">
          <li>
            {' '}
            <h5>Sub Total</h5>
          </li>
          <li className="fs-20">
            {cart.reduce((a, c) => a + c.quantity, 0)} Items:{' '}
            {cart.reduce((a, c) => a + c.price * c.quantity, 0)} FCFA
          </li>
        </ul>
      </section>
    </section>
  );
}

export default ShoppingCart;
