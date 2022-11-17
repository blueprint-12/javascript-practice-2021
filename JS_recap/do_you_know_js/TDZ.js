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
