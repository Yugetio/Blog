import axios from 'axios';

class AuthService {

  signUp = ({ username, email, password}) => {
    return new Promise((resolve, reject) => {
      axios.post('/auth/register', {
        username,
        email,
        password
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      })
    })
  };

  signIn = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      axios.post('/auth/login', {
        email,
        password
      })
      .then(res => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      })
    })
  };

  checkToken = (token) => {
    return new Promise((resolve, reject) => {
      axios.get('/auth/checkToken', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      })
    })
  };

  checkExistUsername = (username) => {
    return new Promise((resolve, reject) => {
      return axios.get(`/auth/checkExistUsername?username=${username}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.response.data);
      })
    })
  };

}

export default AuthService;