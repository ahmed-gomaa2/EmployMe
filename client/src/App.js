import './App.css';
import React, {Fragment} from 'react';
import Navbar from "./component/Navbar";
import Landing from "./component/Landing";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";

function App() {
  return (
      <Router>
          <Fragment>
              <Navbar />
              <Route exact path={'/'} component={() => <Landing />} />
              <section className={'container'}>
                  <Switch>
                      <Route exact path={'/login'} component={() => <Login />} />
                      <Route exact path={'/register'} component={() => <Register />} />
                  </Switch>
              </section>
          </Fragment>
      </Router>

  );
}

export default App;
