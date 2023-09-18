const initialState = {
  cart: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducer: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
