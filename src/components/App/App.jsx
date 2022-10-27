import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import InfoForm from '../InfoForm/InfoForm';
import HeaderTotal from '../HeaderTotal/HeaderTotal';

import PizzaList from '../PizzaList/PizzaList';
import Admin from '../Admin/Admin';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getPizzaList();
    getOrderList();
  }, [])

  const getPizzaList = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then(res => dispatch({ type: 'GET_PIZZAS', payload: res.data }))
      .catch(err => console.log(err))
  }


  const getOrderList = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    })
      .then(res => dispatch({type:'GET_ORDERS', payload: res.data}))
      .catch(err => console.log(err))
}
  const addNewCustomerInfo = (customerInfo) => {
    console.log(`in addNewCustomerInfo`, customerInfo)

  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <HeaderTotal />
      </header>
      <Router>
        <Route exact path="/">
          <h1>Step 1: Select Your Pizza</h1>
          <PizzaList />
        </Route>


        <Route exact path='/admin'>
          <Admin />
         </Route >

        <Route exact path="/info" >
          <InfoForm
            addNewCustomerInfo={addNewCustomerInfo} />

        </Route>

      </Router>

    </div>
  );
}

export default App;
