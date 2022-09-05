import React from 'react'
import { Container } from  'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper";

const offersImgs = [
  '/features/offer-1.png',
  '/features/offer-2.png',
  '/features/offer-3.png',
  '/features/offer-4.png',
  '/features/offer-5.png'
]
const Offers = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        }}
        className="mySwiper features"
      >
        {
          offersImgs.map((img, idx) => {
            return (
              <SwiperSlide key={idx}><img src={img} alt='offer' /></SwiperSlide>
            )
          })
        }
      </Swiper>
    </Container>
  )
}

export default Offers