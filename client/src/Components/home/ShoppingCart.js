import { useSelector, useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  addToCart,
  removeFromCart,
  removeItem,
} from '../../redux/productSlice';
function ShoppingCart() {
  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();
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
    <section className="perviewCart-container">
      <h3>Shopping Cart</h3>
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
                  <ul className="d-flex flex-row gap-4">
                    <li>
                      <RemoveIcon onClick={() => handleDeleteItem(item)} />
                    </li>
                    <li>{item.quantity}</li>
                    <li>
                      <AddIcon onClick={() => handleAddToCart(item)} />
                    </li>
                  </ul>
                  <div className="delete">
                    <DeleteIcon onClick={() => handleDeleteItem2(item)} />
                  </div>
                </div>
              </div>
            ))
          : null}
      </section>
    </section>
  );
}

export default ShoppingCart;
