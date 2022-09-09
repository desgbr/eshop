import {Routes, Route} from 'react-router-dom'
import Footer from './layout/footer/Footer';
import Navbar from './layout/navbar/Navbar'
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Faq from './pages/Faq';
import ProductsDetails from './pages/ProductsDetails';
import Shop from './pages/Shop';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Home />} />
        <Route path='/search/:title' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<Wishlist />} />
        <Route path='/product/:id' element={<ProductsDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
