'use strict';

const obj1 = {
  name1: 'wonhee',
  gender: 'female',
  age: 27,
  dosomething: function (name) {
    console.log(name);
  },
};
const { name1, gender, age, dosomething: doFunc } = obj1;
console.log(name1, gender, age, doFunc);
//객체는 배열과 다르게 key명은 꼭 동일시 해줘야하고 변수명을 바꾸고 싶다면 dosomething: doFunc로 바꿀 수 있다.
doFunc('원희');

//🔥아래는 destructing과 관련 없음 단순 궁금증: map1의 결과는 왜 다른 console.log()과 실행했을 때 같이 안나올까?
//흠.. map함수만 따로 호출하면 console.log()가 없더라도 잘 출력되는데
// 왜 아래와 같이 여러 개를 출력하면 map1함수 결과 값이 출력되지 않을까?
function map1(a, d, f, g, c) {
  let result = [a, d, f, g, c].map((n) => {
    return n * 2;
  });
  return result;
}

console.log('end');
map1(1, 2, 3, 4, 5);
console.log('end');
