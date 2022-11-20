//ES6 디폴트 인자 값
//아무런 인자도 넘기지 않았을 때 디폴트 인자 값이 a, b에 각각 적용되었지만 args배열에는 원소가 하나도 없다.
//그런데 undefined 인자를 명시적으로 넘기면 args배열에도 값이 undefined인 원소가 추가되는데 여기에 해당하는 디폴트 인자 값과는 다르다.

function foo(a = 42, b = a + 1) {
  console.log(arguments.length, a, b, arguments[0], arguments[1]);
}
foo();
foo(10);
foo(10, undefined);
foo(10, null);

// 0 42 43 undefined undefined
// 1 10 11 10 undefined
// 2 10 11 10 undefined
// 2 10 null 10 null

//ES6 디폴트 인자 값이 args배열 슬롯과 이에 대응하는 인자 값 간의 불일치를 초래하는 것은 사실이지만 이전 버전
//ES5에서도 똑같은 불일치는 교묘하게 발생한다.
{
  function foo(a) {
    a = 42;
    console.log(arguments[0]);
  }
  foo(2); //42 연결된다
  foo(); // undefined 연결되지 않는다
}
// arguments 배열은 비 권장 요소( ES6 부터는 ...레스트 인자를 권장)
// arguments 배열은 ES6 이전까지 함수에 전달된 인자들을 배열 형태로 추출할 수 있는 유일한 방법이었다.
// 주의사항인 인자와 이 인자에 해당하는 argument 슬롯을 동시에 참조하지 말 것 만 준수하면 안전하다.
{
  function foo(a) {
    console.log(a + arguments[1]); //안전
  }
  foo(10, 32); //42
}
{
  function foo(a) {
    console.log(a + b);
    b = a;
  }
  foo(2);
}

{
  function foo(a) {
    var b = a * 2;
    function bar(c) {
      console.log(a, b, c);
    }
    bar(b * 3);
  }
  foo(2);
}

//전부 노출된 함수 예시
// doSomethingElse와 변수 b 는 밖에서도 접근할 수 있다.
{
  function doSomething(a) {
    b = a + doSomethingElse(a * 2);
    console.log(b * 3);
  }
  function doSomethingElse(a) {
    return a - 1;
  }
  var b;
  doSomething(2);
}
{
  function doSomething(a) {
    function doSomethingElse(a) {
      return a - 1;
    }
    var b;
    b = a + doSomethingElse(a * 2);
    console.log(b * 3);
  }
  doSomething(2);
}
{
  var a = 2;
  (function foo() {
    var a = 3;
    console.log(3);
  })();
  console.log(a); //2
}
{
  setTimeout(function () {
    console.log('1초 기다릴게!');
  }, 1000);

  setTimeout(function timeoutHandler() {
    console.log('안녕 난 이름을 가지고 있는 함수 표현식이야, 1초 기다릴게!');
  }, 1000);
}
{
  let a = 2;
  (function foo() {
    let a = 3;
    console.log(a);
  })(); //3
  console.log(a); //2
}

let a = 2;

(function IIFE(def) {
  def(window);
})(function def(global) {
  let a = 3;
  console.log(a);
  console.log(global.a);
});

//블록 스코프 예시
{
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
{
  try {
    nothing();
  } catch (error) {
    console.log(error);
  }
  console.log(error);
}

//ES6 let
{
  console.log(bar);
  let bar = 2;
  //   Uncaught ReferenceError: Cannot access 'bar' before initialization
  //     at <anonymous>:2:15
  // (anonymous) @ VM569:2
}
{
  let j;
  for (j = 0; j < 10; j++) {
    let i = j; //re-bound each iteration;
    console.log(i);
  }
}

//chapter4 호이스팅
{
  console.log(a); //예상 2, but undefined
  var a = 2;
}
{
  var a;
  a = 2;
  console.log(a);
}
{
  var a;
  console.log(a);
  a = 2;
}
{
  foo();
  function foo() {
    console.log(a);
    var a = 2;
  }
}
{
  function foo() {
    var a;
    console.log(a);
    a = 2;
  }
  foo();
}
// 함수 표현식(호이스팅 X)
{
  foo(); //TypeError
  var foo = function bar() {
    console.log('안녕하세요.');
  };
}
//변수 vs 함수 시, 함수가 먼저 끌어올려진다.
{
  foo();
  var foo;

  function foo() {
    console.log(1);
  }
  foo = function () {
    console.log(2);
  };
}
{
  foo();

  var a = true;
  if (a) {
    function foo() {
      console.log('a');
    }
  } else {
    function foo() {
      console.log('b');
    }
  }
}
