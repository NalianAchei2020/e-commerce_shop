import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  wishlist: localStorage.getItem('wishList')
    ? JSON.parse(localStorage.getItem('wishList'))
    : [],
  product: [],
  isLoading: false,
  error: null,
  loginError: '',
  registerError: '',
  isLogin: false,
  username: localStorage.getItem('username')
    ? JSON.parse(localStorage.getItem('username'))
    : [],
  orders: localStorage.getItem('orders')
    ? JSON.parse(localStorage.getItem('orders'))
    : [],
  message: '',
};

const baseURL = 'http://localhost:8000';

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async () => {
    try {
      const response = await axios.get(`${baseURL}/api/products`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch product data');
    }
  }
);

// product views
export const viewProduct = createAsyncThunk(
  'products/views',
  async (productID) => {
    try {
      await axios.post(`${baseURL}/api/views/product/view`, {
        id: productID,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const leaveProduct = createAsyncThunk('products/leave', async () => {
  try {
    await axios.post(`${baseURL}/api/views/product/leave`);
  } catch (error) {
    throw new Error(error);
  }
});

// register
export const registerUser = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'POST',
        url: `${baseURL}/api/auth/register`,
        headers: {
          contentType: 'application/json',
        },
        withCredentials: true,
        data: data,
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return { message: error.response.data.message };
      } else {
        return rejectWithValue({
          message:
            'Registration failed due to a server error. Please try again later.',
        });
      }
    }
  }
);
export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'POST',
        url: `${baseURL}/api/auth/login`,
        headers: {
          contentType: 'application/json',
        },
        withCredentials: true,
        data: data,
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return { message: 'user not found!' };
      } else if (error.response && error.response.status === 400) {
        return { message: 'Wrong username or password!' };
      } else {
        return rejectWithValue({
          message:
            'Registration failed due to a server error. Please try again later.',
        });
      }
    }
  }
);
export const createOrder = createAsyncThunk('order/create', async (data) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${baseURL}/api/orders`,
      headers: {
        contentType: 'application/json',
      },
      withCredentials: true,
      data: data,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});
export const getUserOrder = createAsyncThunk('order/userOrder', async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/api/orders/mine`,
      headers: {
        contentType: 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});
export const updateUser = createAsyncThunk('user/update', async (data) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `${baseURL}/api/users/upddateuser`,
      headers: {
        contentType: 'application/json',
      },
      withCredentials: true,
      data: data,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existed = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (existed) {
        state.cart.forEach((product) => {
          if (product._id === action.payload._id) {
            product.quantity += 1;
          }
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
      return state;
    },
    removeFromCart: (state, action) => {
      const existed = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (existed) {
        state.cart = state.cart
          .map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
      return state;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload._id
      );
      localStorage.setItem('cart', JSON.stringify(state.cart));
      return state;
    },
    //wishlist
    addToWishlist: (state, action) => {
      const { id } = action.payload;
      const existed = state.wishlist.find((product) => product.id === id);

      if (!existed) {
        const updatedWishlist = [...state.wishlist, action.payload];
        localStorage.setItem('wishList', JSON.stringify(updatedWishlist));
        return { ...state, wishlist: updatedWishlist };
      } else {
        const updatedWishlist = state.wishlist.filter(
          (product) => product.id !== id
        );
        localStorage.setItem('wishList', JSON.stringify(updatedWishlist));
        return { ...state, wishlist: updatedWishlist };
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem('wishList', JSON.stringify(state.wishlist));
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
    //register
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.username = action.payload;
      localStorage.setItem('username', JSON.stringify(action.payload));
    });
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.registerError = action.payload.message;
    });
    //login in to system
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
      state.message = action.payload.message;
      state.username = action.payload;
      localStorage.setItem('username', JSON.stringify(action.payload));
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.loginError = action.payload.message;
    });
    //create order
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    });
    builder.addCase(createOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.loginError = action.error.message;
    });
    //Get user order
    builder.addCase(getUserOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    });
    builder.addCase(getUserOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.loginError = action.error.message;
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  removeItem,
  addToWishlist,
  removeFromWishlist,
} = productsSlice.actions;
export default productsSlice.reducer;
