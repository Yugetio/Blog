import axios from 'axios';
import AuthService from './auth';
import UserService from './user';
import PostService from './post';

axios.defaults.baseURL = 'https://rest-api-sandbox-ds.herokuapp.com/api/v1';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export {
  AuthService,
  UserService,
  PostService
};
