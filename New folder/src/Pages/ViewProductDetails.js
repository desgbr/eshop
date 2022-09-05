import React from 'react'
import {Button , Card} from 'react-bootstrap'
import {useNavigate , useLocation} from 'react-router-dom'
import {GiShoppingCart} from 'react-icons/gi'
function ViewProductDetails() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.state)
  return (
    <div style={{height:"100%"}}>
     <div className="d-flex justify-content-around py-3">
     <h2> Products Details</h2>      
       <Button onClick={()=> navigate('/')}>Back to Products</Button>

     </div>
     <div className='d-flex align-items-center justify-content-center'>
     <Card style={{ width: '25rem', border:"none" }} >
  <div className="top-card d-flex  justify-content-between m-2">
    <span className='bg-success text-white p-1 rounded h-25'>{location.state.rating}</span>
    <p className='bg-danger text-white p-1 rounded'>{location.state.category}</p>
  </div>
   <Card.Img variant="top" src= {location.state.thumbnail}/> <Card.Body>
      <Card.Title>{location.state.title}</Card.Title>
      <Card.Text> {location.state.description}  </Card.Text>
    </Card.Body>
    <div className="card-bottom d-flex align-items-center justify-content-between">
<p className='price' style={{fontSize:"20px"}}>{location.state.price}LE</p>
<Button variant="warning" onClick = {() =>{
location.state.setCard(location.state.product)
}}> 
<GiShoppingCart/>add to card</Button>
    </div>
  </Card>
     </div>
 

    </div>
  )
}

export default ViewProductDetails
