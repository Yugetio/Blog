import axios from 'axios';

class UserService {

  /**
  * @return { Object }, With fields _id, username, email, gravatar and [posts]
  */
  getProfile = () => {
    return new Promise((resolve, reject) => {
      axios.get('/user/profile')
      .then(({ data: { data } }) => {
        resolve(data);
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
  updatedProfile = ({ firstname, lastname }) => {
    return new Promise((resolve, reject) => {
      axios.put('/user/profile', {
        firstname,
        lastname
      })
      .then(({ data: {data}}) => {
        resolve(data);
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
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      })
    })
  };
}

export default new UserService();