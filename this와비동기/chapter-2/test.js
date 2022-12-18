{
  function foo(num) {
    console.log('foo' + num);
    //foo가 몇번 호출 ?
    this.count++;
  }

  foo.count = 0;
  let i;
  for (i = 0; i < 10; i++) {
    if (i > 5) {
      foo(i);
    }
  }

  // foo6, foo7, foo8, foo9
  console.log(foo.count); //0
}

//4가지 this 바인딩 규칙

//1. 기본 바인딩
{
  function foo() {
    console.log(this.a);
  }

  var a = 2; //2, let으로 선언한 변수는 undefined가 뜬다.

  foo(); //2
}

//2. 암시적 바인딩
{
  function foo() {
    console.log(this.a);
  }

  //객체는 어차피 블록 스코프이기 때문에 var이나 let이나 상관없이
  //동일하게 동작합니다.
  let obj = {
    a: 2,
    foo: foo,
  };
  obj.foo(); //2

  function foo2() {
    console.log(this.a);
  }

  //객체 프로퍼티 참조가 체이닝된 형태
  let obj2 = {
    a: 42,
    foo,
  };
  let obj3 = {
    a: 1,
    obj2,
  };

  obj3.obj2.foo(); //42

  //암시적 소실
  function fooTest() {
    console.log(this.test1);
  }

  let objTest = {
    test1: 2,
    fooTest,
  };

  var bar = objTest.fooTest; //함수 레퍼런스/별명
  var test1 = '전역이란다.';
  bar(); //전역이란다
}

//명시적 바인딩 call, apply
{
  function foo() {
    console.log(this.a);
  }
  const obj = {
    a: 2,
    b: 'hello',
  };
  foo.call(obj); //2
}
//하드 바인딩(명시적 바인딩 꼼수 ver)
{
  function foo() {
    console.log(this.a);
  }
  const obj = {
    a: 2,
  };
  const bar = function () {
    foo.call(obj);
  };
  bar();
  //하드 바인딩된 bar에서 재정의된 this는 의미가 없다.
  bar.call(window); // 여기서 window로 바인딩해도 bar 내부에서 obj로 하드 바인딩하므로 의미없다.
}
{
  function foo(something) {
    console.log(this.a, something);
    return this.a + something;
  }
  const obj = {
    a: 2,
  };

  const bar = function () {
    return foo.apply(obj, arguments);
  };

  const b = bar(3); //2 3
  console.log(b); //5
}

//bind()
{
  function foo(something) {
    console.log(this.a, something);
    return this.a + something;
  }

  const obj = {
    a: 2,
  };
  const bar = foo.bind(obj);
  const b = bar(3); // 2 3
  console.log(b); //5
}
{
  function foo(a) {
    this.a = a;
  }
  const bar = new foo(2);
  console.log(bar.a);
}
