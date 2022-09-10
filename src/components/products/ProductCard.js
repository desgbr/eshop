import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';



const ProductCard = (product) => {
  const navigate = useNavigate()
  const { id, title, price, description, category, thumbnail, rating } = product
  // const { id, title, price, description, category, image, rating: { rate, count } } = product
  return (
    <div key={id} className='product-card'>
      <div className="img">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="info">
        <h6 onClick={() => navigate(`../product/${id}`, { replace: true })} className='h6'>{title}</h6>
      <p>{description}</p>
      <div className="price">
          <h5>{price * 19}<span>L.E</span></h5>
          <button className='btn btn-warning'><BsCart4 /> add to cart</button>
      </div>
      </div>
      <div className="badges">
        <Badge pill className=" lead bg-success">{rating}</Badge>
        <Badge pill className="bg-danger">{category}</Badge>
        </div>
    </div>
  )
}

export default ProductCard