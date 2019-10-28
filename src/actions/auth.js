import {AuthService} from "../services";

const request_auth = () => {
  return {
    type: 'REQUEST'
  }
};

const signin_success = (payload) => {
  return {
    type: 'SIGNIN_SUCCESS',
    payload
  }
};

const signup_success = () => {
  return {
    type: 'SIGNUP_SUCCESS'
  }
};

const failure_auth = () => {
  return {
    type: 'FEILURE'
  }
};

const login = (data) => (dispatch) => {
  dispatch(request_auth());

  return AuthService.signIn(data)
  .then(data => dispatch(signin_success(data)))
  .catch(() => dispatch(failure_auth()));
};

const registration = (data) => (dispatch) => {
  dispatch(request_auth());

  return AuthService.signUp(data)
  .then(() => dispatch(signup_success()))
  .catch(() => dispatch(failure_auth()));
};

const logout = () => (dispatch) => {
  return AuthService.logout()
  .then(() => dispatch({
    type: 'LOGOUT'
  }));
};

export {
  login,
  registration,
  logout
};