import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  Allproducts:[],
  cart:[],
  Categories:{},
  favorite:[],
}
const productsSlice = createSlice({
  name:'products',
  initialState,
  reducers:{
    allProducts:(state,action)=>{
      state.Allproducts = action.payload
    },
    categories:(state,action)=>{
      state.Categories = action.payload
    },
  },
  extraReducers:{

  }
})

export const { allProducts, categories } = productsSlice.actions
export default productsSlice.reducer