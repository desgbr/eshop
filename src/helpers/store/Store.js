import {configureStore} from '@reduxjs/toolkit'
import productsSlice from '../lib/slices/productsSlice'
const store = configureStore({
  reducer:{
    products: productsSlice
  }
})

export default store