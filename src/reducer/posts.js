const initialState = {
  allPosts: [],
  post: {},
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

    // case 'POST_SUCCESS':
    //   return {
    //     ...state,
    //     request: false,
    //   };

    case 'POST_FEILURE':
      return {
        ...state,
        loading: false,
        error: true
      };

    case 'GET_ALL_POSTS':
      return {
        ...state,
        loading: false,
        isLoaded: true,
        allPosts: action.payload
      };

    default:
      return state;
  }
};

export default postsReducer;

// + getAllPost

// createPost
// getPost
// updatePost
// deletePost