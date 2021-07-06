import React from 'react'

import './App.css';
import {Route, Switch} from "react-router-dom";






import Buttonanime from "./Components/Buttonanime";

import Home from "./Components/Home";
import About from "./Components/About";


import Projects from "./Components/Projects";
import Profile from "./Components/Profile";
function App() {

  return (
    <>
    <Buttonanime />
    
    
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Home" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Profile" component={Profile} />
    <Route exact path="/Projects" component={Projects} />
    
    
    </Switch>  
    
    </>
  );
  
}
export default App;
