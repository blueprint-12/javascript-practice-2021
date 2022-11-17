// callback, promise, async await 잡아먹어봅시다.

const { c } = require('tar');

//1️⃣Promise 사용법
{
  const pr = new Promise((res, rej) => {
    //res는 성공시 실행함수
    //rej는 실패시 실행함수
    //어떤 일이 완료된 이후에 일어나는 함수를 callback함수라고 합니다.
  });
  // new Promise가 반환하는 객체는 state: pending과 result: undefined를 프로퍼티로 갖습니다.
}

{
  // 판매자의 코드
  // 성공 시
  const pr = new Promise((resolve, reject) => {
    setTimeout(resolve('ok'), 3000);
  });
  // 실패 시

  const rejectedPr = new Promise((resovle, rejecte) => {
    setTimeout(() => rejecte(new Error('promise rejected')), 3000);
  });
}

{
  //소비자의 코드
  pr.then(
    function (result) {},
    function (err) {},
  );

  pr.then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });

  // finally는 실패 성공 여부와 상관없이 항상 실행된다.
  pr.then(function (result) {})
    .catch(function (err) {})
    .finally(function () {
      console.log('=====주문 끝======');
    });
}
{
  const pr = new Promise((res, rej) => {
    setTimeout(() => rej(new Error('비동기 처리 실패')), 3000);
  });
  console.log('시작');
  pr.then((result) => console.log(result))
    .catch((err) => console.log(err))
    .finally(() => {
      console.log('끝');
    });
  // 시작 -> 비동기 처리 완료 -> 끝
}

{
  // 프로미스 없이 사용하기
  const f1 = (callback) => {
    setTimeout(function () {
      console.log('1번 주문');
      callback();
    }, 1000);
  };

  const f2 = (callback) => {
    setTimeout(function () {
      console.log('2번 주문');
      callback();
    }, 3000);
  };

  const f3 = (callback) => {
    setTimeout(function () {
      console.log('3번 주문');
      callback();
    }, 2000);
  };

  console.log('주문 시작^^');
  f1(function () {
    f2(function () {
      f3(function () {
        console.log('작업 끝!');
      });
    });
  });

  // 결과 주문시작 -> 1번 -> 2번-> 3번-> 작업 끝
}
{
  const f1 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('1번 주문 완료');
      }, 1000);
    });
  };
  const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej(new Error('에러란다.'));
      }, 3000);
    });
  };
  const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('3번 주문 완료');
      }, 2000);
    });
  };

  //async await으로 작성하기
  async function order() {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
  }

  order();

  console.log('작업 시작');
  // 비동기 처리를 직렬로 처리하기
  // 프로미스 체이닝
  //   f1()
  //     .then((res) => f2(res))
  //     .then((res) => f3(res))
  //     .then((res) => console.log(res))
  //     .catch(console.log)
  //     .finally(() => {
  //       console.log('모든 작업이 완료되었습니다.');
  //     });
  //작업 시작 -> 1번 -> 2번 -> 3번 ->모든 작업이 완료되었습니다.

  // 2번에서 자체적으로 res->rej 로 에러를 내면 3번 작업은 건너뛰고 finally 구문이 실행되고 종료된다.
  // 총 6초가 걸리는 비동기 처리인데 이를 동시에 실행하려면 Promise.all메소드를 쓰면 된다.
  // Promise.all([]); 함수들을 하나의 배열로 받는다.
  // 그리고 후속 처리 메소드를 써준다(then. catch, finally)

  // 걸리는 시간은 console.time("x")과 console.timeEnd("x");를
  // 활용하면 알 수 있다. 내부 x는 아무 변수명으로 써주면 된다.

  console.time('x');
  Promise.all([f1(), f2(), f3()])
    .then((res) => {
      console.log(res);
      // 성공 결과를 담은 배열이 반환된다. 전체비동기 처리가 정상적으로 됐을 경우!
      console.timeEnd('x'); // x: 3458.88 ~ ~ mx 원래는 6초걸리던게 3초만에 완료
    })
    .catch((err) => console.log(err)); //2번에 rej로 실패했을 경우는, rejected된 프로미스와 에러 result를 반환한다.
  //즉, all은 하나라도 실패했을 경우, 결과를 아예 안보여줄때 사용하면 좋다.
  //결과가 다 성공되어 다 보여주는 경우나 아예 하나라도 누락되면 안보여주는 용도로
}
// Promise.race([])
// all과의 차이점: all은 모든 작업이 완료될 때까지 기다리지만
// race는 말 그대로 '경주'처럼 비동기 작업 중 하나라도 1등으로 완료되면 작업이 끝납니다.
// 사용예시: 용량이 큰 이미지를 업로드하는데 그 중에 하나라도 업로드되면 그 이미지를 보여주는 식으로 사용

//🤸‍♀️async & await(ES8)
// 프로미스 체이닝으로 연결하는 것보다 가독성이 좋아진다.
// 함수 앞에 async 키워드를 붙여주면 항상 Promise객체를 반환한다.

{
  async function getName() {
    // return 'cong';
    // return Promise.resolve("alex") 여도 이 프로미스 값을 그대로 쓴다.
    //함수 내부에서 에러가 발생하면 reject를 사용하여 에러를 반환합니다.
    throw new Error('err...');
  }
  //console.log(getName()); // Promise(fullfulled, 'cong')

  getName().catch((msg) => {
    console.log(msg); // err... 라는 에러 메세지가 잡힌다.
  });
}
// await 키워드
// await 키워드 옆에는 프로미스객체가 오고 프로미스가 처리될 때까지 기다립니다.
// async 함수 내부에서만 사용할 수 있다.
{
  function getName(name) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(name);
      }, 1000);
    });
  }

  async function showName() {
    //result에 getName 에서 resolve된 값을 기다렸다가 넣어주는 것
    const result = await getName('동글이');
    console.log(result); // 1초 후, 동글이
  }

  showName();
}
