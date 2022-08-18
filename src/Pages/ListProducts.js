import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import{GiShoppingCart} from 'react-icons/gi'
function ListProducts({product }) {
return(
  <>
  <div className='card-item'>
  <Card style={{ width: '15rem', border:"none" }}>
  <div className="top-card d-flex  justify-content-between m-2">
    <span className='bg-success text-white p-1 rounded h-25'>{product.rating}</span>
    <p className='bg-danger text-white p-1 rounded'>{product.category}</p>
  </div>
   <Card.Img variant="top" src= {product.thumbnail}/> <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text> {product.description}  </Card.Text>
    </Card.Body>
    <div className="btn btn-card d-flex align-items-center justify-content-between">
<p className='price' style={{fontSize:"20px"}}>{product.price}LE</p>
<Button variant="warning"> <GiShoppingCart/>add to card</Button>
</div>
  </Card>

</div>
  </>
 
  )

}

export default ListProducts