import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from "redux-thunk"
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, 
    productListReducer } from './reducers/productReducer';

const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    },
};

//A reducer is a function that accept two parameter
{/**const reducer = (state, action) => {
    return{ products: data.products};
**/}

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;