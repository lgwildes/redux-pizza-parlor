import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const pizzaList = (state = [], action) => {
    if (action.type === 'GET_PIZZAS') {
        return action.payload;
    }
    return state;
}

const order = (state={}, action) => {
    //TODO add customer info and pizza order from form/cart info idk
    switch(action.type){
        case 'SET_CHECKOUT':
            return {}
        case 'ADD_INFO':
            return action.payload;
        default:
    }
    return state;
}

const cart = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PIZZAS':
            return action.payload;
        case 'SET_CHECKOUT':
            return []
        default:
    }
    return state;
}

const total = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_TOTAL':
            return state += action.payload;
        case 'SUB_TOTAL':
            return state -= action.payload;
        case 'SET_CHECKOUT':
            return 0;
        default: return state;
    }
}

const orderList = (state = [], action) => {
    switch (action.type) {
        case 'GET_ORDERS':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        pizzaList,
        order,
        cart,
        total,
        orderList
    }),
    applyMiddleware(logger)
);




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
