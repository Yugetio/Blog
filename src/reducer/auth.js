const initialState = {
  loading: false,
  error: false,
  isLogin: false
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
        isLogin: !!action.payload.token
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
        isLogin: false
      };

    case 'CHECK_TOKEN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true
      };

    default:
      return state;
  }
};

export default authReducer;