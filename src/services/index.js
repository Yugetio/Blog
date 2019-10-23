import axios from 'axios';
import AuthService from './auth';

axios.defaults.baseURL = 'https://rest-api-sandbox-ds.herokuapp.com/api/v1';

// const token = localStorage.getItem('user-token');
// if (token) {
//   axios.defaults.headers.common['Authorization'] = token;
// }

export {
  AuthService
};
