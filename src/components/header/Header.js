import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Container, InputGroup, Form , Button} from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
const Header = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
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
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="success" id="button-addon2" onClick={() => navigate(`/search/${search}`)} disabled={!search}>
            <BiSearch /> Search
          </Button>
        </InputGroup>
      </Container>
      </div>
  )
}

export default Header