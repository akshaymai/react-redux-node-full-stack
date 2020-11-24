import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getCartItem} from '../actions/cartItem'

const CartScreen=({match,location,history})=>{

     const dispatch=useDispatch() 
    const productId=match.params.id
    const qty=location.search ? Number(location.search.split('=')[1]) : 1;
 
    
    useEffect(()=>{

   if(productId){
       dispatch(getCartItem(productId,qty))
   }
    },[dispatch,productId,qty])

    
    return(
        <div>
        Cart:{qty}
        </div>
    )
}
export default CartScreen;