// async & await ES8(EcmaScript2017) 추가

//비동기를 편하게 보단 promise 객체를 사용하기 편하게 만들어줍니다.

//async : 함수 앞에 붙이는 키워드며 항상 프로미스를 반환합니다. 프라미스가 아닌 값이라도 감싸서 반환을 해줍니다.
{
  async function myFunc() {
    return '프라미스 인가요?'; //프라미스 아닌 값
  }

  myFunc().then((result) => {
    console.log(result);
  });
}

//await : async의 짝궁으로 (async 없이는 사용하지 못합니다.)
// async 함수 내부에서만 동작하며
// await는 프라미스가 처리될 때까지 기다렸다가 그 이후에 결과를 반환합니다.

//즉, await을 만나면 실행이 잠시 중단되었다가 프라미스 처리 후에 실행을 재개한다.
// await을 쓰면 함수 실행을 기다리게 한다.

{
  async function myFunc() {
    let prom = new Promise((resolve, reject) => {
      setTimeout(() => resolve('완료'), 1000);
    });
    // console.log(prom);

    let result = await prom;
    // console.log(prom);
    console.log(result); //then() 이라는 후처리함수를 쓰지 않아도, 1초 후에 완료!가 콘솔에 찍힌다.
  }

  myFunc(); //async의 영향으로 promise 객체와 result 인 완료가 반환된다.
}
// 에러 핸들링
{
  const f1 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('f1 주문 완료');
      }, 1000);
    });
  };
  const f2 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('f2 주문 완료');
      }, 1000);
    });
  };
  const f3 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('f3 주문 완료');
      }, 1000);
    });
  };
  // 기존 프로미스 방법
  // f1()
  //   .then((msg) => f2(msg))
  //   .then((msg) => f3(msg))
  //   .then((msg) => console.log(msg))
  //   .catch((err) => console.log(err))
  //   .finally(() => console.log(`오더 완료!`));
}
