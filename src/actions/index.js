import { AuthService } from '../services';

const authService = new AuthService();

// authService.singUp({
//   username: 'test_2',
//   email: 'example@example.com',
//   password: '123456'
// });

// authService.singIn({
//   email: 'example@example.com',
//   password: '123456'
// }).then(({ token }) => {
//   authService.checkToken(token)
// });

authService.checkExistUsername('first')
.catch((err) =>{
  console.log(err.status)
});

