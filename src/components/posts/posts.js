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
    const {error, isLoaded, posts, isAuthor, userPosts} = this.props;

    const postForRender = !isAuthor ? posts : userPosts.map(id => posts.find(({_id}) => id === _id));

    let body = null;

    if (error) {
      body = 'Error';
    } else if (!isLoaded) {
      body = 'Loading...';
    } else {
      console.log(postForRender)
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
    userPosts: state.user.userData.posts
  }
};

export default connect(mapStateToProps, {getAllPosts})(Posts);
