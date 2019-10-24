import React from 'react';

const PostDetails = (props) => {
  const {
    title,
    text,
    updatedAt,
    author
  } = props.post;
  let lastUpdate = new Date(updatedAt);

  lastUpdate = `${lastUpdate.getFullYear()}.${lastUpdate.getMonth()}.${lastUpdate.getDay()}`;

  return (
    <div className="card mb-3">
      <h3 className="card-header">{title}</h3>
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer text-muted">
        Author: {author.username}, Last update: {lastUpdate}
      </div>
    </div>
  );
};

export default PostDetails;