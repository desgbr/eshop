import React  from 'react'
import axios from 'axios'
import ListProducts from './ListProducts'
import Features from'./Features'
import Slider from './Slider'
import { useState } from 'react'
import { useEffect } from 'react'
function Home() {
  const [products , setProducts] = useState([])
  const [cart , setCart ] = useState([])
  const [productsGroup , setProductsGroup] = useState([])
  useEffect(() =>{
  try{
  axios.get('https://dummyjson.com/products?&limit=100')
  .then(res =>{
  console.log(res.data)
  setProducts(res.data.products)
  const groupByCategory = res.data.products.reduce((group , product) =>{
  const{category} = product
  group [category] = group[category] ?? []
  group[category].push(product)
return group
  }, {})
  setProductsGroup(groupByCategory)
  })
  }catch(error){
  console.log(error , 'Error...')
  }
  },[])
return (
<>
<Features />
<Slider/>
<div className="home d-flex">
  <div className="productContainer">

{products.map((prod ) =>(
<ListProducts key={prod.id} product={prod} cart={cart} setCart={setCart} />

)) }
  </div>
</div>
</>
  )
}

export default Home