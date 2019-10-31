import {UserService} from '../services';

const requestUser = () => {
  return {
    type: 'USER_REQUEST'
  }
};

const successUser = (payload) => {
  return {
    type: 'USER_SUCCESS',
    payload
  }
};

const failureUser = () => {
  return {
    type: 'USER_FAILURE'
  }
};


const getProfile = () => dispatch => {
  dispatch(requestUser());
  return UserService.getProfile()
  .then((user) => {
    dispatch(successUser(user));
  })
  .catch(() => {
    dispatch(failureUser());
    return Promise.reject();
  });
};

const updatedProfile = ({firstname, lastname}) => dispatch => {
  dispatch(requestUser());
  return UserService.updatedProfile({firstname, lastname})
  .then((user) => {
    dispatch(successUser(user));
  })
  .catch(() => {
    dispatch(failureUser());
    return Promise.reject();
  });
};

const deleteProfile = () => dispatch => {
  dispatch(requestUser());
  return UserService.deleteProfile()
  .then(() => {
    dispatch({
      type: 'LOGOUT'
    });
    dispatch({
      type: 'CLEAR_PROFILE'
    });})
  .catch(() => {
    dispatch(failureUser());
    return Promise.reject();
  });
};

export {
  getProfile,
  updatedProfile,
  deleteProfile
};