import React from 'react'
import { Container } from  'react-bootstrap'
import Slider from "react-slick";


const offersImgs = [
  '/features/offer-1.png',
  '/features/offer-2.png',
  '/features/offer-3.png',
  '/features/offer-4.png',
  '/features/offer-5.png'
]
const Offers = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
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
      <Slider {...settings}>
        {
          offersImgs.map((img, idx) => {
            return (
              <div className='offers-slider' key={idx}><img src={img} alt='offer' /></div>
            )
          })
        }
      </Slider>
    </Container>
  )
}

export default Offers