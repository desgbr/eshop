import React from 'react'
import { Container } from 'react-bootstrap'
import { BiCategory } from 'react-icons/bi'
import ProductCard from './ProductCard'
import Slider from "react-slick";

const RelatedProducts = ({ products }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container>
      <h3 className="mt-4 productContainer" style={{ color: '#1F2937' }}> <BiCategory color='#009F7F' /> Related Products</h3>
      <Slider {...settings}>
        {
          products?.length > 0 ? products?.map(product => {
            return (

              <div className='category-slide' key={product?.id} ><ProductCard {...product} /></div>
            )
          }) : <p className="lead text-center text-danger">Sorry we don't have any products right now, Try again later.</p>
        }

      </Slider>
      <hr />
    </Container>
  )
}

export default RelatedProducts