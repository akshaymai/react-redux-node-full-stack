import {applyMiddleware,createStore,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducres,productDetails} from './reducers/productReducer'


const reducers=combineReducers({
    ProductList:productListReducres,
    
    ProductDetails:productDetails
})


const initialState={}

const middleware=[thunk]


const store=createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;