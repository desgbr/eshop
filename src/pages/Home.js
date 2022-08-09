import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../components/header/Header'
import Offers from '../components/Sliders/offers/Offers'
import ProductsSection from '../components/products/ProductsSection';
const Home = () => {

  const [products, setProducts] = useState([])
  const [productsGroup, setProductsGroup] = useState([])
  useEffect(() => {
    try {
      axios.get('https://dummyjson.com/products?&limit=100').then(
        res => {
          setProducts(res.data.products)
          const groupByCategory = res.data.products.reduce((group, product) => {
            const { category } = product;
            group[category] = group[category] ?? [];
            group[category].push(product);
            return group;
          }, {});
          setProductsGroup(groupByCategory);
        }
      )
    } catch (error) {
      console.log("Oops error...", error);
    }

  }, [])
  console.log(products)

  return (
    <div>
      <Header />
      <Offers />
      <div className="container">
        {
          productsGroup ? Object.entries(productsGroup).map(category => {
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