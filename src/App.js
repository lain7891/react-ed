import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Search from "./components/Search/Search";


function App() {
  return (
    <Router basename="/">
       <Search />
    <Home />
   
  </Router>
  );
}

export default App;
