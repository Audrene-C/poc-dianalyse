import React from 'react';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Start from './Components/Start';
import Public from './Components/Public';
import Private from './Components/Private';
import About from './Components/About';
import MyAccordion from './Components/MyAccordion';
import MyFooter from './Components/MyFooter';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/public">
            <Public />
          </Route>
          <Route path="/private">
            <Private />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <MyAccordion />
          </Route>
        </Switch>
      </Router>

      <MyFooter />
    </div>
  );
}

export default App;
