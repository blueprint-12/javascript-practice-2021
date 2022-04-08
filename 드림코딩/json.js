// jSON
// JavaScript Object Notation
// JSON인터페이스를 살펴보면 stringify와 parse API가 있는데
// stringify의 경우는 함수의 이름은 동일하지만 매개변수가 다른 것이 하나 더 있다. 이걸 오버로딩이라고 부른다.
// 오버로딩을 하면 각각다른 방식으로 호출이 가능하다.
// stringify()는 obj를 받아와서 string으로 변환해준다. 콜백함수(replacer?), 리플레이서는 배열형태 or 함수형태로 전달가능
// parse()는 string 을 obj로 변환해준다. 콜백함수(reviver?)

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
let json2 = JSON.stringify(['바나나', '애플']);

console.log(json);
console.log(json2); // ["바나나","애플"]
// 위의 결과가 배열처럼 보이지만 typeof(json2)하면 string이라고 뜸,
// JSON의 규격사항에 맞게 싱글쿼트가 아니라 더블쿼트로 요소가 들어간 것이 확인된다.

const lion = {
  name: 'cola',
  color: 'orange',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};
let json3 = JSON.stringify(lion);
// 결과: {"name":"cola","color":"orange","size":null,"birthDate":"2022-04-08T08:03:33.366Z"}
//유의사항: jump function는 포함되어 있지 않음 -> 함수는 obj에 있는 데이터가 아니기때문에 포함되지 않음
// 또한 JS에만 있는 특별한 데이터형인 symbol역시 포함되지 않는다.
console.log(json3);
console.clear();
/* 선택적으로, replacer를 함수로 전달할 경우 변환 전 값을 변형할 수 있고, 
배열로 전달할 경우 지정한 속성만 결과에 포함합니다. */

// stringfigy의 콜백함수를 배열형태로 지정해서 보내면 내가 원하는 항목만 불러올 수 있다.
json3 = JSON.stringify(lion, ['name', 'color', 'size']);
// stringify의 콜백함수를 함수형태로 하면 key와 value를 인자로 받는데
// 결과값에서 특이한 점이 있다면 가장 lion obj를 싸고있는 최상위 것이 맨 처음에 출력됨
json3 = JSON.stringify(lion, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'king' : value;
});
console.log(json3); //위의 return 값에서 삼항연산자를 통해 데이터값을 조작하는것도 가능하다
//{"name":"king","color":"orange","size":null,"birthDate":"2022-04-08T08:32:19.807Z"}
/*
key: , value: [object Object] // 최상위 객체 맨처음에 출력됨
json.js:43 key: name, value: cola
json.js:43 key: color, value: orange
json.js:43 key: size, value: null
json.js:43 key: birthDate, value: 2022-04-08T08:29:39.757Z 
*/
// 결론: 세밀한 작업을하고 싶을 때는 콜백함수를 쓰자

// 2. JSON to Object
// parse(json)
//제이슨 포맷을 객체로 만들때 유의점: 제이슨 -> 객체가 됐을 때 메소드가 포함되지 않았던 것을 기억하시면
// lion.jump() 는 제대로 작동하지만 obj.jump() 는 존재하지 않기 때문에 작동하지 않는 것을 명심하셈
console.clear();
const 제이슨 = JSON.stringify(lion);
const obj = JSON.parse(제이슨);
console.log(obj); //{name: 'cola', color: 'orange', size: null, birthDate: '2022-04-08T08:35:03.106Z'}
lion.jump();
// obj.jump(); //에러: Uncaught TypeError: obj.jump is not a function
console.log(lion.birthDate.getDate()); // 8, 여기서 birthDate는 obj임
// console.log(obj.birthDate.getDate()); // 에러 발생, 이유: JSON->obj화 한거라 여기서 birthDate는 string이라서그럼
// 그렇다면 콜백함수(reviver)를 통해 세밀하게 조정해서 JSON을 obj로 변환해보자
const obj2 = JSON.parse(제이슨, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  //key 명이 birthDate면 Date객체로 만들어주고 아닌 애들은 원래 value가져와서 쓰자!
  return key === 'birthDate' ? new Date(value) : value;
});
/*
key: name, value: cola
json.js:70 key: color, value: orange
json.js:70 key: size, value: null
json.js:70 key: birthDate, value: 2022-04-08T09:25:47.032Z
json.js:70 key: , value: [object Object] */
console.clear();
console.log(obj2.birthDate.getDate()); // 위에서 reviver콜백함수를 통해서 조작했기 때문에 이제는 정상 작동

const lion2 = {
  name: 'cola',
  color: 'orange',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};
lion2.jump();
