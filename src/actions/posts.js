import {PostService} from '../services';

const request_post = () => {
  return {
    type: 'REQUEST_POST'
  }
};

// const success_post = (payload) => {
//   return {
//     type: 'SUCCESS_POST'
//   }
// };

const failure_post = () => {
  return {
    type: 'FEILURE_POST'
  }
};

const getAllPosts = () => (dispatch) => {
  dispatch(request_post());

  return PostService.getAllPost()
  .then(data => dispatch({
    type: 'GET_ALL_POSTS',
    payload: data
  }))
  .catch(() => dispatch(failure_post()));
};

export {
  getAllPosts
};
