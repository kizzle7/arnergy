import React from "react";
import Home from "./views/Home";
import Index from './views/index'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Main from './layouts/MainLayout'
function App() {
  return (
    <div className="App">
      <Main>
        <Index />

      </Main>
    </div>
  );
}

export default App;
