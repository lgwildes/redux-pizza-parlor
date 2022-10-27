import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux';
import logger from 'redux-logger';

const pizzaList = (state=[], action) => {
    //TODO get pizzaList from database
    return state;
}

const order = (state={}, action) => {
    //TODO add customer info and pizza order from form/cart info idk
    switch(action.type){
        case 'SET_CHECKOUT':
            return {}
    }
    return state;
}

const cart = (state=[], action) => {
    //TODO add pizza objects from form 
    return state;
}

const storeInstance = createStore(
    combineReducers({
        pizzaList,
        order,
        cart

    }),
    applyMiddleware(logger)
);




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
