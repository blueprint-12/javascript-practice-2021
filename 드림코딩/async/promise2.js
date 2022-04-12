// Promise가 실행하는 콜백함수에 인수를 넘길 수도 있다. 그러기 위해선 Promise 객체를 반환하는
// 함수를 정의하여 그 함수의 인수에 원하는 값을 넘기면 된다.

//예제: 비동기 처리로 상품에 대한 지불 금액을 입력한 후에 잔액을 표시하는 프로그램
// Promise가 실행하는 콜백함수에 budget이라는 인수를 넘겨 사용하도록 처리

function buySomething(name, budget) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let payment = parseInt(prompt(`${name}님, 얼마를 지불하시겠습니까?`));
      let balance = budget - payment;
      if (balance >= 0) {
        console.log(
          `${payment}원을 지불하셨습니다. ${name}님의 남은 예산은 ${balance}원 입니다.`,
        );
        resolve(balance);
      } else {
        reject(`잔액이 부족합니다. ${name}님의 잔액은 ${budget}원 입니다.`);
      }
    }, 1000);
  });
}
/*
비동기 처리 직렬로 연결 예제
buySomething(2000) //
  .then((balance) => {
    return buySomething(balance);
  })
  .then((balance) => {
    return buySomething(balance);
  })
  .catch(console.log);
*/
// 비동기 처리 병렬로 연결 예제
Promise.race([
  buySomething('김감자', 1000),
  buySomething('황구링', 2000),
  buySomething('파이리', 500),
]) //
  .then((balance) => {
    console.log(balance);
  })
  .catch(console.log);
/*
200원을 지불하셨습니다. 김감자님의 남은 예산은 800원 입니다.
800
1000원을 지불하셨습니다. 황구링님의 남은 예산은 1000원 입니다.
30원을 지불하셨습니다. 파이리님의 남은 예산은 470원 입니다.*/

function getData() {
  return new Promise((resolve, reject) => {
    resolve('hi it worked !');
  });
}
/*
getData().then(
  (result) => {
    console.log(result);
    throw new Error('Error in then()');
  },
  (err) => {
    console.log('then error : ', err);
  },
);
*/

getData() //
  .then((result) => {
    console.log(result); // hi
    throw new Error('Error in then()');
  })
  .catch((err) => console.log('then error: ', err));
//결과: then error:  Error: Error in then()