// Function
// - fundamental building block(함수의 다른표현) in the program
// - subprogram(함수의 다른 표현) can be used multiple times 여러번 재사용될 수 있다.
// - performs a task or calculates a value(한가지의 일을 처리하거나 값을 계산할 때 사용)

// 1. 함수 선언방식
// function name(param1, param2){body ... return; }
// one function === one thing (하나의 함수는 한 가지의 일만 처리해야한다.)
// 작명: 변수는 noun으로 작명했다면 함수는 doSomthing, command, verb 동사의 형태로 작명해야 한다.
// e.g) createCardAndPoint -> createCard, createPoint
// function is object in JS (함수는 JS에서 객체이다) -> 함수명 뒤에 dot(.)을 통해 속성값들을 확인할 수 있는게 증거

function printMessage(msg) {
  console.log(msg);
}
printMessage('hi');
// JS에는 type이 없기 때문에 인터페이스만 보고서는 어떤 타입을 반환하는지 매개변수로 어떤 타입을 받는지 알 수가 없다.
// 이를 보완하는 개념으로 나온 것이 바로 typescript이다.
// 공홈->playground에 가서 typescript 코드를 작성하면 오른쪽에 JS로 변환된 코드를 보여준다.
// typescript는 return 타입은 물론이고 매개변수의 타입까지 지정할 수 있다.

/* 아래는 TS로 함수를 정의한 모습
function log(message: string) :number {
    console.log(message);
    return 0;
}
*/

// 2. Parameters
// premitive parameters: passed by value 프리미티브 타입의 경우 매개변수로 전달되면 값자체로 전달이 되고
// obj parameters: passed by reference  객체 타입의 경우 매개변수로 전달되면 레퍼런스로 전달이 된다.
function changeName(obj) {
  obj.name = 'coder';
}
const kang = { name: 'kang' }; //obj 생성
changeName(kang); //changeName은 인자로 obj를 받음,
// obj의 값을 변경해도 바로 메모리에 적용되기 때문에 변경사항을 확인할 수 있다.
console.log(kang); // kang {name: 'coder'}인 객체 반환

// 3. Default parameters (added in ES6)
// 인자로 받아야할 값이 충족되지 않았을 때(전달X)의 기본값을 따로 지정해줄 수 있다
// 원래는 조건문을 통해서 했던 기능인데 따로 조건문을 달아주지 않아도 된다.
function showMessage(message = 'default', from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage(); //output: default by unknown

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // 배열 출력할 때 위처럼 for loop돌려도되지만'
  // 아래처럼 for of 를 이용하는 것이 더 좋다.
  for (const arg of args) {
    console.log(arg);
  }
  //방법은 또 있음, 함수형 언어를 이용해서 하기
  // forEach()를 사용
  args.forEach((arg) => console.log(arg));
}

printAll('one', 'two', 'three');

// 5. Local scope
// scope개념: 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
// 즉, 자식은 부모의 변수를 인자로 받아서 사용할 수 있지만 부모는 자식의 변수에 접근할 수 없음
// 함수 안에 다른 함수를 정의할 수 있음
let globalMessage = 'global'; // global variable
function prtMsg() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function anotherFunc(message) {
    let anotherMs = 'inner message';
    console.log(message);
  }
  // console.log(anotherMs); // 이건 호출안됨, 에러메세지 반환
}
prtMsg();

// 6.Return a value
// 모든 함수는 return이 들어가있는데 반환하는게 없는 함수는 return undefined가 생략되어 있는 것
// return키워드 -> 함수 종료
function sum(a, b) {
  return a + b;
}
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad code -아래와 같이 블럭 안에서 작성하게되면 가독성이 떨어진다.
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}
// good code
/* if와 else를 번갈아가며 사용하기보다는 조건이 맞지 않을때는 
 return;을 해서 빨리 함수를 종료하고 조건이 맞을 때만 필요한 로직을 아래와 같이 블럭 밖에 작성 */
function upgradeUser(user) {
  if (user.point <= 10) {
    return; //조건이 안맞으니까 함수 종료
  }
  //long upgrade logic...
}

// Function expression
// a function declaration can be called earlier than it is defined. (hoised)
// a function expression is created when the execution reches it.
//a function declaration(호이스팅 지원) vs a function expression 비교
const print = function () {
  //anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();

// 2. Callback function using function expression

// anonymous function(아래는 익명함수 사용)
const printYes = function () {
  console.log('yes');
};

// named function (여기서는 print라는 이름의 함수를 변수 printNo에 할당)
// 아래와 같이 expression에서 함수의 이름을 부여하는 경우는 디버깅을 할 때,
// + 디버깅의 스택 트레이스에 함수명이 나오게 하기위함
// + 함수 내부에서 자기 자신을 호출(이것을 recursion이라 부릅니다.)할 떄 사용하기 위함임
const printNo = function print() {
  console.log('no!');
  // print(); recursion -> 무한 호출이기 때문에 콜스택이 꽉차서 에러발생함
};

function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous (화살표 함수는 항상 익명함수이다. )
// 아래는 function expression
const simplePrint = function () {
  console.log('simplePrint!');
};
//위의 예시에서 {} 블록도 필요없고 function이라는 키워드도 필요없어진다. return도 필요없음
const simplePrintArw = () => console.log('simplePrint Arrow function ver');

// 아래는 같은 기능을 화살표함수와 함수표현식의 차이다.
// 화살표 함수는 배열이나 리스트에 활용하기 좋다.
// 한줄 짜리 코드라면 return과 {}블록을 생략해도 되지만 여러줄의 경우 {return }을 써줘야 한다.
const addArw = (a, b) => a + b;
const addFuncExpression = function (a, b) {
  return a + b;
};

// IIFE: Immediately Invoked Funciton Expression
//함수를 선언과 동시에 호출하는 표현식
(function hello() {
  console.log('IIFE');
})();

// 간단한 계산기 만들기

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      divide(a, b);
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('remainder', 7, 3));
