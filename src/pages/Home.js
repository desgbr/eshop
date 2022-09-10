import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Header from '../components/header/Header'
import Offers from '../components/Sliders/offers/Offers'
import ProductsSection from '../components/products/ProductsSection';
import { getProducts, categories } from '../helpers/lib/slices/productsSlice'


const Home = () => {
const dispatch = useDispatch()
  const { Categories, Allproducts } = useSelector(state => state.products)
  
  useEffect(() => {
    dispatch(getProducts())
    if (Allproducts) {
      const groupByCategory = Allproducts.reduce((group, product) => {
      const { category } = product;
            group[category] = group[category] ?? [];
            group[category].push(product);
            return group;
          }, {});
          dispatch(categories(groupByCategory))
}
  }, [Allproducts.length , dispatch])

  return (
    <div>
      <Header />
      <Offers />
      <div className="container">
        {
          Categories ? Object.entries(Categories).map(category => {
            return (
              <ProductsSection key={category[0]} data={category} />
            )
          }) : <p className="lead text-center text-danger">Sorry we don't have any products right now, Try again later.</p>
        }
      </div>
    </div>
  )
}

export default Home