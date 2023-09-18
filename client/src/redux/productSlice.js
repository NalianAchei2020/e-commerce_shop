import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: [],
  product: [],
  isLoading: false,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/products');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch product data');
    }
  }
);
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existed = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existed) {
        state.cart.forEach((product) => {
          if (product.id === action.payload.id) {
            product.quantity += 1;
          }
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      return state;
    },
    removeFromCart: (state, action) => {
      const existed = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existed === 1) {
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
      } else {
        state.cart.map((item) =>
          item.id === action.payload.id ? (item.quantity -= 1) : item
        );
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { addToCart, removeFromCart, removeItem } = productsSlice.actions;
export default productsSlice.reducer;
