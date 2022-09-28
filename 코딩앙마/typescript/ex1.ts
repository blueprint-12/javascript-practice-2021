// 왜 배우냐?
// JS(동적언어)는 런타임에 타입이 결정된다 -> 런타임에 오류 발견(즉 실행을 해야 오류발견)
// Java, TypeScript(정적언어)
//-> 컴파일 타입에 타입이 결정 -> 실행이전에 오류 발견가능

//코드를 확인해보고 싶다면, typescript playground에 들어가서 코드를 작성하면 됩니다.

function showItems(arr: number[]) {
  arr.forEach((item) => {
    console.log(item * 2);
  });
}
showItems([2, 3, 4, 5]);

//기본 문법
// 직접 쓰지 않아도 타입스크립트는 타입 추론을 할 수 있다.
let car = 'BMW';

// car = 3; //Type 'mumber' is not assignable to type 'string'.

let age: number = 30;
let isAdult: boolean = true;

//숫자요소를 담은 배열을 아래와 같이 2가지 방식으로 표현해줄 수 있다.
let a: number[] = [1, 3, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

//week1.push(3); 문자열 배열에 숫자를 추가하면 에러남

// 튜플 (tuple)
//배열의 index별로 요소(element)의 타입이 다를 때 사용
let b: [string, number];
b = ['z', 3];
b[0].toLowerCase(); // .을 찍으면 해당 요소의 사용가능한 메소드를 보여준다.
//문자열의 메소드이므로 2번째 요소에서는 사용이 불가능하겠죠
//b[1].toLowerCase();

// 📚void, never
// 🐱void는 함수에서 아무것도 반환하지 않을 때 사용한다.

{
  function sayHello(): void {
    console.log('hello');
  }
  //🐱 never은 영원히 끝나지 않는 함수나, 에러를 반환할 때 사용하는 타입이다.
  function showError(): never {
    throw new Error();
  }

  function ifLoop(): never {
    while (true) {
      //무한 루프...
    }
  }
}
// 📚 enum
// Java에 있는 타입
// 비슷한 값끼리 묶어놓은 것으로 생각하면 편하다.
{
  // enum
  // enum에 수동으로 값을 주지 않으면
  // 자동으로 0부터 1씩 증가하는 값을 할당한다.

  enum Os {
    Window = 3,
    Ios = 10,
    Android,
  }
  //JS로 풀어진 코드를 보면 양방향 Mapping이 되어 있다.
  console.log(Os[10]); // "Ios"
  console.log(Os['Ios']); // 10
}
{
  // enum은 숫자가 아니라 문자열도 mapping할 수 있는데
  // 하지만 숫자가 아니기 때문에 단방향 매핑만 된다.
  enum Os2 {
    Window = 'win',
    Ios = 'ios',
    Android = 'and',
  }

  //즉 위의 예시는 아래와 같은 의미가 된다.
  const Os3 = {
    Window: 'win',
    Ios: 'ios',
    Android: 'and',
  };

  //변수 타입을 만들어둔 enum으로 지정해주면
  // Os2의 키만 입력할 수 있게 됩니다.
  // 사용용도: 특정값만 이용하도록 강제하고 싶을 때, 값들이 공통점이 있을 때 사용해주면 된다.
  let myOs: Os2;
  myOs = Os2.Window;
}

//null, undefined
{
  let a: null = null;
  let b: undefined = undefined;
}

// =================================================================================
//🐕 강의3: Interface(인터페이스)

//기존 JS 객체 문법을 보면
{
  let user: object;

  user = {
    name: 'xx',
    age: 30,
  };
  // console.log(user.name); => user의 name 프로퍼티를 찾을 수 없다고 한다.
  // 이때 interface를 이용한다.
}
{
  type Score = 'A' | 'B' | 'C' | 'F';

  //😉인터페이스의 키 뒤에 물음표를 붙이면 optional한 속성이 됩니다.
  // 인터페이스를 통한 객체가 해당 프로퍼티를 가져도 되고 없어도 된다는 의미
  interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    // 학년별로 등급을 주고 싶을 때, 유저가 2학년이고 B등급이라면 얘만
    // 프로퍼티로 하고 싶을 때 ?옵셔널을 각각 달아주는 것보단
    /*
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    */
    //위는 아래와 같다. 여기서 grade는 의미가 없어서 아무렇게나 지어도 되지만
    //편의상 무엇을 의미하는 지 써놓는다.

    // 아래의 의미는 number를 key로하고 string을 value로 하는
    // 프로퍼티를 여러개 받을 수 있다는 뜻!
    // [grade: number]: string;

    //여기서 또 개선을 하자면 스코어를 나타내는 grade의 value값이 string으로 범위가 너무 넓으니
    // "문자열 리터럴"을 통해 제한해줄 수 있다.
    [grade: number]: Score;
  }
  //프로퍼티를 지정해놨기 때문에 빈 객체를 만들려고 하면, name과 age가 없다고 알려준다.
  let user: User = {
    name: '동그리',
    age: 99,
    birthYear: 2000,
    1: 'A',
    2: 'B',
  };

  //기존에는 user객체에 없던 gender를 추가해주도록 하겠습니다.
  user.gender = 'male';
  console.log(user.gender); //male
  //raedonly로 설정된 프로퍼티는 값이 수정될 수 없습니다.
  //최초에 객체 생성할때만 할당이 가능하고 그 이후에 프로퍼티를 수정할 수 없습니다.
  //user.birthYear = 1990;

  console.log(user.name); // '동그리'
}

//interface을 통해 객체말고 함수 정의도 가능하다!
{
  interface Add {
    // (인자): 리턴타입
    (num1: number, num2: number): number;
  }

  const add: Add = function (x, y) {
    return x + y;
  };

  console.log(add(10, 20));

  //예시 추가: 성인인지 boolean값을 반환하는 함수를 정의
  interface IsAdult {
    (age: number): boolean;
  }
  //   const isAdult: IsAdult = function (num) {
  //     if (num >= 20) {
  //       return true;
  //     } else return false;
  //   };
  //화살표 함수로 표현할 때, 리턴값이 boolean인 것을 알아서 직접명시하지 않아도된다.
  const isAdult: IsAdult = (num) => {
    return num > 19;
  };
  console.log(`Am I adult ? the answer : ` + isAdult(20));
}
//🤸‍♀️ 인터페이스를 class 생성할 때에도 사용할 수 있다!
{
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }
  class Bmw implements Car {
    // color: 'silver';
    color;
    wheels = 4;
    //클래스가 생성될 때 색상을 입력받고 싶다면 아래와같이 생성자 함수를 활용하면된다.
    constructor(c: string) {
      this.color = c;
    }
    start() {
      console.log('부릉부릉~');
    }
  }
  const b = new Bmw('green');
  console.log(b);
  b.start(); //"부릉부릉~"
  /* 아래는 b를 TS playground에서 출력한 결과
    Bmw: {
    "wheels": 4,
    "color": "green"
  } */
}
// : 와 = 를 제대로 보고 써라..

//🤸‍♀️ 인터페이스는 확장이 가능하다 extends라는 키워드를 활용
{
  interface Car {
    color: 'green';
    wheels: number;
    start(): void;
  }
  interface Benz extends Car {
    // Car가 가지고 있는 속성은 이미 갖고있음

    stop(): void;
  }
  const benz: Benz = {
    color: 'green',
    wheels: 5,
    stop() {
      console.log('stoped');
    },
    start() {
      console.log('starteds');
    },
  };
  console.log(benz);
  /*{
  "color": "green",
  "wheels": 5
} */
}
