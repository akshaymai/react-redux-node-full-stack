import {applyMiddleware,createStore,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducres,productDetails} from './reducers/productReducer'
import { cartItemReducers } from './reducers/cartItem';
import {userInfoDetails,registerReducer, userDetailsReducer, userProfileUpdateReducer} from   './reducers/userInfo'
import {orderCreateReducer} from './reducers/order';


const reducers=combineReducers({
    ProductList:productListReducres,    
    ProductDetails:productDetails,
    cart :cartItemReducers,
    userLoginreducer:userInfoDetails,
    userRegisterreducer:registerReducer,
    userDetaisr_reducer:userDetailsReducer,
    userProfileUpsateReducer:userProfileUpdateReducer,
    orderCreate:orderCreateReducer
})

  


const cartItemFromStroge=localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem') ) : [];
const shippingAddress=localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};
const userinfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :null
const paymentmethod=localStorage.getItem('paymentmethod') ? JSON.parse(localStorage.getItem('paymentmethod')) : null 


const initialState={
    cart:{cartItem:cartItemFromStroge,shippingAddress:shippingAddress,paymentMethod:paymentmethod},
    userLoginDetails:userinfo
}

const middleware=[thunk]


const store=createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)     


export default store;