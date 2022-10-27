import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InfoForm from '../InfoForm/InfoForm';
import HeaderTotal from '../HeaderTotal/HeaderTotal';
import Checkout from '../Checkout/Checkout';
import PizzaList from '../PizzaList/PizzaList';
import Admin from '../Admin/Admin';

function App() {
  const [total, setTotal] = useState(0);
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
      .then(res => dispatch({ type: 'GET_ORDERS', payload: res.data }))
      .catch(err => console.log(err))
  }
  
  const addNewCustomerInfo = (customerInfo) => {
    console.log(`in addNewCustomerInfo`, customerInfo);

    axios({
      method: 'POST',
      url: '/api/order',
      data: customerInfo
    }).then((response) => {
  
    }).catch((err) => {
      console.error('ERROR in POST')
    })
  
  }

  // const order = useSelector(store => store.order)

  const checkout = (order) => {

    axios({

      method: 'POST',
      url: '/api/checkout',
      data: order

    }).then((response) => {
      //probabaly go to home and clear here?

    }).catch((err) => {
      console.log('ERROR in /checkout POST');

    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <HeaderTotal total={total} />
      </header>
      <Router>

        <Route exact path="/">
          <h1>Step 1: Select Your Pizza</h1>
          <PizzaList setTotal={setTotal} total={total} />
        </Route>

        <Route exact path='/admin'>
          <Admin />
        </Route >

        <Route exact path="/info" >
          <InfoForm
            addNewCustomerInfo={addNewCustomerInfo} />
        </Route>

        <Route exact path="/checkout">
          <Checkout checkout={checkout} />
        </Route>

      </Router>

    </div>
  );
}

export default App;
