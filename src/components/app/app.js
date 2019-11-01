import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


import './app.css';

import Header from '../header';
import SignUpForm from '../signUpFrom';
import SignInForm from '../signInForm';
import Posts from '../posts';
import Welcome from '../welcome';
import User from '../user';

import {checkToken, getProfile} from '../../actions';
import Spinner from "../spinner";

class App extends React.Component {

  componentDidMount() {
    const {checkToken, getProfile, auth} = this.props;
    const token = localStorage['user-token'];

    if (token && !auth.isLogin) {
      checkToken()
      .then(() => {
        getProfile();
      });
    }
  }

  render() {
    const { isLogin } = this.props.auth;
    return (
      <Spinner>
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
      </Spinner>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isLoad: state.user.isLoad
  }
};

export default connect(mapStateToProps, {checkToken, getProfile})(App);