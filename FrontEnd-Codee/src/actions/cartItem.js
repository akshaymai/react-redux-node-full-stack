import {ADD_CART_ITEM,ADD_REMOVE_ITEM, ADD_SHIPPING_ADDRESS} from '../constant/cartItemContent'
import axios from 'axios'


export const getCartItem=(id,qty)=>async (dispatch,getState)=>{
    
    const {data}=await axios.get(`/products/${id}`)
  
    dispatch({
        type:ADD_CART_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty:qty
        }
    })

    localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItem))
}
export const removeCartItem=(id)=>async(dispatch,getState)=>{

dispatch({
    type: ADD_REMOVE_ITEM,
    payload:{
        id
    }
})

localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItem))

}

export const addShippingaddress=(data)=>async(dispatch)=>{
  console.log('shippppppppp',data)
    dispatch({
        type: ADD_SHIPPING_ADDRESS,
        payload: data
    })
 
    localStorage.setItem('shippingAddress',JSON.stringify(data))
    
    }