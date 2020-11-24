import {ADD_CART_ITEM,ADD_REMOVE_ITEM} from '../constant/cartItemContent';


export const cartItemReducers=(state={cartItem:[]},action)=>{

switch(action.type){

case ADD_CART_ITEM:
    
  console.log('ggggggggg',state) 
const item=action.payload;
 console.log('akshay maityvvvv',item)

 const checkitem=state.cartItem.find((x)=>x.product === item.product)

 console.log('ffff',checkitem);
 
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

