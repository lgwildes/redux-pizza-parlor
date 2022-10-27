import React from 'react';
import axios from 'axios';
import './App.css';
import Checkout from '../Checkout/Checkout';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const order = useSelector(store => store.order)

  const checkout = (order) => {

    axios({

      method: 'POST',
      url: '/checkout',
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
      </header>
    
      <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
      <Router>
      <Link to='/checkout'>Checkout</Link>
        <Route path="/checkout">
          <Checkout checkout={checkout}/>
        </Route>
      </Router>

    </div>
  );
}

export default App;
