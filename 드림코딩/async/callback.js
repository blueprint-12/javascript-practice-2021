'use strict';

// JavaScript is synchronous. 자바스크립트는 동기적이다.
// Execute the code block by after hoisting.
// 그 말은,호이스팅이 된 이후부터 순서에 맞춰서 동기적으로 실행된다는 말(정해진 순서대로 실행)
// hoisting: var, function declaration var와 함수선언이 자동적으로 가장 위로 올라가는 것
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
// 결과 1,3,2
// setTimeout은 대표적인 비동기 브라우저 내장 api입니다.
// 자바스크립트 엔진은 코드를 가장 위부터 아래로 순서에 맞춰 실행함 JS가 해당 API(setTimeout)를 만나면
// 브라우저에게 요청을 보내게 됩니다. 그리고 응답을 기다리지않고 바로 3을 출력하는 코드로 넘어가게 되죠

console.clear();
// callback function?
// 콜백함수란 파라미터로 함수를 전달받아, 함수의 내부에서 실행하는 함수이다.
// 콜백함수 사용원칙: 익명함수 사용, 인자로 전달할때는 함수의 이름만 넘기기
// 그렇다면 콜백은 비동기일때만 사용할까? no
// 2가지로 나눠집니다.

// Synchronous callback 동기 콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback 비동기 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

//콜백지옥 예제

// back-end가 옛날에 만들어져서
// 사용자의 역할(Roles)을 또 따로 서버에 요청해서 받아오는 설정

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'cong' && password === 'kang') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'cong') {
        onSuccess({ name: 'cong', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}
//1. 아이디와 비밀번호를 사용자로부터 받아온다.
//2. login을 하고 성공할 시 id를 인자로 보낸다.
//3. Roles 를 받아온다.
//4. 성공시, 사용자의 이름과 역할이 담긴 객체를 받아온다.

// 해당 클래스를 사용해서 back-end와 통신한다.
const userStorage = new UserStorage();
// 브라우저API를 통해서 사용자로부터 값을 받아온다.
const id = prompt('enter your id');
const password = prompt('enter your password !');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`hello ${userWithRole.name}, you have a ${userWithRole.role}`);
      },
      (error) => {
        console.log(error);
      },
    );
  },
  (error) => {
    console.log(error);
  },
);
// 콜백 체인의 문제점: 비즈니스 로직을 한번에 알아보기 어렵다.
// 에러가 발생해도 어디서 발생하는 지 알기 어렵다.
// 코드 가독성이 떨어진다.
