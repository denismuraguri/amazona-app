import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from "redux-thunk"
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, 
    productListReducer } from './reducers/productReducer';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress:localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
    },
};

//A reducer is a function that accept two parameter
/**const reducer = (state, action) => {
    return{ products: data.products};
**/

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;