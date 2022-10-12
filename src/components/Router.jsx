import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    BrowserRouter
  } from "react-router-dom";
import Header from './Header';
import UserInput from './components/UserInput';
import ShowResults from './ShowResults';
import Card from './Card';

const Router = () => {
  return (
    <Router>
    {/* <Navbar /> */}
    <Routes>
        <Route path="/details/:id" >{<Card />}</Route>
         <Route path='/showResults' element={<ShowResults />} ></Route> 
        <Route path='404' element={<p>Página no encontrada</p>} />
      <Route path='/' element={<App />}></Route>
      
      {/* <Route path='*' element={<p>Página no encontrada</p>} /> */}
    </Routes>
  </Router>
  )
  
}

export default Router