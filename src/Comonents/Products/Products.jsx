import React ,{useEffect}   from 'react'
import './Products.css'
import { useNavigate } from 'react-router-dom'
import {Button , Card } from 'react-bootstrap'
import {GiShoppingCart} from 'react-icons/gi'
import { useSelector , useDispatch } from 'react-redux'
import { fetchProducts } from '../../Store/Actions'
const Products = () => {
const dispatch = useDispatch()
const products  = useSelector(state => state.product.products)
console.log(products)
const navigate = useNavigate()
const direct =() =>{
navigate('/productdetails')
}

useEffect(() =>{
  fetchProducts(dispatch)
  },[])

const allProducts = products?.map((product) =>{
return (
  <div key={product.id}>
   <div className='card-item' key={product.id}>
  <Card style={{ width: '15rem', border:"none" }}>  <div className="top-card d-flex  justify-content-between m-2">
    <span className='bg-success text-white p-1 rounded h-25'>{product.rating}</span>
    <p className='bg-danger text-white p-1 rounded'>{product.category}</p>
  </div>   <Card.Img variant="top" src= {product.thumbnail} onClick={direct}/> <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text> {product.description}  </Card.Text>
    </Card.Body>

   </Card>
   <div className="card-bottom d-flex align-items-center justify-content-between">
 <p className='price' style={{fontSize:"20px"}}>{product.price}LE</p>
 <Button > <GiShoppingCart/> add to card</Button>
 </div>
</div>
  </div>
  )
})

return (
 <>
 <div className='product'>
        {allProducts?.length === 0 && <div>No Products</div>}
        {allProducts }
        </div>
</>

  )
}

export default Products
//  <Button >  <GiShoppingCart/> add to card</Button>
//  {/* <Button variant="warning" onClick = {() =>{
//  setCart([...cart , product])
//  }}>
//  <GiShoppingCart/>add to card</Button> */}
//  </div>
//  </div>
// ))}
// </div>