const authReducer = (state, action) => {
  if (state === undefined) {
    return {
      userData: {},
      request: false,
      error: false,
      isLogin: !!localStorage['user-token']
    };
  }

  switch (action.type) {
    case 'REQUEST':
      return {
        ...state.auth,
        request: true
      };

    case 'SIGNIN_SUCCESS':
      return {
        ...state.auth,
        request: false,
        userData: action.payload,
        isLogin: !!action.payload.token
      };


    case 'SIGNUP_SUCCESS':
      return {
        ...state.auth,
        request: false
      };

    case 'FEILURE':
      return {
        ...state.auth,
        request: false,
        error: true
      };

    case 'LOGOUT':
      return {
        ...state.auth,
        isLogin: false,
        userData: {}
      };

    case 'CHECK_TOKEN_SUCCESS':
      return {
        ...state.auth,
        isLogin: true
      };

    default:
      return state.auth;
  }
};

export default authReducer;