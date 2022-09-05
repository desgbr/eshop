import React  from 'react'
import Slider from '../Comonents/Slider'
import Products from '../Comonents/Products/Products'
import Features from './Features'
function Home() {
//   const [products , setProducts] = useState([])
//   const [cart , setCart ] = useState([])
//   const [productsGroup , setProductsGroup] = useState([])
//   useEffect(() =>{
//   try{
//   axios.get('https://dummyjson.com/products?&limit=100')
//   .then(res =>{
//   setProducts(res.data.products)
//   const groupByCategory = res.data.products.reduce((group , product) =>{
//   const{category} = product
//   group [category] = group[category] ?? []
//   group[category].push(product)
// return group
//   }, {})
//   setProductsGroup(groupByCategory)
//   })
//   }catch(error){
//   console.log(error , 'Error...')
//   }
//   },[])
return (
<>
<Features />
<Slider/>
  <Products/>
</>
  )
}

export default Home