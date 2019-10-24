import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';


import './app.css';

import SignupForm from '../signup-from';
import Header from "../header";
import SigninForm from "../signin-form/signin-form";
import Posts from "../posts";

const App = () => {
  return (
    <Fragment>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/"
                 component={Posts}
                 exact/>
          <Route path="/signup"
                 component={SignupForm}/>
          <Route path="/signin"
                 component={SigninForm}/>

        </Switch>
      </div>
    </Fragment>
  );
};

export default App;