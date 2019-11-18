const initialState = {
  userData: {},
  loading: false,
  error: false,
  isLoad: false
};


const UserReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'USER_REQUEST':
      return {
        ...state,
        // isLoad: false,
        loading: true
      };

    case 'USER_SUCCESS':
      return {
        ...state,
        loading: false,
        userData: action.payload,
        isLoad: true
      };

    case 'USER_FAILURE':
      return {
        ...state,
        loading: false,
        error: true,

      };


    case 'CLEAR_PROFILE':
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default UserReducer;
