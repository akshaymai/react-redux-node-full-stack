import {ADD_CART_ITEM,ADD_REMOVE_ITEM} from '../constant/cartItemContent';


export const cartItemReducers=(state={cartItem:[]},action)=>{

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
default :

return state


}


}

