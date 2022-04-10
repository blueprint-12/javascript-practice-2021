'use strict';

//Promise is a JavaScript obj for asynchronous operation.
// Promise를 공부할 때 key points 2가지
//1. state (상태) - '수행중, 성공, 실패'
// 해당 프로세스가 무거운 기능을 '수행 중'인지 아니면 해당 기능 수행이 다 완료되어
// '성공'했는지 '실패'했는지에 대한 상태(state)
//2. producer(정보 제공자)와 consumer(정보를 쓰는 소비자) 의 관점을 잘 이해하기

// Promise 객체의 state
// operation이 수행중일 때를 pending이라 함
// 해당 작동을 성공적으로 수행하게 되면 fulfilled(성공적으로 완료상태)
// 실패했을 경우, 에러를 만났을 경우 -> rejected(실패, 거부됨)

// 1.Producer (제공자)
// 프로미스는 클래스라서 new 키워드를 통해서 obj를 생성할 수 있음
// 유의 사항: 프로미스 객체가 만들어지면 내부 콜백함수인 executor가 자동적으로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work()
  console.log('doing something...');
  setTimeout(() => {
    // 성공시 resolve라는 콜백함수에 사용자 이름 전달
    // resolve('cong');
    // 실패시 reject 함수사용 -> 보통 error라는 객체를 통해서 값을 전달
    reject(new Error('no network!'));
  }, 2000);
});
// 프로미스 객체 안에서 heavy한 일을 하게 되는데
// 네트워크에서 데이터를 받아오거나 파일에서 큰 데이터를 읽어오는 과정은
// 시간이 오래걸림 이런 일을 동기적으로 처리하면 다음 코드가 실행되지 않기 때문에
// 시간이 좀 걸리는 일들은 비동기적으로 처리하는 것이 좋다.
// -> 네트워크 통신, 파일읽기 등 비동기처리로 하는 것이 good

// 2. Comsumers (사용자): then, catch, finally 를 통해 값을 받아올 수 있음
// .then() 프로미스가 정상적으로 수행이 되어서 resolve라는 콜백함수를 통해서
// 전달한 값이 value의 param으로 들어와서 전달됨

// then을 호출하게 되면 promise객체를 리턴하기 때문에
// .catch를 또 사용할 수 있음(이걸 promise chaning이라고 함)
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log('finally'));
// .fianlly 는 성공하든 실패하든 상관없이 무조건 마지막에 호출되어지는 아이
// 즉, 성공 실패 여부 상관없이 어떤 기능을 마지막에 실행하고 싶을 때 사용하면 된다.

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  // 네트워킄 성공시 1초있다가 1이라는 내용을 담은 promise를 전달
  setTimeout(() => resolve(1), 1000);
});
//.then()은 값을 바로 전달해도되고 또 다른 비동기인 promise객체를 전달해도 된다.
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error Hnadling
const getSun = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🌞'));
  });
const getMoon = (sun) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${sun} => 🌚`), 1000);
  });
const mix = (moon) =>
  new Promise((resovle, reject) => {
    setTimeout(() => resovle(`${moon} => 🌗`), 1000);
  });
getSun() // 프리티어가 then 코드를 한줄로 만들어줄텐데 그럴 때는 // 주석처리를 통해 아래와 같이 정렬이 가능하다.
  .then(getMoon)
  .then(mix)
  .then(console.log);
//   .then((son) => getMoon(son))
//   .then((moon) => mix(moon))
//   .then((result) => console.log(result));
// 위의 코드처럼 한가지 value만 받아와서 해당 함수에 같은 것을 전달할 경우
// 코드를 아래와 같이 생략할 수 있다.
// -> 심지어 콘솔로그의 인자역시 같아서 생략가능
