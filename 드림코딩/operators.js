// 1. String concatenation
// + 기호를 사용해서 문자열과 문자열을 결합
console.log('my' + 'cat'); //mycat
console.log('1' + 2); //12
console.log(`string literals: 1 + 2 = ${1 + 2}`); //string literals: 1 + 2 = 3
// 싱글쿼트(')가 인식되지 않을 때는 앞에 \(백슬래쉬)입력해야 정상출력
// -> 이 경우는 ''(작은 따옴표 사이에 '싱글쿼트를 넣을 때 해당)
// \n 새로 줄바꿈, \t tab키
console.log("cong's book\thi\nnice to meet you");

// 2.Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder, 나누고 나머지값
console.log(2 ** 3); //exponentiation //지수표시 2의 3승표현

// 3. Increment and decrement operators( ++ , --)
// 증감연산자 전위(pre, 계산 -> 할당), 후위(post 할당-> 계산)
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;  업데이트 먼저, 2+1 연산먼저라는 소리
// preIncrement = counter; 3을 pre에 할당
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter; 할당 2를 post 에 넣음
// counter = counter + 1; 업데이트
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
const postDecrement = counter--;

// 4. Assignment operators(=, 할당연산자)
let x = 3;
let y = 6;
x += y; // x = x + y; 반복되는 x를 생략해서 표현한 식
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators (비교 연산자)
console.log(`<,<=, >, >=`);

// 6. Logical operators(논리연산자): ||(or), &&(and), !(not)
// 논리연산자 ||(or)에서 중요한 점이 있는데 바로 연산을 비교할 때,
// 앞에서 true 가 나오면 뒤의 연산을 아예 실행하지 않고(나머지 데이터를 보지않아도 됨 이미 true가 하나 나왔기 때문에) true반환 한다는 점이다.
// 즉, 연산이 복잡하고 헤비한 것을 앞쪽에 배치하는 것은 지양해야 한다. 앞에서 true가 안나왔을 때 마지못해 실행해야 하기 때문에(expression 이나 함수는 뒤에 배치)

const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value -> and연산자는 맨 앞에서 false를 발견하면 뒤에 나머지 연산을 하지않고 false를 반환한다.
// 그렇기 때문에 or과 마찬가지로 heavy한 연산을 뒤에 배치하는 것이 좋다.
console.log(`and: ${value1 && value2 && check()}`);

// and 연산자 활용 -> often used to compress long if-statement
// nullableObejct && nullableObject.somthing (아래의 if문과 같은 작동을 한다.)
// 해석하면 null일 수 있는 객체가 null이 아니라면 nullableObject.something을 실행
/*
if (nullableObject != null) {
  nullableObject.somthing;
}
*/

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('🍥');
  }
  return true;
}

// !(not) not연산자
console.log(!value1); //value1은 원래 false이지만 -> not연산자와 결합하여 true가 됨

// 7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion(타입을 변경해서 검사)
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false
// ===strict equality, no type conversion(타입을 신경써서 즉, 타입을 자동으로 변환하지않고 타입까지 확인)
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); //true

//obj equality by reference
// 객체의 동일성 여부를 확인할 때 레퍼런스를 기준으로 해야한다.
const kang1 = { flower: 'rose' }; //kang2와 같은 값을 가지고 있는 것처럼 보이지만 각각 다른 ref를 가리키고 있음
const kang2 = { flower: 'rose' };
const kang3 = kang1; // kang1의 ref를 kang3에 할당 즉, 연결 둘 다 같은 ref를 참조하고 있음
console.log(kang1 == kang2); // false
console.log(kang1 === kang2); // false
console.log(kang1 === kang3); // kang1 과 kang3의 ref가 같기 때문에 true

//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true, loose일때, null과 undefined 는 같은 것으로 간주된다.
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
// if문(state)  소괄호의 state가 true면 {}블럭 안의 내용을 실행하게 된다.
// if 나 else if 의 조건에 아무것도 해당하지 않는다면 else구문 실행
const name = 'kong';
if (name === 'kong') {
  console.log(`welcome, ${name}`);
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary opeartor: ? (삼항연산자)
// condition ? value1(true일때) : value2(false일때);
console.log(name === 'kong' ? 'yes' : 'no');

// 10.Switch statement
// use for multiple if checks (else if를 여러개 쓸 경우라든가)
// use for enum-like value check
// use multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away IE');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('I luv u ');
    break;

  default:
    console.log('same all');
    break;
}
// 만약에 실행하는 코드의 내용이 같을 경우는 중복으로 쓸 필요없이 케이스를 연달아써서 묶어주면 된다.
/*  case 'Chrome':
    case 'Firefox':
    console.log('I luv u ');
    break;  */

// 11. Loops
// while loop, while the conditions is truthy,
// body code is executed.
let num = 3;
while (num > 0) {
  console.log(`while: ${num}`);
  num--; //i감소
}
// do-while loop, body code is executed first,
// then check the condition.
// do while의 경우는 조건에 상관없이 무조건 do 에 있는 body code를 실행한다.
// block을 먼저 실행하고 조건을 확인하고싶다면 do-while을 사용하고 조건문이 맞을 때만 실행하고 싶다면 while문을 사용해야 한다.
do {
  console.log(`do while: ${num}`);
  num--;
} while (num > 0);

// for loop, for(begin; condition; step)
// 얘는 기존에 존재하는 변수를 할당해서 쓴 거
for (let i = 3; i > 0; i--) {
  console.log(`for ${i}`);
}
// 얘는 블럭 안에 let i 라는 지역변수를 선언해서 사용한 것
for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

//nested loops
// for문을 중첩해서 쓸 수 있지만 O(n^2) n의 2승이다.//알고리즘 시간복잡도 얘기하시는 듯, 이렇게 쓰는 것은 CPU에 좋지않다.
// 즉 , 되도록이면 피하는 것이 좋다.
/*for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
*/

// break(루프끝내기), continue(하나만 건너뛰고 다시함)
//Q1.iterate from 0 to 10 and print only event numbers(use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`q1. ${i}`);
  }
}
//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
