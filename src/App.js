import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";



function App() {
  return (
    <Router basename="/">
  
    <Home />
   
  </Router>
  );
}

export default App;
