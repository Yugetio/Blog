const initialState = {
  userData: !!localStorage['user-data'] ? JSON.parse(localStorage['user-data']) : {},
  loading: false,
  error: false
};


const UserReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'USER_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'USER_SUCCESS':

      return {
        ...state,
        loading: false,
        userData: action.payload
      };

    case 'USER_FAILURE':
      return {
        ...state,
        loading: false,
        error: true,
        userData: {}
      };


    case 'CLEAR_PROFILE':
      return initialState;

    default:
      return state;
  }
};

export default UserReducer;
