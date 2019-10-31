import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import './post-details.css';

import {deletePost, setDataPost, togglePopupPosts} from '../../actions';


const lastUpdate = (updatedAt) => {
  let data = new Date(updatedAt);
  return `${data.getFullYear()}.${data.getMonth()}.${data.getDay()}`;
};

const PostDetails = (props) => {
  const {post, isAuthor,
    deletePost, setDataPost,
    togglePopupPosts} = props;

  const {
    _id: id,
    title,
    text,
    updatedAt,
    author
  } = post;

  const updatePost = (post) => () => {
    togglePopupPosts();
    setDataPost(post);
  };

  return (
    <div className="card mb-3 post-details">
      <h3 className="card-header">{title}</h3>
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer text-muted">
        {
          !isAuthor ?
            `Author: ${author.username}, Last update: ${lastUpdate(updatedAt)}` :
            <Fragment>
              <button type="button" className="btn btn-link" onClick={updatePost(post)}>Update post</button>
              <button type="button" className="btn btn-link" onClick={() => deletePost(id)}>Delete post</button>
            </Fragment>
        }
      </div>
    </div>
  );
};

export default connect(null, {deletePost, setDataPost, togglePopupPosts})(PostDetails);