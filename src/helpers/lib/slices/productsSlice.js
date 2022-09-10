import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getProducts = createAsyncThunk('products/getProducts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const apiReq = await axios.get('https://dummyjson.com/products?&limit=100')
      return apiReq.data.products
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState = {
  Allproducts: [],
  cart: [],
  Categories: {},
  favorite: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    allProducts: (state, action) => {
      state.Allproducts = action.payload
    },
    categories: (state, action) => {
      state.Categories = action.payload
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) =>{
      console.log(action);
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log(action);
      state.Allproducts = action.payload
      state.categories = action.payload.reduce((group, product) => {
        const { category } = product;
        group[category] = group[category] ?? [];
        group[category].push(product);
        return group;
      }, {})

    },
    [getProducts.rejected]: (state, action) => {
      console.log(action);
    },
  }
})

export const { allProducts, categories } = productsSlice.actions
export default productsSlice.reducer