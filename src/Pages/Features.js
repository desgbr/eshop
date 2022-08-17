import React ,{useState} from 'react'
import '../Styles/Features.css'
import {AiOutlineSearch} from 'react-icons/ai'
const Features = () => {
  const [input , setInput] = useState('')
  return (
    <div className='features'>
      <div className="features-item">
      <h2>Exclusive Brands</h2>
      <p>Get your exclusive & brands delivered to you in no time</p>
     <form>
      <input type='text' 
      value={input}
      placeholder='search for  products from here' 
      onChange={e => setInput(e.target.value)}
      />
      <button className='btn btn-success'> <AiOutlineSearch/> Search </button>
      </form>
      </div>
    </div>
  )
}

export default Features
