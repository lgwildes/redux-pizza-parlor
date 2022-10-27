import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

import InfoForm from '../InfoForm/InfoForm';
import HeaderTotal from '../HeaderTotal/HeaderTotal';


function App() {


  const addNewCustomerInfo = (customerInfo) => {
    console.log(`in addNewCustomerInfo ${customerInfo}`)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <HeaderTotal />
      </header>
      <Router>

        <Route exact path ="/info" >
          <InfoForm
            addNewCustomerInfo={addNewCustomerInfo} />
        </Route>

      </Router>
  
    </div>
  );
}

export default App;
