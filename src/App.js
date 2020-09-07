import React from 'react';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Start from './Components/Start';
import Stuff from './Components/Stuff';
import More from './Components/More';
import About from './Components/About';

function App() {
  return (
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/stuff">
            <Stuff />
          </Route>
          <Route path="/more">
            <More />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
