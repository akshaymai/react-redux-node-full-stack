import {applyMiddleware,createStore,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducres,productDetails} from './reducers/productReducer'
import { cartItemReducers } from './reducers/cartItem';
import {userInfoDetails,registerReducer} from   './reducers/userInfo'



const reducers=combineReducers({
    ProductList:productListReducres,    
    ProductDetails:productDetails,
    cart :cartItemReducers,
    userLoginreducer:userInfoDetails,
    userRegisterreducer:registerReducer
})

  


const cartItemFromStroge=localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem') ) : [] 
const userinfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :null

const initialState={
    cart:{cartItem:cartItemFromStroge},
    userLoginDetails:userinfo
}

const middleware=[thunk]


const store=createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)     


export default store;