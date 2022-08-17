import React from 'react'
import { NavLink } from 'react-router-dom'
import ImgNav from '../../src/imgs/Product-Color.svg'
import {GiShoppingCart} from 'react-icons/gi'
import {AiOutlineHeart} from 'react-icons/ai'
import Badge from 'react-bootstrap/Badge';

function Header() {
  return (
    <header >
   <div className="container">
   <div className="logo">
        <img src={ImgNav} alt='title' />
      </div>
  <ul>
    <li><NavLink to='/'>Shop</NavLink>  </li>
    <li><NavLink to='/products'>Products</NavLink> </li>
    {/* <li><NavLink to='craete'>Add Product</NavLink> </li> */}
    <li><NavLink to=''>Deals</NavLink>  </li>
    <li><NavLink to=''> FAQ</NavLink>  </li>
    <li><NavLink to='/contact'> Contact</NavLink>  </li>
    <div className="icons">
<GiShoppingCart className='icon' /> 
<Badge bg="secondary" className='badge'>0</Badge>  

<AiOutlineHeart  className='icon'/>
  </div>
  </ul>
   </div>

    </header>
  )
}

export default Header
