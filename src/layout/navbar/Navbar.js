import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap'
import { BsCart4, BsHeart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link className='nav-brand' to="/">
            <img
              src="/Product-Color.svg"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              navbarScroll
            >
              <Link className='nav-link' to="/">Shop</Link>
              <Link className='nav-link' to="/deals">Deals</Link>
              <Link className='nav-link' to="/faq">FAQ</Link>
              <Link className='nav-link' to="/contact">Contact</Link>
              <div className="navbar_icons">
                <Link to="/cart" className='nav-link navbar_icon cart'><BsCart4 /></Link>
                <Link to="/wishlist" className='nav-link navbar_icon heart'><BsHeart /></Link>
              </div>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default navbar