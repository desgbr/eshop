import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap'
import { BsCart4, BsHeart } from 'react-icons/bs'
const navbar = () => {
  return (

    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/Product-Color.svg"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">Deals</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <div className="navbar_icons">
            <Nav.Link href="#pricing" className='navbar_icon cart'><BsCart4 /></Nav.Link>
            <Nav.Link href="#pricing" className='navbar_icon heart'><BsHeart /></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar