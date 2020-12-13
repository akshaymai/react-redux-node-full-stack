import {ADD_SHIPPING_ADDRESS,ADD_CART_ITEM,ADD_REMOVE_ITEM, ADD_PAYMENT_METHOD} from '../constant/cartItemContent';


export const cartItemReducers=(state={cartItem:[],address:{}},action)=>{

switch(action.type){

case ADD_CART_ITEM:
const item=action.payload;
const checkitem=state.cartItem.find((x)=>x.product === item.product)
 if(checkitem){
    return {...state,
        cartItem:state.cartItem.map((x)=>x.product === checkitem.product ? item : x)
    }
 }else{
   return{
       ...state,
       cartItem:[...state.cartItem,item]
   }
 }

case ADD_REMOVE_ITEM :

return {
  ...state,
  cartItem:state.cartItem.filter((item)=>item.product !== action.payload.id)
}


case ADD_SHIPPING_ADDRESS:

return {
  ...state,
  shippingAddress:action.payload
}

case ADD_PAYMENT_METHOD:

return {
  ...state,
  paymentmethod:action.payload
}

default :
return state
}
}

 