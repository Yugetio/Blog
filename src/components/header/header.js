import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

import {connect} from 'react-redux';

import './header.css';


const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Blog</NavLink>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts">Posts</NavLink>
            </li>

            {
              props.isLogin ? null : (
                <Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">SignIn</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                  </li>
                </Fragment>
              )
            }


          </ul>
        </div>


      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin
  }
};

export default connect(mapStateToProps, {})(Header);