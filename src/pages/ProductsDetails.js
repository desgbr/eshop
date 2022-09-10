import React from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import RelatedProducts from '../components/products/RelatedProducts'
import { BsCart4 } from 'react-icons/bs'
import Slider from 'react-slick'


const ProductsDetails = () => {
  const {id} = useParams()
  const productData = useSelector(state => state.products.Allproducts.find(product => product.id === +id))
  const relatedProducts = useSelector(state => state.products.Allproducts.filter(product => product.category === productData.category))
  console.log(relatedProducts)
  console.log(id);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };
  return (
    <Container className='my-5'>

      {
        productData ?
          <Row>

            <Col md='6'>
              <Slider {...settings}>
              {
                productData.images.map((slideImg, idx) =>{
                  return(
                    <div key={idx}>
                      <img className='mx-auto text-center' style={{maxHeight:'400px'}} src={slideImg} alt={productData?.title} />
                    </div>
                    )
                })
              }

            </Slider>
            </Col>
            <Col md='6'>
              <h4>{productData?.title}</h4>
              <div className='mb-2'>
                <Badge bg="warning" text="dark">
                {productData?.brand}
                </Badge>
              </div>
              <Rating
                readonly={true}
                size={24}
                initialValue={productData?.rating}
              />
              <p className='lead my-4'>
                {productData?.description}
              </p>
              <div className="price">
                <h5>{productData?.price * 19}<span className='fs-6'> L.E</span></h5>
                <button className='btn btn-warning mt-3'><BsCart4 /> add to cart</button>
              </div>
            </Col>

          <Col className='my-5 py-3'>
            <RelatedProducts products={relatedProducts?.filter(p => p.id !== +id)} />
          </Col>
          </Row>
          :
          <h1 className='text-secondary text-center my-5'>Oops..! | No data to show</h1>
      }


    </Container>
  )
}

export default ProductsDetails