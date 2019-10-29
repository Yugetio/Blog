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
  UserService.getProfile()
  .then((user) => {
    dispatch(successUser(user));
  })
  .catch(() => dispatch(failureUser()));
};

const updatedProfile = ({irstname, lastname}) => dispatch => {
  dispatch(requestUser());
  UserService.updatedProfile({irstname, lastname})
  .then((user) => {
    dispatch(successUser(user));
  })
  .catch(() => dispatch(failureUser()));
};

const deleteProfile = () => dispatch => {
  dispatch(requestUser());
  UserService.deleteProfile()
  .then(() => {
    return {
      type: 'DELETE_PROFILE'
    }
  })
  .catch(() => dispatch(failureUser()));
};

export {
  getProfile,
  updatedProfile,
  deleteProfile
};