class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'cong' && password === 'kang') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'cong') {
          resolve({ name: 'cong', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}
//1. 아이디와 비밀번호를 사용자로부터 받아온다.
//2. login을 하고 성공할 시 id를 인자로 보낸다.
//3. Roles 를 받아온다.
//4. 성공시, 사용자의 이름과 역할이 담긴 객체를 받아온다.

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password !');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a  ${user.role}`))
  .catch(console.log);

// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         alert(`hello ${userWithRole.name}, you have a ${userWithRole.role}`);
//       },
//       (error) => {
//         console.log(error);
//       },
//     );
//   },
//   (error) => {
//     console.log(error);
//   },
// );
