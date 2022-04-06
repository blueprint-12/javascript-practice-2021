// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object.
// obj = {key : value}; 객체는 key 와 value의 집합체이다.

// 1. Literals and properties
// obj 생성방법
//  1) 중괄호 이용해서 만들기 (basic) => object literal syntax 라고 부름
//  자바스크립트는 1번처럼 class가 없어도 obj를 생성할 수 있음
//  2) class를 템플릿으로 이용해서 new 키워드를 통해 만들기 => object constructor syntax 라고 부름
const obj1 = {
  // props
};
const obj2 = new Object();
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const cong = { name: 'cong', age: 4 };
print(cong); //인자로 cong이라는 객체를 넘겨줘서 print()를 호출할 때 간편하게 할 수 있음

// JS 는 dynamic clip(?) type language 라서 즉, 동적으로 타입이 runtime 때 결정되는 언어
// runtime: 프로그램이 동작할때
// -> 뒤늦게 하나의 프로퍼티를 추가할 수 있음
// 추가도 가능하고 삭제도 가능하다. 너무 동적이라서 이게 할때는 쉬운데 나중에 유지보수하기 어렵다.
cong.hasjob = true; //추가
delete cong.hasjob; //삭제

// 2. Computed properties 계산된 프로퍼티들
// 주의) key should be always string(키는 항상 string 타입으로 전달해야한다.)
// 마치 배열처럼 오브젝트의 값을 obj['key'] 의 형태로 가져오는 것을 말한다.
console.log(cong.name);
console.log(cong['age']); //computed properties
console.log(cong.hasjob); // undefined
cong['hasjob'] = true; //computed porperties 형식으로 추가가능
console.log(cong.hasjob); //true

// 두가지 형태가 있는데 적재적소가 언제일까?
// computed property 형태를 쓸 때에는 어떤 key를 사용할 지 모를때 쓰면 좋습니다.
// 아래는 예시, 원하는 키의 value를 받아오는 함수를 만들었다고 했을 때
// 사용자가 어떤 key를 입력하는 지 알 수 없기때문에 이떄 computed property 형식으로 쓴다.
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(cong, 'name'); //아까도 말했지만 인자로 보낼때는 string으로

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('clue', 30);
// 여기서 person4 를 또 만들고 싶은데 일일이 만들기 번거롭다.
// -> 이때 class를 대신해서 새로운 객체를 만드는 것이 바로 constructor Function

//4. Constructor Function
// 생성자 함수는 대문자로 표시하며 사용할때 클래스와 마찬가지로 new 키워드를 이용한다.
function Person(name, age) {
  //원래는 아래와 같은 형태였는데 this안에 새로운 객체를 만들고 그것을 리턴해주는 형태가 또 간략해짐
  // return {name = name , age = age };

  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
console.log(person4); //Person {name: 'clue', age: 30} 제대로 만들어짐!

// 5. in operator: property existence check (key in obj)
// in 오퍼레이터는 해당 obj안에 key가 있는지 없는지 확인할 수 있는 키워드(있으면 true, 없으면 false 반환)
console.log('name' in cong); //t
console.log('age' in cong); //t
console.log('nothing' in cong); //f
console.log(cong.nothing); //없는 prop에 접근하면 undefined 출력

//TIP: 이전 내용 삭제하고 싶으면 console.clear(); 해주면됨 -> 콘솔창에 console was cleared 뜸
console.clear();
// 6. for..in vs for ..of
// obj를 순회하면서 모든 key들을 받아오고 싶을 때 쓰면 좋음
for (key in cong) {
  console.log(key);
}
// for (value of iterable)
// for.. of 는 obj를 쓰는게 아니라 배열이나 리스트같이 iterable한 애들을
const arr = [1, 2, 3, 4];
//원래는 아래와 같이 순회해야 했다면 좀 더 간단하게 출력가능
/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */
// for..of 사용, 위의 for loop와 같은 기능 더 간결한 코드!
for (value of arr) {
  console.log(value);
}
console.clear();
// 7.Fun cloning
// 객체 복제하기
const user = { name: 'kang', age: '20' };
const user2 = user; //레퍼런스는 각각 생기지만 레퍼런스들이 같은 내용을 가리키고 있음
user2.name = 'gamza'; // 이렇게되면 user의 name도 gamza로 변하게됨
console.log(user.name); //gamza

//그렇다면 정말 객체를 복사하려면 어떻게 해야할까?
//old way 수동적으로 할당
const user3 = {}; // 빈 객체생성
for (key in user) {
  user3[key] = user[key]; // user의 모든 키를 user3의 키로 할당
}
console.log(user3);

//new way: Object.assign() 메소드 사용해서 clone하기
/*const user4 = {};
Object.assign(user4, user);*/
const user4 = Object.assign({}, user); // 윗줄보다 간략하게 clone가능
console.log(user4);

//another example ,  assign()메소드는 여러값을 인자로 받을 수 있었음 MDN참고
// 혹은 ctrl키 누르고 클릭하면 해당 메소드에 관한 정보가 나옴
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const fruit3 = { name: 'banana', weight: '2kg' };
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color); //blue
console.log(mixed.size); //big
console.log(mixed); //{color: 'blue', size: 'big', name: 'banana', weight: '2kg'}
// 결론: assign함수를 쓸 때, 뒤에 나온 객체가 앞의 객체와 같은 key를 갖는다면 덮어씌여진다.
