// import { ADD_PRODUCTS , INC , DEC } from "./ActionTypes"
// import data from '../data'
// if(!localStorage.getItem('products')){
//     localStorage.setItem('products' , JSON.stringify(data))
//     }
//     let allProducts = localStorage.getItem('products') ?
//      JSON.parse(localStorage.getItem('products')) :[]
    
     
const initialState ={
count:0,
product:[],
cart:[],
isLoading:false,
error:''
}

const reducer = (state=initialState , action) =>{
switch(action.type){
    case 'INC' :
    return{
        ...state,
    count:state.count + action.payload
    }
    case 'DEC' :
        return{
            ...state,
        count:state.count - action.payload
        }
    case 'ADD_PRODUCTS':
        return{
            ...state,  
         product:action.allProducts
        }
        case 'ADD_CART':
            return{
            ...state,
            }
    default:
        return state
}
}

export default reducer