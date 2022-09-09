import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import Header from '../components/header/Header'
import Offers from '../components/Sliders/offers/Offers'
import ProductsSection from '../components/products/ProductsSection';
import { allProducts , categories} from '../helpers/lib/slices/productsSlice'


const Home = () => {
const dispatch = useDispatch()
  const { Categories } = useSelector(state => state.products)
  console.log(Categories);
  useEffect(() => {
    try {
      axios.get('https://dummyjson.com/products?&limit=100').then(
        res => {
          dispatch(allProducts(res.data.products))
          const groupByCategory = res.data.products.reduce((group, product) => {
            const { category } = product;
            group[category] = group[category] ?? [];
            group[category].push(product);
            return group;
          }, {});
          dispatch(categories(groupByCategory))
        }
      )
    } catch (error) {
      console.log("Oops error...", error);
    }

  }, [dispatch])

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