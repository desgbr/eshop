// import {ADD_PRODUCTS, INC, DEC} from'./ActionTypes'
export const increment = () =>{
return{
type:'INC',
payload:1,
}
}
export const decrement = () =>{
    return{
    type:'DEC',
    payload:1,
    }
    }
    

export const fetchProducts = (dispatch) =>{
    fetch('https://dummyjson.com/products?&limit=100')
    .then(res => res.json())
    .then(data =>{
        return dispatch({
            type: 'ADD_PRODUCTS',
            allProducts:data,
            })
    }).catch(error =>{
    console.log(error)
    })

}
