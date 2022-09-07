import React from 'react'
import { Container, InputGroup, Form , Button} from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
const Header = () => {
  return (
    <div className="header">
      <Container className='py-5 '>
        <h1 className='text-dark text-center'>Exclusive Brands</h1>
        <p className="lead text-center">Get your exclusive & brands delivered to you in no time</p>

        <InputGroup className="input-search my-5 mx-auto">
          <Form.Control
            className='p-2 px-3'
            placeholder="Search your products from here"
            aria-label="Search your products from here"
            aria-describedby="basic-addon2"
          />
          <Button variant="success" id="button-addon2">
            <BiSearch /> Search
          </Button>
        </InputGroup>
      </Container>
      </div>
  )
}

export default Header