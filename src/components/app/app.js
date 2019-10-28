import React, {Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


import './app.css';

import Header from "../header";
import SignUpForm from '../signUpFrom';
import SignInForm from '../signInForm';
import Posts from "../posts";
import Welcome from "../welcome";

const App = (props) => {
  return (
    <Fragment>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/"
                 component={Welcome}
                 exact/>


          <Route path="/signup">
            {props.auth.isLogin ? <Redirect to="/signin" /> : <SignUpForm />}
          </Route>

          <Route path="/signin">
            {props.auth.isLogin ? <Redirect to="/" /> : <SignInForm />}
          </Route>

          {/*<Route path="/signup"*/}
          {/*       component={SignUpForm}/>*/}

          {/*<Route path="/signin"*/}
          {/*       component={SignInForm}/>*/}
          <Route path="/posts"
                 component={Posts} />

        </Switch>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps, {})(App);