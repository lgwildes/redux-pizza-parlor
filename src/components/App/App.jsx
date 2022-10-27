import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPizzaList();
  }, [])

  const getPizzaList = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then(res => dispatch({ type: 'GET_PIZZAS', payload: res.data }))
      .catch(err => console.log(err))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <Router>
        <Route path="/">
          <h1>Step 1: Select Your Pizza</h1>
          <PizzaList />
        </Route>
      </Router>

    </div>
  );
}

export default App;
