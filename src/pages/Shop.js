import React from 'react'
import ProductCard from '../components/products/ProductCard'
import Header from '../components/header/Header'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
const Shop = () => {
  const {title} = useParams()
  const { Allproducts } = useSelector(state => state.products)
  const products = Allproducts.filter(product => product.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
  console.log('Allproducts', products)
  return (
<>
      <Header/>
      <Container>
        <div className='search-grid my-5'>
          {
            products?.length > 0 ? products?.map(product => {
              return (

                <div key={product?.id} ><ProductCard {...product} /></div>
              )
            }) : <p className="lead text-center text-danger">Sorry we don't have any products right now, Try again later.</p>
          }
        </div>
      </Container>
</>
  )
}

export default Shop