// var는 선언 전에 사용할 수 있다.
// why? 호이스팅 때문에
// 🙋‍♂️호이스팅? 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
// TDZ(Temporal Dead Zone)

{
  //   console.log(이름); //reference Error 초기화전에 접근 불가
  const 이름 = '감자머리'; // 함수 선언 및 할당
  console.log(이름); //감자
}
{
  //주의점: 호이스팅은 scope단위인데 즉, 여기서 scope란
  //showAge함수 내부다. showAge 내부에서 할당 이전에 age를 호출했기 때문에
  // 레퍼런스 에러가 발생한다.
  let age = 30;
  function showAge() {
    console.log(age); //TDZ => reference Error 발생

    let age = 20;
  }
  showAge();
}
// 변수의 생성과정
/*
1. 선언 단계 ->var는 선언과 초기화가 동시에 이뤄짐
2. 초기화 단계: undefined 를 할당해주는 단계 
3. 할당 단계 -> const는 let, var과 다르게 선언과 동시에 할당이 이뤄져야 합니다. 3단계가 모두 동시에

var -> 함수 스코프(function-scope)// var가 유일하게 벗어날 수 없는 스코프가 함수라고 생각하면 된다.
let, const -> 블록 스코프(block scope)

블록 스코프 예제, 함수 if문 for문 while문 try/catch문 등

*/

//🤸‍♀️Intermedate Class 생성자 함수

//😉객체 리터럴
{
  let user = {
    name: 'namul',
    age: 30,
  };
}
//객체 리터럴을 많이 만들어야 할 때 생성자 함수를 쓴다.
//-> 비슷한 객체를 여러개 만들 때 사용하는 것
{
  // 보통 첫글자는 대문자로 생성자 함수임을 명시한다.
  function User(name, age) {
    //this = {}
    this.name = name;
    this.age = age;
    // return this; 주석처리된 부분은 실제 코드에는 없지만 저렇게 동작한다.
  }
  //new 연산자를 사용해서 호출
  let user1 = new User('감자', 30);
  let user2 = new User('원나', 27);
  let user3 = new User('지영', 27);
}

{
  function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
      console.log(this.name);
    };
  }
  let user1 = new User('han', 40);
  user1.sayName(); //"han"
}
//🤸‍♀️객체의 methods/ computed property
{
  let a = 'age';
  const user = {
    name: 'mike',
    [a]: 30, // age: 30, age자리에 a 라는 변수를 대괄호로 묶어서 키로 주면
    // 할당된 값이 키로 들어간다. 이를 computed property라고 한다.
    //계산된 프로퍼티, 아래와 같이 식 자체를 넘기는 것도 가능하다.
  };
  const user2 = {
    [1 + 4]: 5,
    ['안녕' + '하세요']: 'Hello',
  };
  //user2는 {5: 5, 안녕하세요: "Hello"}
}

//🤸‍♀️객체에서 사용가능한 메서드들
// Object.assign(): 객체 복제
{
  const user = {
    name: 'nike',
    age: 29,
  };
  const userObj1 = {
    gender: 'male',
  };
  //const cloneUser = user; //이러면 복제가 안된다. 참조값만 할당하는 것이므로

  // 2개의 인자 첫번째 {}는 초기값을 뜻하고 두번째는 복제할 대상인 객체의 값들이 초기값에 병합된다.
  const newUser = Object.assign({}, user);
  // 2개말고 2개이상의 객체도 3번째 인자로 주면 초기값에 같이 병합될 수 있다.
  const newUser2 = Object.assign({}, user, userObj1);
  console.log(newUser2);
}
// Object.keys(): 키 배열 반환
// 객체의 key들만 배열로 만들어 반환합니다.
{
  const user = {
    name: 'nike',
    age: 20,
    gender: 'female',
  };
  Object.keys(user); //['name','age,'gender'];
}
// Object.values(): 값 배열 반환
// 객체의 값들만 모아서 배열로 반환합니다.
{
  const user1 = {
    name: '고구마',
    age: 33,
    gender: null,
  };
  Object.values(user1);
}
//key 와 value를 모두 배열로 반환하고 싶다면
// Object.entries():키/값 배열 반환
// 대신 배열 안에 각각의 키/값 배열 형태로
// 아래는 결과물 예시
[
  ['name', 'lita'],
  ['gender', 'female'],
];
{
  const user = {
    name: 'lita',
    gender: 'female',
    country: undefined,
  };
  Object.entries(user);
}
// Object.fromEntries(): 키/값 배열을 객체로
// 아까 만들어놓은 배열안의 배열을 저 안에 넣으면 다시 객체로 만들어줍니다.

{
  const arr = [
    ['name', 'lita'],
    ['gender', 'female'],
  ];

  Object.fromEntries(arr);
}
//Object 메서드 활용 + computed property
{
  function makeObj(key, val) {
    return {
      [key]: val,
    };
  }
  const obj = makeObj('성별', 'male');
  console.log(obj);
  console.log(typeof obj.key); //[key]했을 때는 undefined, 대괄호 없이 key했을 때는 string
}
{
  //const 로 만들어진 객체는 보호받지만 그 안의 프로퍼티는
  // 보호받지 못한다 또한 아래와 같이 객체를 다른 객체에 할당하면
  // 주소값이 공유되기 때문에 원본 객체의 프로퍼티 역시 변형된다.
  const user = {
    name: 'nike',
    age: 30,
  };
  const user2 = user;
  user2.name = 'Tom';

  console.log(user);
  console.log(user2);
}
//위와 같은 문제때문에 객체를 복사할 때는 Object.assign()을 사용해야 한다.
{
  const user = {
    name: 'nike',
    age: 30,
  };
  //첫번째인자에 초기값이 빠지면 user가 초기값으로 지정되므로
  //포인터가 공유되는 것 같다.(assign 을 사용하는 이유가 없어짐)
  const newUser = Object.assign({}, user);
  newUser.name = '아라';
  console.log(user.name); //  nike
  console.log(newUser.name); // 아라

  const entries = Object.entries(user);
  console.log(entries);
}
//🙋‍♂️Symbol에 대해서 알아보기 전에 객체의 key에 대해서 알아봅시다.
//여태 객체의 property key는 "문자형"이었음
{
  const obj = {
    1: '1입니다.',
    false: '거짓입니다.',
  };
  //keys 메소드로 타입을 확인할 수 있음
  Object.keys(obj); // ["1", "false"]
  //key가 문자열이니 객체의 프로퍼티에 접근할 때 문자열 키로 접근
  obj['1'];
  obj['false'];
}
//여기서 등장한 것이
//🙋‍♂️Symbol ?? 유일한 식별자
// 즉, "유일성"을 보장

{
  const a = Symbol(); // new키워드를 붙이지 않습니다.
  const b = Symbol();
  console.log(a, b); //자료형은 똑같이 Symbol로 나오지만
  console.log(a === b); // 일치 연산자로 확인해보면 false가 뜹니다.
  // 일치연산자 ===, == 이거 둘 다 false 로 뜸

  //심볼을 생성할 때 인자로 넘겨준 string은 심볼에 아무런
  //영향을 미치진 않지만 이로인해 설명을 붙여줄 수 있습니다.
  const id = Symbol('id');
  const id2 = Symbol('id');
  console.log(id, id2); //Symbol(id) Symbol(id)

  // 심볼을 객체의 key로 만들어서 사용
  const id1 = Symbol('id');
  const obj2 = {
    [id1]: 'myid',
    name: 'nike',
    age: 22,
  };

  // Object 관련 메소드는 심볼을 만나면 건너뛴다. (for ...in 포함)
  console.log(Object.keys(obj2)); //['name', 'age']
  //객체 자체만 출력해보면 Symbol이 잘 들어가 있음을 알 수 있다.
  console.log(obj2); //{name: 'nike', age: 22, Symbol(id): 'myid'}
}
//심볼은 언제사용? 특정 객체의 원본을 건들이지 않고 속성을 추가할 수 있다.
//심볼은 이름이 같더라도 모두 다른 존재입니다.
//🤸‍♀️ Symbol.for():전역 심볼
// -하나의 심볼만 보장받을 수 있음
// -없으면 만들면 되고, 있으면 가져오기 때문이다.
// -Symbol함수는 매번 다른 Symbol값을 생성하지만,
// -Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유합니다.

{
  const id1 = Symbol.for('id');
  const id2 = Symbol.for('id');
  console.log(id1 == id2); //true

  //전역 심볼의 이름(생성할때 넣어주었던 string이름)을 알고싶다면 keyFor 메소드를 사용하면되고
  //그냥 심볼일 경우, description 프로퍼티를 사용하면 된다.

  const dd = Symbol('dd입니다.');
  dd.description; // 메소드가 아님! 'dd입니다.'

  Symbol.keyFor(id1);
}
//심볼을 완전히 숨길수는 없습니다.
// 심볼만 보고싶다면 Object.getOwnPropertySymbols(객체) 를 통해 확인할 수 있습니다.
// -> 심볼을 담은 배열 반환
// Reflect.ownKeys(객체); 는 심볼을 포함한 모든 키들을 보여줍니다.

//심볼을 활용한 예제
{
  //다른 개발자가 만들어 놓은 객체
  const user = {
    name: 'nike',
    age: '12',
  };

  //내가 작업
  // user.showName = function(){}; 이렇게 추가하지말고
  // 직접 추가하면 원래 기능에 지장을 주니까!
  //심볼을 만들어서
  const showName = Symbol('show name func');
  user[showName] = function () {
    console.log(this.name);
  };

  //사용자가 접속하면 보는 메세지,
  //여기에는 내가 만들어놓은 showName이라는 기능은 영향을 끼치지않게 할 수 있다.
  for (let key in user) {
    console.log(`his ${key} is ${user[key]}`);
  }
}
//🙋‍♂️ Number, Math (숫자에 대해서 배워보자!!) 25:33
