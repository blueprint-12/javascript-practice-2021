//  ABOUT THIS IN JS

{
  const test = {
    prop: 42,
    func: function () {
      return this.prop;
    },
  };

  console.log(test.prop); // 42
}
//웹 브라우저 전역 context에서  this
{
  a = 35;
  console.log(window.a); // 35

  this.b = 'hi I am b';
  console.log(window.b); //"hi I am b"
  console.log(b); // 전역 객체는 생략가능하다.
}

//함수 문맥에서 this의 값은 함수를 호출한 방법에 의해 좌우
// 호출방법 중 "단순 호출" in NOT 엄격모드
{
  function f1() {
    return this;
  }

  // 브라우저에서 전역객체 window
  f1() === window; // true;
  // node.js에서 전역객체 global
  f1() === global; // true;
}

// 단순 호출 중 엄격모드일때
{
  function f2() {
    'use strict'; //엄격 모드 함수 단위로 적용
    return this;
  }

  f2() === undefined; // true;
}

// call 과 apply 로 this의 실행 컨텍스트 바인딩
{
  const obj = { a: "obj's a" };
  var a = 'global';
  function whatsThis() {
    return this.a;
  }

  //변수 a가 let이나 const일 경우, undefined
  whatsThis(); // global
  whatsThis.call(obj); //"obj's a"
  whatsThis.apply(obj); //"obj's a"
}
{
  function add(c, d) {
    return this.a + this.b + c + d;
  }
  var o = { a: 1, b: 3 };
  add.call(o, 5, 7); // 16
  add.apply(o, [10, 20]); //34
}
// 생성자를 통해 객체를 생성하는 경우
{
  function Programmer(name, age) {
    this.name = name;
    this.age = age;
  }
  const tony = new Programmer('tony', 25);
  console.log(tony.name, tony.age); //tony ,25
}

//객체의 메소드를 호출하는 경우
{
  const myobj = {
    myval: 6,
    myWindow: this,
    myFunc: function () {
      console.log(this);
    },
    myArrow: () => {
      console.log(this);
    },
  };
  console.log(myobj.myFunc()); //myobj 객체
  console.log(myobj.myArrow()); //window 객체
}

{
  const cong = {
    age: 27,
    gender: 'female',
  };

  function printProfile(name) {
    console.log(name, this.age, this.gender);
  }

  printProfile.apply(cong, ['alexa']); //alexa 27 female
  printProfile.call(cong, '콜입니다.'); //콜입니다. 27 female
  printProfile.bind(cong, 'cong').call(); //cong 27 female
}
//렉시컬 스코프- 함수 호출말고 어디서 선언되었는 지에 따라 결정되는 것을 말함
{
  var x = 1; //global

  function first() {
    var x = 21;
    second();
  }
  function second() {
    console.log(x);
  }

  first(); // 1
  second(); //1
}

//new 바인딩
{
  function Binding() {
    this.a = 20;
  }

  const bind = new Binding();
  console.log(bind.a);

  class Test {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      return this.name;
    }
  }

  const test1 = new Test('이름');
  test1.name; //이름
  test1.sayHi(); //이름, 근데 콘솔로그 찍어야됨
}
