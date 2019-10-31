import {PostService} from '../services';

const requestPost = () => {
  return {
    type: 'POST_REQUEST'
  }
};

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

const createPost = (payload) => (dispatch) => {
  dispatch(requestPost());
  return PostService.createPost(payload)
  .then((post) => {
    dispatch({
      type: 'CREATE_POST',
      payload: post
    });
  })
  .catch(() => {
    dispatch(failurePost());
    return Promise.reject();
  })
};

const updatePost = (id, payload) => (dispatch) => {
  dispatch(requestPost());

  return PostService.updatePost(id, payload)
  .then((post) => {
    dispatch({
      type: 'UPDATE_POST',
      payload: post
    });
  })
  .catch(() => {
    dispatch(failurePost());
    return Promise.reject();
  })
};

const deletePost = (id) => (dispatch) => {
  dispatch(requestPost());

  return PostService.deletePost(id)
  .then(() => {
    dispatch({
      type: 'DELETE_POST',
      payload: id
    });
  })
  .catch(() => {
    dispatch(failurePost());
  })
};

const togglePopupPosts = () => (dispatch) => {
  dispatch({
    type: 'TOGGLE_POPUP_POST'
  })
};

const setDataPost = (post) => (dispatch) => {
  dispatch({
    type: 'SET_DATA_POST',
    payload: post
  })
};

export {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  togglePopupPosts,
  setDataPost
};
