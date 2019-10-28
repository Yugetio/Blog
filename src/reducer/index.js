import authReducer from './auth';
import posts from './posts';

const reducer = (state, action) => {
  return {
    auth: authReducer(state, action),
    posts: posts(state, action)
  };
};

export default reducer;