import React from 'react'
import '../Styles/Slider.css'
import Offer1 from '../imgs/offer-1.png'
import Offer2 from '../imgs/offer-2.png'
import Offer3 from '../imgs/offer-3.png'
import Offer4 from '../imgs/offer-4.png'
import Offer5 from '../imgs/offer-5.png'
import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
  return (
    <Carousel className='container d-flex   p-3'>
      <Carousel.Item i>
        <img src= {Offer1}  alt="First slide" />
        <img src= {Offer2}  alt="Second slide" />
        <img  src= {Offer3}alt="Third slide"/>
        <img  src= {Offer4}  alt="Third slide" />
       <img src= {Offer5} alt="Third slide"   />
      </Carousel.Item>
      <Carousel.Item >
         <img src= {Offer1}  alt="First slide" />
        <img src= {Offer2}  alt="Second slide" />
        <img  src= {Offer3}alt="Third slide"/>
        <img  src= {Offer4}  alt="Third slide" />
       <img src= {Offer5} alt="Third slide"   />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider