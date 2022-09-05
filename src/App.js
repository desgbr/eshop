import React from 'react'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Products from './Comonents/Products/Products'
import Header from './Comonents/Header'
import ProductDetails from './Comonents/Products/ProductDetails'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import Footer from './Comonents/Footer';
import CartList from './Pages/Cart/CartList';
function App() {
    return (
      <>

 <Header/>
<Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products />}/>  
      <Route path='/productdetails' element={<ProductDetails/>}/>
      <Route path ='/contact' elemet={<Contact />} />
      <Route path ='/cartlist' elemet={<CartList />} />
      <Route path ='*' element={<NotFound/>}/>
     </Routes> 
     
<Footer/>
    </>
      )
}
export default App
