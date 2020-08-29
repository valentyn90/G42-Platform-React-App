import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Analysis from './pages/analysis';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/analysis">
            <Analysis />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
