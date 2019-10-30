import React, {Fragment} from 'react';

import './post-details.css';

const lastUpdate = (updatedAt) => {
  let data = new Date(updatedAt);
  return `${data.getFullYear()}.${data.getMonth()}.${data.getDay()}`;
};

const deletePost = (id) => ()  => {
  console.log(id);
};

const updatePost = (post) => () => {
  console.log(post);
}

const PostDetails = ({post, isAuthor}) => {

  const {
    _id: id,
    title,
    text,
    updatedAt,
    author
  } = post;

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
              <button type="button" className="btn btn-link" onClick={deletePost(id)}>Delete post</button>
            </Fragment>
        }
      </div>
    </div>
  );
};

export default PostDetails;