import {
  login,
  registration,
  logout,
  requestAuth,
  successAuth,
  failureAuth
} from './auth'

import {
  getAllPosts
} from './posts';

import {
  getProfile,
  updatedProfile,
  deleteProfile
} from './user';


export {
  login,
  registration,
  logout,
  requestAuth,
  successAuth,
  failureAuth,
  getAllPosts,
  getProfile,
  updatedProfile,
  deleteProfile
};


// import {AuthService, PostService, UserService} from '../services';



// AuthService.signUp({
//   username: 'test_1132122',
//   email: 'e1xample1@exa1mple.com',
//   password: '123456'
// }).then(data => console.log(data));

// AuthService.signIn({
//   email: 'e1xample1@exa1mple.com',
//   password: '123456'
// }).then((data) => {
//   console.log(data);
// });

// AuthService.checkToken().then(data => console.log(data));

// AuthService.checkExistUsername('test_113222')
//   .then(data => console.log(data))
//   .catch((err) =>{
//     console.log(err)
//   });



// UserService.getProfile().then((data) => console.log(data));
// UserService.updatedProfile({
//   firstname: '12345',
//   lastname: '67890'
// }).then((data) => console.log(data));

// UserService.deleteProfile().then(data => console.log(data))

// PostService.getAllPost().then(data => console.log(data));
// PostService.createPost({
//   title: 'Test from local project',
//   text: 'text text text...'
// }).then((data) => console.log(data));
// PostService.getPost('5db050bb01fe1f0017a3edd1').then(data => console.log(data));

// PostService.deletePost('5db050bb01fe1f0017a3edd1').then(data => console.log(data));