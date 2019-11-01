import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import {getAllPosts} from '../../actions';

import PostDetails from "../postDetails";

const renderPosts = (posts, isAuthor) => {
  return (
    <Fragment>
      {posts.map(post => (
        <PostDetails post={post} key={post._id} isAuthor={isAuthor}/>
      ))}
    </Fragment>
  );
};

class Posts extends React.Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const {error, isLoaded, posts, isAuthor, userId} = this.props;

    let postForRender = !isAuthor ? posts : posts.filter(post => post.author === userId || post.author._id === userId);
    postForRender = postForRender.reverse();

    let body = null;

    if (error) {
      body = 'Error';
    } else if (!isLoaded) {
      body = 'Loading...';
    } else {
      body = renderPosts(postForRender, isAuthor);
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
    error: state.posts.error,
    userId: state.user.userData.id
  }
};

export default connect(mapStateToProps, {getAllPosts})(Posts);
