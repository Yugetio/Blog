import React, {Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


import './app.css';

import Header from '../header';
import SignUpForm from '../signUpFrom';
import SignInForm from '../signInForm';
import Posts from '../posts';
import Welcome from '../welcome';
import User from '../user';

const App = (props) => {


  const {isLogin} = props.auth;
  return (
    <Fragment>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/"
                 component={Welcome}
                 exact/>


          <Route path="/signup">
            {isLogin ? <Redirect to="/"/> : <SignUpForm/>}
          </Route>

          <Route path="/signin">
            {isLogin ? <Redirect to="/"/> : <SignInForm/>}
          </Route>

          <Route path="/user">
            {isLogin ? <User/> : <Redirect to="/signin"/>}
          </Route>

          <Route path="/posts"
                 component={Posts}/>

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