import {PostService} from '../services';

const requestPost = () => {
  return {
    type: 'POST_REQUEST'
  }
};

// const successPost = (payload) => {
//   return {
//     type: 'SUCCESS_POST'
//   }
// };

const failurePost = () => {
  return {
    type: 'POST_FEILURE'
  }
};

const getAllPosts = () => (dispatch) => {
  dispatch(requestPost());

  return PostService.getAllPost()
  .then(data => dispatch({
    type: 'GET_ALL_POSTS',
    payload: data
  }))
  .catch(() => {
    dispatch(failurePost());
    return Promise.reject();
  });
};

// const updatePost = (id, {title, text}) => (dispatch) => {
//   dispatch(requestPost());
//
// };

const deletePost = (id) => (dispatch) => {
  // dispatch(requestPost());

  // return PostService.deletePost(id)
  // .then(() => getAllPosts())
  // .catch(() => {
  //   dispatch(failurePost());
  // })
};

export {
  getAllPosts,
  deletePost
};
