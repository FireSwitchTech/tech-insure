import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Homepage from './HomePage'
import Signup from './signup/signup'
import Login from './login/login'
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
