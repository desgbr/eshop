import React from 'react'
import { NavLink  , useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import ImgNav from '../../src/imgs/Product-Color.svg'
import {GiShoppingCart} from 'react-icons/gi'
import {AiOutlineHeart} from 'react-icons/ai'
import Badge from 'react-bootstrap/Badge';
function Header() {
   const states = useSelector(state=> state)
  // console.log(states)
  const navigate = useNavigate()
  return (
    <header >
   
   <div className="container">
   <div className="logo">
        <img src={ImgNav} alt='title' />
      </div>
  <ul>
    <li><NavLink to='/'>Shop</NavLink>  </li>
    <li><NavLink to='/products'>Products</NavLink> </li>
    <li><NavLink to='/'>Deals</NavLink>  </li>
    <li><NavLink to='/'> FAQ</NavLink>  </li>
    <li><NavLink to='/contact'> Contact</NavLink>  </li>
    <div className="icons" >
<GiShoppingCart className='icon'  onClick={() => navigate('/cartlist')}/> 
<Badge bg="secondary" className='badge'>{states.count}</Badge>  
<AiOutlineHeart  className='icon'/>
  </div>
  </ul>
   </div>

    </header>
  )
}

export default Header
