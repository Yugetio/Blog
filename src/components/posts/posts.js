import React, {Fragment} from 'react';
import {PostService} from "../../services";
import PostDetails from "../postDetails";

const renderPosts = (posts) => {
  return (
    <Fragment>
      {posts.map(post => (
        <Fragment key={post._id}>
          <PostDetails post={post}/>
        </Fragment>)
      )}
    </Fragment>
  );
};

class Posts extends React.Component {
  state = {
    posts: [],
    error: false,
    isLoaded: false
  };

  componentDidMount() {
    PostService.getAllPost()
    .then((data) => this.setState({
      posts: data,
      isLoaded: true
    }))
    .catch(() => this.setState({
      error: true
    }));
  }


  render() {
    const {error, isLoaded, posts} = this.state;
    let body = null;

    if (error) {
      body = 'Error';
    } else if (!isLoaded) {
      body = 'Loading...';
    } else {
      body = renderPosts(posts);
    }

    return (
      <Fragment>
        {body}
      </Fragment>
    );
  }
};

export default Posts;

/*
*
* author:
        createdAt: "2019-08-28T08:32:04.468Z"
        email: "o.kucherenko_@ukr.net"
        gravatar: "i"
        updatedAt: "2019-09-17T18:43:07.969Z"
        username: "Olha_Kucherenko"
        _id: "5d663c04108cc70017235b52"
        __proto__: Object
createdAt: "2019-09-12T12:19:15.806Z"
text: "В траве сидел кузнечик"
title: "Кузнечик"
updatedAt: "2019-09-12T12:19:15.806Z"
__v: 0
_id: "5d7a37c31d9fce00176b10fe"
*
* */