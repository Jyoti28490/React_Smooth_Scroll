import React , {useState} from 'react';
import './App.css';
import Home from './pages/index';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signin' exact component={SigninPage}/>
      </Switch>
    </Router>
  );
}

export default App;
