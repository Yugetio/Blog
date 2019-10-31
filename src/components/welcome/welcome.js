import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Welcome = ({isLogin, user}) => {
  return (
    <h1>
      {
        isLogin ? (
          <Fragment>
            <span>Welcome back, {user.username}. </span>
            <Link to="/user">Go to profile</Link>
          </Fragment>
        ) : "Welcome guest, try to sign in to become an author"
      }
    </h1>

  );
};


const mapPropsToStatus = (state) => {
  return {
    isLogin: state.auth.isLogin,
    user: state.user.userData
  }
};

export default connect(mapPropsToStatus, null)(Welcome);