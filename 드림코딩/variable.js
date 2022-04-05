//1. Use strict added in ES5 use this for vanila Javascript.
'use strict';

console.log('hello world!');

//2. Variable(mutable data type) 변수가 선언되면 변수가 메모리 어딘가에 할당된 박스를 가리키고 있어서 포인터(pointer)를
// 이용해서 값을 계속 바꿔나갈 수 있다.
// let (added in ES6)
let name = 'cong'; //global scope
console.log(name); //name' is deprecated -> 전역변수로 선언되어있기 때문에 or 이미 typescript에서 선언되어 있어서
//아래는 block 에 변수를 선언하는 것
{
  let woo = 'Hell this is block woo';
  console.log(woo);
}
//여기서 console.log(woo);를 하게 되면 아무 값도 출력되지않음, block을 벗어난 곳에서 woo를 호출하고 있어서
console.log(woo);

//hoisting - 호이스팅이란 어디에 선언했는지에 상관없이 항상 가장 위로 선언을 끌어올려주는 것(hoisting)을 말합니다.
//var은 block scope가 없다. -> 블록을 철저히 무시한다.

//3.Constance(immutable data type) 상수 - 상수는 한 번 선언되면 메모리에 할당된 박스를 가리키는 포인터가 잠겨있다.
//그래서 값을 선언함과 동시에 할당하면 값을 변경할 수 없습니다.
//사용이유? 보안상, thread safety, reduce human mistakes

//4. Variable types
//primitive: single item: number, string, boolean, null, undefined, sybol
// object, box container
// function, first-class function(자바스크립트 언어에서는 함수도 다른 곳에 변수값으로 할당이 가능하고 인자, 리턴타입으로도 사용될 수 있다는 것을 말한다.)
//+ number - special numeric values:
//infinity(양수를 0으로 나눴을 때 값), -infinity(음수를 0으로 나눴을 때 값), NaN(숫자가 아닌것을 연산했을 때)

//string - template literals(백틱기호를 사용해서 변수랑 결합해서 쓰는 것)
//boolean - false값 표시: 0, null, undefined, NaN, ''(빈 string) true값 표시: any other value
//null - 텅빈값이라고 값을 할당한 것
//undefined - 선언만하고 값을 할당하지 않은 것
