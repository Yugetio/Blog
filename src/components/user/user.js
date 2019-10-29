import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import './user.css';

import {logout} from '../../actions';

class User extends Component {

  render() {
    const {user, logout} = this.props;
    return (
      <Fragment>
        <div className="profile">
          <p className="user-name">{
            user.firstname ? `${user.firstname} ${user.lastname}` : null
          }</p>
          <p>{`Email: ${user.email}`}</p>

          <div>
            <button type="button" className="btn btn-warning">Update profile</button>
            <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>
            <button type="button" className="btn btn-danger">Delete profile</button>
          </div>

        </div>
        <hr/>
        <div className="user-posts">
          posts
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userData
  }
};

export default connect(mapStateToProps, {logout})(User);
