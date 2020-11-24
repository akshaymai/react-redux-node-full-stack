import {ADD_CART_ITEM} from '../constant/cartItemContent'
import axios from 'axios'


export const getCartItem=(id,qty)=>(dispatch,getState)=>{

    const {data}=axios.get(`/products/${id}`)


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
    localStorage.setItem('cartItem',JSON.stringify(getState().cart.getCartItem))
}

