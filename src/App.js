import React from 'react';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
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
      <AuthContext.Provider value={true}>

      <Router>

        <MyNavbar />

        <Switch>
          <PrivateRoute path="/start" component={MyAccordion} />
          <Route path="/public" component={Public} />
          <PrivateRoute path="/private" component={Private} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>

      </Router>

      <MyFooter />

      </AuthContext.Provider>
    </div>
  );
}

export default App;
