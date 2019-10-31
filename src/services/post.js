import axios from 'axios';

class PostService {

  /**
   * @return { Array }, Array with objects
   */
  getAllPost = () => {
    return new Promise((resolve, reject) => {
      axios.get('/posts')
      .then(({ data:{data} }) => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      })
    });
  };

  /**
   * @param { Object }, Fields must be string
   * @return { Object }, With fields _id, title, text and author
   */
  createPost = ({ title, text }) => {
    return new Promise((resolve, reject) => {
      axios.post('/posts',{
        title,
        text
      })
      .then(({ data:{data} }) => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      })
    });
  };

  /**
   * @param { String } id
   * @return { Object }, With fields _id, title, text and author
   */
  getPost = (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`/posts/post/${id}`)
      .then(({ data:{data} }) => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      })
    });
  };

  /**
   * @param { String } id
   * @param { Object } payload, Fields must be string
   * @return { Object }, With fields _id, title, text and author
   */
  updatePost = (id, {title, text}) => {
    return new Promise((resolve, reject) => {
      axios.put(`/posts/post/${id}`, {
        title,
        text
      })
      .then((res) => {
        resolve(res.data.data);
      })
      .catch(err => {
        reject(err);
      })
    });
  };

  /**
   * @param { String } id
   * @return { Object }, With status, statusText and message in {data}
   */
  deletePost = (id) => {
    return new Promise((resolve, reject) => {
      axios.delete(`/posts/post/${id}`)
      .then((res) => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      })
    });
  };

}

export default new PostService();