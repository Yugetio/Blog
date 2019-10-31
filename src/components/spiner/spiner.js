import React from 'react';
import {connect} from 'react-redux';

const Spiner = (props) => {
  const {
    children, isLogin,
    isLoadUser
  } = props;

  const haveToken = !!localStorage['user-token'];

  if ((isLogin && !isLoadUser) || (haveToken && !isLogin)) {
    return <p>Loading...</p>
  } else {
    return children;
  }
};

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin,
    isLoadUser: state.user.isLoad

  }
};

export default connect(mapStateToProps, null)(Spiner);