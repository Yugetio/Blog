const postsReducer = (state, action) => {
  if (state === undefined) {
    return {
      allPosts: [],
      post: {
        title: '',
        text: ''
      },
      isLoaded: false,
      error: false
    };
  }

  switch (action.type) {
    case 'REQUEST_POST':
      return {
        ...state.posts,
        request: true
      };

    case 'SUCCESS_POST':
      return {
        ...state.posts,
        request: false,
      };

    case 'FEILURE_POST':
      return {
        ...state.posts,
        request: false,
        error: true
      };

    case 'GET_ALL_POSTS':
      return {
        ...state.posts,
        request: false,
        isLoaded: true,
        allPosts: action.payload
      };

    default:
      return state.posts;
  }
};

export default postsReducer;

// + getAllPost

// createPost
// getPost
// updatePost
// deletePost