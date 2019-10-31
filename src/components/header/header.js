import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import './header.css';


const Header = ({isLogin, avatar}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Blog</Link>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/posts">Posts</Link>
            </li>

            {
              isLogin ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/user">
                    <img alt="img" src={'data:image/jpeg;base64, ' + avatar} />
                  </Link>
                </li>
                ) : (
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">SignIn</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">SignUp</Link>
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
    isLogin: state.auth.isLogin,
    avatar: state.user.userData.avatar
  }
};

export default connect(mapStateToProps, null)(Header);