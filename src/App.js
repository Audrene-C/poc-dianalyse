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
import Login from './Components/Login';
import Register from './Components/Register';
import MyAccordion from './Components/MyAccordion';
import MyFooter from './Components/MyFooter';
import { AuthContext } from './context/auth';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthContext.Provider value={false}>

      <Router>

        <MyNavbar />

        <Switch>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/public" component={Public} />
          <PrivateRoute path="/private" component={Private} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <MyAccordion />
          </Route>
        </Switch>

      </Router>

      <MyFooter />

      </AuthContext.Provider>
    </div>
  );
}

export default App;
