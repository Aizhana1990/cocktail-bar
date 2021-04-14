import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Drink from "./pages/Drink";
import Products from "./pages/Products";
import Search from "./pages/Search";
import Browse from "./pages/Browse"
import Footer from "./pages/Footer"


function App() {
  return (
    <Router>
        <Route exact path='/' component={Home}/>
        <Route exact path='/drinks/' component={Drinks}/>
        <Route exact path='/drinks/:id' component={Drink}/>
        <Route exact path='/product/:name' component={Products}/>
        <Route exact path='/product/search' component={Search}/>
        <Route exact path='/browse/:name' component={Browse}/>
        <Route exact path='/footer' component={Footer}/>
    </Router>
  );
}

export default App;
