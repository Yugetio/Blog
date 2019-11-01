import React from 'react';
import {connect} from 'react-redux';

import './spinner.css';

const Spinner = (props) => {
  const {
    children, isLogin,
    isLoadUser
  } = props;

  const haveToken = !!localStorage['user-token'];

  if ((isLogin && !isLoadUser) || (haveToken && !isLogin)) {
    return (
      <div className="spinner">
        <div className="lds-css ng-scope">
          <div className="lds-blocks" style={{width: '100%',height:'100%'}}>
            <div style={{left:'38px', top:'38px', animationDelay:'0s'}}></div>
            <div style={{left:'80px', top:'38px', animationDelay:'0.125s'}}></div>
            <div style={{left:'122px', top:'38px', animationDelay:'0.25s'}}></div>
            <div style={{left:'38px', top:'80px', animationDelay:'0.875s'}}></div>
            <div style={{left:'122px', top:'80px', animationDelay:'0.375s'}}></div>
            <div style={{left:'38px', top:'122px', animationDelay:'0.75s'}}></div>
            <div style={{left:'80px', top:'122px', animationDelay:'0.625s'}}></div>
            <div style={{left:'122px', top:'122px', animationDelay:'0.5s'}}></div>
          </div>
        </div>
        <p>Loading...</p>
      </div>
    )
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

export default connect(mapStateToProps, null)(Spinner);

