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
