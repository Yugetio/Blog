import axios from 'axios';

class AuthService {

  /**
   * @param { Object} payload, Fields must be string
   *
   * @return { Object }, With message field
   */
  signUp = ({username, email, password}) => {
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

  /**
   * @param { Object} payload, Fields must be string
   *
   * @return { Object }, With fields userId and token
   */
  signIn = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      axios.post('/auth/login', {
        email,
        password
      })
      .then(res => {
        localStorage['user-token'] = res.data.token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      })
    })
  };

  /**
   * @return { Object }, With field authenticate
   */
  checkToken = () => {
    return new Promise((resolve, reject) => {
      axios.get('/auth/checkToken')
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      })
    })
  };

  /**
   * @param { String } username
   *
   * @return { Object }, With fields status, statusText and other
   */
  checkExistUsername = (username) => {
    return new Promise((resolve, reject) => {
      return axios.get(`/auth/checkExistUsername?username=${username}`)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err.response);
      })
    })
  };

  logout = () => {
    return new Promise((resolve, reject) => {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('user-token');
      localStorage.removeItem('user-data');

      resolve();
    })
  }
}

export default new AuthService();