'use strict';
// JS의 함수는 매개변수를 가질 수 있음
// 함수의 매개변수로 함수를 전달할 수도 있음

// 자바스크립트의 콜백함수는 필요한 매개변수만 받아서 사용할 수 있음
// 명시되어있는 매개변수를 전부쓰지 않아도 된다는 소리
// 대표적인 예로 Array.forEach() 의 경우, forEach는 콜백함수를 가지고 있는데
// 매개변수로 value, index, array 를 받습니다.
// 여기서 array 는 배열 전체를 반환해주는 것으로 굳이 사용하진 않고
// value 와 index만 자주 쓴다고 함

const 테스트 = function (콜백함수) {
  for (let i = 0; i < 5; i++) {
    콜백함수(i);
  }
};

const 함수 = function (콜백함수의_매개변수) {
  console.log(`${콜백함수의_매개변수}번째 안녕하세여`);
};
테스트(함수);
/* 결과: 
0번째 안녕하세여
1번째 안녕하세여
2번째 안녕하세여
3번째 안녕하세여
4번째 안녕하세여
*/

const 테스트2 = function (배열, 콜백함수) {
  for (const 값 of 배열) {
    콜백함수(값);
  }
};
테스트2([22, 412, 453, 23], 함수);
/*
결과: 
22번째 안녕하세여
412번째 안녕하세여
453번째 안녕하세여
23번째 안녕하세여
*/
const 배열 = [223, 135, 4234, 23, 3];
배열.forEach((value, index) => {
  console.log(`${index} 번째의 값은 ${value} 입니다.`);
});

/* 
결과:
0 번째의 값은 223 입니다.
callback2.js:45 1 번째의 값은 135 입니다.
callback2.js:45 2 번째의 값은 4234 입니다.
callback2.js:45 3 번째의 값은 23 입니다.
callback2.js:45 4 번째의 값은 3 입니다.
*/

// filter() 콜백함수의 return값이 true인 요소를 담아 새로운 배열을 반환한다.
// 콜백함수의 return값을 조작함으로써 원하는 값만 담은 배열을 새롭게 가질 수 있다.

const filteredArr = 배열.filter(function (value, index) {
  return value % 2 === 0;
});
console.log(filteredArr); // [4234]
// 이렇게 return 값이 true인 조건을 value를 2로 나눴을 때 나머지가 0 인애 로 설정하면
// 짝수만 담은 새로운 배열을 가질 수 있음
// 재할당하고 싶으면 변수 '배열'을 let으로 하고 하면됨
// 근데 나는 재할당하고 싶지안흥ㅁ ㅎ ㅋㅎ
// const filterdArr를 새로 만들었음

console.log(
  배열.filter(function (value, index) {
    return false;
  }),
);
// 결과: 빈배열 리턴

// 간단정리 for vs  forEach vs map
// for은 단순반복 중간에 break를 만나면 멈춤
// forEach 배열순회 break 불가
// map 역시 배열순회 break 불가 forEach와의 차이점: 새 배열을 반환

const arr = [1, 2, 3, 4, 5];
const myFilter = function (배열, callback) {
  const output = [];
  for (let i = 0; i < 배열.length; i++) {
    const element = 배열[i];
    if (callback(element, i, 배열)) {
      output.push(element);
    }
  }
  return output;
};
console.log(myFilter(arr, (value) => value % 2 === 0));

const myForEach = function (배열, 콜백함수) {
  for (let i = 0; i < 배열.length; i++) {
    const element = 배열[i];
    콜백함수(element, i, 배열);
  }
};
myForEach([11, 23, 153, 42, 3], function (e, index, arr) {
  console.log(`${e} , ${index}, ${arr}`);
});

arr.forEach((element) => console.log(`${element}`));
const filterd = arr.filter((element) => element % 3 === 0);
console.log(filterd);
