const initialState = {
  userData: {},
  loading: false,
  error: false,
  isLogin: !!localStorage['user-token']
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'AUTH_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'AUTH_SUCCESS':
      return {
        ...state,
        loading: false,
        userData: action.payload ? action.payload : {},
        isLogin: action.payload.token ? !!action.payload.token : false
      };

    case 'AUTH_FEILURE':
      return {
        ...state,
        loading: false,
        error: true
      };

    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        userData: {}
      };

    case 'CHECK_TOKEN_SUCCESS':
      return {
        ...state,
        isLogin: true
      };

    default:
      return state;
  }
};

export default authReducer;