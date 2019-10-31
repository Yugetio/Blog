import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import './user.css';

import {logout, deleteProfile, togglePopupPosts} from '../../actions';
import PopupUserUpdate from "../popupUpdateUser";
import Posts from "../posts/posts";
import PopupPost from "../popUpPost/popupPost";

class User extends Component {

  state = {
    popupUserUpdate: false
  };

  togglePopupUserUpdate = () => {
    this.setState({
      popupUserUpdate: !this.state.popupUserUpdate
    })
  };

  render() {
    const {user, logout, deleteProfile, postsPopup} = this.props;
    const {popupUserUpdate} = this.state;

    return (
      <Fragment>
        <div className="profile">
          <p className="user-name">{
            user.firstname ? `${user.firstname} ${user.lastname}` : null
          }</p>
          <p>{`Email: ${user.email}`}</p>

          <div>
            <button type="button" className="btn btn-warning"
                    onClick={this.togglePopupUserUpdate}>Update profile
            </button>
            <button type="button" className="btn btn-primary"
                    onClick={logout}>Logout
            </button>
            <button type="button" className="btn btn-danger"
                    onClick={deleteProfile}>Delete profile
            </button>
          </div>

        </div>
        <hr/>
        <div className="user-posts">
          <button type="button"
                  className="btn btn-primary col-sm-12"
                  onClick={this.props.togglePopupPosts}>Create post
          </button>

          <Posts isAuthor/>
        </div>


        {!popupUserUpdate ? null : <PopupUserUpdate togglePopupUserUpdate={this.togglePopupUserUpdate}/>}
        {!postsPopup ? null : <PopupPost/>}

      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userData,
    postsPopup: state.posts.popup
  }
};

export default connect(mapStateToProps, {logout, deleteProfile, togglePopupPosts})(User);
