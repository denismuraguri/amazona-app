import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from "redux-thunk"
import { productDetailsReducer, 
    productListReducer } from './reducers/productReducer';

const initialState = {};

//A reducer is a function that accept two parameter
{/**const reducer = (state, action) => {
    return{ products: data.products};
**/}

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;