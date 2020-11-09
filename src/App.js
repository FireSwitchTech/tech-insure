import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Homepage from './pages/HomePage'
import Signup from './signup/signup'
import Login from './login/login'
import company from './company/company'
import insureForm from './insure-form/insure-form'
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/company" component={company}/>
      <Route exact path="/insure-form" component={insureForm}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
