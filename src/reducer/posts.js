const initialState = {
  allPosts: [],
  post: {},
  popup: false,
  isLoaded: false,
  loading: false,
  error: false
};

const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'POST_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'POST_FEILURE':
      return {
        ...state,
        loading: false,
        error: true
      };

    case 'CREATE_POST':
      return {
        ...state,
        loading: false,
        isLoaded: true,
        allPosts: [...state.allPosts, action.payload]
      };

    case 'UPDATE_POST': {
      const index = state.allPosts.findIndex((post) => action.payload._id === post._id);

      return {
        ...state,
        loading: false,
        isLoaded: true,
        allPosts: [...state.allPosts.slice(0, index),
          action.payload,
          ...state.allPosts.slice(index+1)
        ]
      };
    }

    case 'DELETE_POST':
      return {
        ...state,
        loading: false,
        allPosts: state.allPosts.filter(({_id}) => _id !== action.payload)
      };

    case 'GET_ALL_POSTS':
      return {
        ...state,
        loading: false,
        isLoaded: true,
        allPosts: action.payload
      };

    case 'TOGGLE_POPUP_POST':
      return {
        ...state,
        post: {},
        popup: !state.popup
      };

    case 'SET_DATA_POST':
      return {
        ...state,
        post: action.payload
      };

    default:
      return state;
  }
};

export default postsReducer;