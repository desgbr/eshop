import React, { useContext , useState } from 'react'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Comonents/Header'
import ListProducts from './Pages/ListProducts'
import CraeteProducts from './Pages/CreateProducts'
import ViewProductDetails from './Pages/ViewProductDetails'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import Footer from './Comonents/Footer';
import CartList from './Pages/CartList';
// import {useSelector} from 'rect-redux'
// export const DataContext = useContext()
function App() {
  const [count , setCount] =useState(0)

    return (
      <>

 <Header count={count} />
<Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<ListProducts />}/>  
      <Route path='/productdetails' element={<ViewProductDetails/>}/>
      <Route path='/craete' element={<CraeteProducts/>}/>  
      <Route path ='/contact' elemet={<Contact />} />
      <Route path ='/cartlist' elemet={<CartList />} />
      <Route path ='*' element={<NotFound/>}/>
     </Routes> 
     
<Footer/>
    </>
      )
}
export default App
