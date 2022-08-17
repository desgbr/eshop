import React, { useContext } from 'react'
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
// import {useSelector} from 'rect-redux'
// export const DataContext = useContext()
function App() {
    return (
      <>

 <Header/>
<Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<ListProducts />}/>  
      <Route path='/productDetails/:id' element={<ViewProductDetails/>}/>
      <Route path='/craete' element={<CraeteProducts/>}/>  
      <Route path ='/contact' elemet={<Contact />} />
      <Route path ='*' element={<NotFound/>}/>
     </Routes> 
     
<Footer/>
    </>
      )
}
export default App
