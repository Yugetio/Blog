import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import {getAllPosts} from '../../actions';

import PostDetails from "../postDetails";

const renderPosts = (posts) => {
  return (
    <Fragment>
      {posts.map(post => (
        <PostDetails post={post} key={post._id}/>
      ))}
    </Fragment>
  );
};

class Posts extends React.Component {
  componentDidMount() {
    this.props.getAllPosts();
    console.log();
  }

  
  render() {
    const {error, isLoaded, posts} = this.props;
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
}

const mapStateToProps = state => {
  return {
    posts: state.posts.allPosts,
    isLoaded: state.posts.isLoaded,
    error: state.posts.error
  }
};

export default connect(mapStateToProps, {getAllPosts})(Posts);
