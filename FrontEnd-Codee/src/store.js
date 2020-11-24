import {applyMiddleware,createStore,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducres,productDetails} from './reducers/productReducer'
import { cartItemReducers } from './reducers/cartItem';



const reducers=combineReducers({
    ProductList:productListReducres,    
    ProductDetails:productDetails,
    cart :cartItemReducers
})

  


const cartItemFromStroge=localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem') ) : [] 
const initialState={
    cart:{cartItem:cartItemFromStroge}
}

const middleware=[thunk]


const store=createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)     


export default store;