import axios from 'axios';
import AuthService from './auth';

class UserService {

  /**
   * @return { Object }, With fields _id, username, email, gravatar and [posts]
   */
  getProfile = () => {
    return new Promise((resolve, reject) => {
      axios.get('/user/profile')
      .then(({data: {data}}) => {
        const user = _transformUser(data);
        localStorage['user-data'] = JSON.stringify(user);

        resolve(user);
      })
      .catch(err => {
        reject(err);
      })
    })
  };

  /**
   * @param { Object} payload, Fields must be string
   *
   * @return { Object }, user's profile
   */
  updatedProfile = ({firstname, lastname}) => {
    return new Promise((resolve, reject) => {
      axios.put('/user/profile', {
        firstname,
        lastname
      })
      .then(({data: {data}}) => {
        const user = _transformUser(data);
        localStorage['user-data'] = JSON.stringify(user);

        resolve(user);
      })
      .catch(err => {
        reject(err);
      })
    })
  };

  /**
   * @return { Object }
   */
  deleteProfile = () => {
    return new Promise((resolve, reject) => {
      axios.delete('/user/profile')
      .then(res => {
        AuthService.logout();
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      })
    })
  };
}

function _transformUser(data) {
  return {
    id: data._id,
    firstname: data.firstname ? data.firstname : null,
    lastname: data.lastname ? data.lastname : null,
    email: data.email,
    avatar: data.gravatar,
    posts: data.posts
  }
};

export default new UserService();