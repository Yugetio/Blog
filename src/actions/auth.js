import {AuthService} from "../services";

const requestAuth = () => {
  return {
    type: 'AUTH_REQUEST'
  }
};

const successAuth = (payload = {}) => {
  return {
    type: 'AUTH_SUCCESS',
    payload
  }
};

const failureAuth = () => {
  return {
    type: 'AUTH_FEILURE'
  }
};

const login = (data) => (dispatch) => {
  dispatch(requestAuth());

  return AuthService.signIn(data)
  .then(data => {
    dispatch(successAuth(data))
  })
  .catch(() => {
    dispatch(failureAuth());
    return Promise.reject();
  });
};

const registration = (data) => (dispatch) => {
  dispatch(requestAuth());

  return AuthService.signUp(data)
  .then(() => {
    dispatch(successAuth())
  })
  .catch((err) => {
    dispatch(failureAuth());
    return Promise.reject(err);
  });
};

const checkToken = () => (dispatch) => {
  return AuthService.checkToken()
  .then(() => {
    dispatch({
      type: 'CHECK_TOKEN_SUCCESS'
    })
  })
  .catch(() => {
    logout();
    return Promise.reject();
  })
};

const logout = () => (dispatch) => {
  return AuthService.logout()
  .then(() => {
    dispatch({
      type: 'LOGOUT'
    });
    dispatch({
      type: 'CLEAR_PROFILE'
    });
  });
};

export {
  login,
  registration,
  logout,
  checkToken,
  requestAuth,
  successAuth,
  failureAuth
};