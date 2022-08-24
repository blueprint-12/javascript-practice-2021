// async & await
// clear style of using promise (깔끔하게 프로미스를 사용할 수 있는 방법)
// 항상 async와 await을 쓰는 것은 아니고 상황마다 다름

// promise 객체: 이 객체를 가지고 있고 그 뒤에 .then()이라는 콜백함수만 등록해놓으면 너가 요청할때 이걸 실행해주겠다고
// 약속하는 것
// MDN 설명: Promise는 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 대리자로,
// 비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있습니다.
// 프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있습니다.
// 다만 최종 결과를 반환하는 것이 아니고, 미래의 어떤 시점에 결과를 제공하겠다는 '약속'(프로미스)을 반환
const { reject } = require('async');

// 1. async
function fetchUser() {
  return new Promise((resolve, reject) => {});
}
const user = fetchUser(); //만약에 해당 부분을 비동기 처리하지않으면 유저는 10초를 기다려야함 동기처리이기 때문에
console.log(user);
