import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Analysis from './pages/analysis';
import FighterProfiling from './pages/fighter-profiling';
import FighterProfile from './pages/fighter-profile/FighterProfile';
import Comparison from './pages/comparison';

function App() {
  return (
    <div style={{ height: '100vh' }} className="">
      <Router>
        <Switch>
          <Route path="/analysis">
            <Analysis />
          </Route>
          <Route path="/fighter-profiling">
            <FighterProfiling />
          </Route>
          <Route path="/fighter-profile">
            <FighterProfile />
          </Route>
          <Route path="/comparison">
            <Comparison />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
