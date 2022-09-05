import React from 'react'
import { Container } from 'react-bootstrap'
import { BiCategory } from 'react-icons/bi'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from "swiper/react";

const ProductsSection = ({data}) => {
  const [catagory, products] = data
  console.log(catagory, products );
  return (
    <Container>
      <h3 className="mt-4" style={{ color:'#1F2937'}}> <BiCategory color='#009F7F' /> {catagory}</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1170: {
            slidesPerView: 5,
            spaceBetween: 20,
          }
        }}
        className="mySwiper mb-3"
      >
      {
        products ? products.map(product =>{
          return(

            <SwiperSlide key={product.id} ><ProductCard {...product} /></SwiperSlide>
          )
        }) : <p className="lead text-center text-danger">Sorry we don't have any products right now, Try again later.</p>
      }

      </Swiper>
      <hr/>
    </Container>
  )
}

export default ProductsSection