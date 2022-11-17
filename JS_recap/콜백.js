function checkMood(mood, goodCallback, badCallback) {
  if (mood === 'good') {
    goodCallback();
  } else {
    badCallback();
  }
}
function cry(mood) {
  console.log('action :: cry');
}
function sing() {
  console.log('action :: sing');
}
function dance() {
  console.log('action :: dance');
}
//콜백함수는 함수의 파라미터로 함수를 넘기는 것,
checkMood('good', sing, cry); // 함수표현식처럼 함수가 담긴 변수를 넘겨준다.

//단락회로 평가: truthy한 값과 falsy한 값이 있으면 뒤에는 평가하지않고 앞에만 평가하고 평가를 멈추는
//매커니즘을 활용한 방법

const getName = (person) => {
  //person은 객체
  //   if (!person) {
  //     return '객체가 아닙니다.';
  //   }
  //   return person.name;

  //위의 if 연산자를 단락회로로 변환하면
  //   return person && person.name;
  // person.name에 접근하지 않고 person이 undefined로 falsy한 값이기 때문에
  // undefined만 출력하고 평가를 끝낸다.

  //좀 더 응용하여 undefined나 null일 경우, 문자를 출력
  const name = person && person.name;
  return name || '객체가 아닙니다.';
};
let person = { name: '김감자' };
const name = getName(person);
console.log(name); //객체가 아닙니다.
// person 에  null값을 넣어주면
// person && 에서 앞이 falsy한 값이기 때문에 name에 null이 할당됩니다.
// 이 다음 name이 falsy한 값이기 때문에 뒤에있는 string("객체가 아닙니다.")값까지 접근하게 됩니다.
// truthy한 값에 접근하여 그 값을 반환합니다.

//조건문 업그레이드
function isKoreanFood(food) {
  //food === '비빔밥' || food === '불고기' || food === '떡볶이'
  //아래와 같이 조건식에 배열의 내장 메소드를 활용
  if (['비빔밥', '불고기', '떡볶이'].includes(food)) {
    return true;
  }
  return false;
}
const food1 = isKoreanFood('불고기');
console.log(food1); // true

// 음식의 타입에 따라 대표메뉴를 리턴하는 함수
const getMeal = (mealType) => {
  if (mealType === '한식') return '불고기';
  if (mealType === '양식') return '파스타';
  if (mealType === '중식') return '짜장면';
  if (mealType === '일식') return '초밥';
  return '굶기'; //아무것도 해당안될 경우
};

//위의 코드를 리팩토링해봅시다. 객체의 괄호표기법을 활용
const meal = {
  한식: '불고기',
  양식: '파스타',
  중식: '짜장면',
  일식: '초밥',
};

const getMeal2 = (mealType) => {
  return meal[mealType] || 굶기;
};
console.log(getMeal2('한식')); //불고기

function taskA(a, b, cb) {
  setTimeout(() => {
    //지역 상수 res
    const res = a + b;
    cb(res);
  }, 3000);
}
taskA(3, 5, (res) => {
  console.log(`A task result is ${res}`); // A task result is 8
});
console.log('동기 끝');

function taskB(a, b, cb) {
  setTimeout(() => {
    const res = a * b;
    cb(res);
  }, 2000);
}

taskB(3, 4, (res) => {
  console.log(`B task result is ${res}`);
});

function taskC(a, cb) {
  setTimeout(() => {
    const res = a ** 2;
    cb(res);
  }, 1000);
}
// taskC(2, (res) => {
//   console.log(`C task result is ${res}`);
// });

// function asyncAdd(a, b, cb) {
//   //asyncAdd 함수 안에 setTimeout 이라는 비동기 함수가 있고 그 안에 cb라는 콜백함수도 있다.
//   setTimeout(() => {
//     const res = a + b;
//     cb(res);
//   }, 3000);
// }
// asyncAdd(1, 3, (res) => console.log(res));

taskA(4, 5, (a_res) => {
  console.log('a_res', a_res);
  taskB(3, 4, (b_res) => {
    console.log('b_res', b_res);
    taskC(3, (c_res) => {
      console.log('c_res', c_res);
    });
  });
});

//😎 콜백함수 ver
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === 'number') {
      //성공? -> resolve
      resolve(number >= 0 ? '양수' : '음수');
    } else {
      //실패 -> reject
      reject('주어진 값이 숫자가 아닙니다.');
    }
  }, 2000);
}

isPositive(
  10,
  (res) => {
    console.log('성공적으로 실행됨 ', res);
  },
  (err) => {
    console.log('실패됨 ', err);
  },
); //2초 뒤, 성공적으로 실행됨 양수 라고 나옵니다.
// =============================================
//😎 Promise ver

// 인자로 받았던 콜백함수는 res, rej를 사용하기때문에 빼줘도 된다.
function taskA(a, b) {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res); //콜백함수를 res로 바꿔준다
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

// 콜백식으로 처리
// taskA(5, 1).then((a_res) => {
//   console.log('a_res', a_res);
//   taskB(a_res).then((b_res) => {
//     console.log('b_res', b_res);
//     taskC(b_res).then((c_res) => {
//       console.log('c_res', c_res);
//     });
//   });
// });

const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log('a_res', a_res);
  return taskB(a_res);
});

// 다른 작업 와라랄ㄹ라라

bPromiseResult
  .then((b_res) => {
    console.log('b_res', b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log('c_res', c_res);
  });

const obj1 = { name: 'alex' };
const copiedobj = { ...obj1 };

obj1.name = 'changed alex';
console.log(copiedobj);

//ES8 async await

function hello() {
  return 'hello';
}

//함수 앞에 async 키워드를 붙여주면 함수의 리턴값이 Promise임을 알 수 있다.
// 해당 키워드를 붙여주면 Promise를 리턴하는 비동기 처리 함수가 된다.
function delay(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

async function helloAsync() {
  // return delay(3000).then(() => {
  //   return 'hello async';
  // });
  await delay(3000); // await키워드를 비동기 처리 함수 앞에 붙이면 비동기함수가 동기처럼 동작하게 할 수 있다.
  return 'hello async';
}
helloAsync().then((res) => {
  console.log(res);
}); //3초 뒤 hello async 출력

async function main() {
  // helloAsync().then((res) => {
  //   console.log(res);
  // }); //3초 뒤 hello async 출력

  const res = await helloAsync();
  console.log(res);
}

main();
