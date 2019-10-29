import React from 'react';
import {connect} from 'react-redux';

const Welcome = ({isLogin}) => {



  return (
    <h1>
      {
       isLogin ? "Login" : "hi guest"
      }
    </h1>

  );
};


const mapPropsToStatus = (state) => {
  return {
    isLogin: state.auth.isLogin
  }
};

export default connect(mapPropsToStatus, {})(Welcome);

// function UserGreeting(props) {
//   return <h1></h1>;
// }
//
// function GuestGreeting(props) {
//   return <h1></h1>;
// }