{
  function foo() {
    let a = 2;
    function bar() {
      console.log(a);
    }
    bar();
  }
  foo();
}

//클로저가 더 잘보이는 예시
{
  function foo() {
    let a = 2;
    function bar() {
      console.log(a);
    }
    return bar;
  }
  let baz = foo();
  baz();
}
{
  let fn;
  function foo() {
    let a = 2;
    function baz() {
      console.log(a);
    }
    fn = baz;
  }
  function bar() {
    fn();
  }
  foo();
  bar();
}

{
  function wait(msg) {
    setTimeout(function timer() {
      console.log(msg);
    }, 1000);
  }
  wait('hello closure');
}
{
  for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  }
}
{
  for (var i = 0; i <= 5; i++) {
    (function (j) {
      setTimeout(function timer() {
        console.log(j);
      }, j * 1000);
    })(i);
  }
}
//모듈 패턴
{
  function CoolModule() {
    let something = 'something';
    let another = [1, 2, 3];

    function doSomething() {
      console.log(something);
    }

    function doAnother() {
      console.log(another.join('!'));
    }
    return {
      doSomething: doSomething,
      doAnothor: doAnother,
    };
  }
  let cong = CoolModule();
  cong.doAnothor();
  cong.doSomething();
}
