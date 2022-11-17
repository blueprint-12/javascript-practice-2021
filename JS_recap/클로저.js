// closure(with lexical scope)
// 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
// 클로저 이해하기 위한 선행 개념: JS 변수의 유효범위 (Lexical Scoping)
//-> 클로저는 어떤 데이터(어휘적 환경)와 그 데이터를 조작하는 함수를 연결시켜준다.
//결론적으로 오직 하나의 메소드를 가지고 있는 객체는 일반적으로 사용하는 모든 곳에 클로저를 사용할 수 있다.

//lexical scoping: 어휘적 범위 지정 or 정적 범위 지정 예시
//내부에서 정의한 함수가 바깥 함수의 변수에 접근할 수 있다.

function init() {
  let name = 'Moxilla'; // name은 init에 의해 생성된 지역변수
  function displayName() {
    alert(name); // 부모함수에서 선언된 변수를 사용한다.
  }
  displayName();
}
init();

// init()은 지역변수 name과 함수 displayName()을 생성한다.
// displayName()은 init()안에 정의된 내부 함수이며, init()함수 본문에서만 사용할 수 있다.
// 여기서 주의할 점은 displayName() 내부엔 자신만의 지역변수가 없다는 것.
//그런데 함수 내부에서 외부 함수의 변수에 접근할 수 있기 때문에 displayName()
//역시 부모 함수 init()에서 선언된 변수 name에 접근할 수 있다. 만약 dispalyName()가
//자신만의 name 변수를 가지고 있다면 name 대신 this.name을 사용했을 것이다.

// let 과 const를 사용한 범위 지정

// ES6 이전 전통적인 JavaScript에는 함수 스코프와 전역 스코프 두 가지만 존재했다.
// var로 선언한 변수는 함수 내부 또는 외부에서 선언되었는 지에 따라 함수 스코프 또는 전역스코프를 가진다.
// ES6에서 JS는 블록 스코프 변수를 생성할 수 있도록 let 과 const 선언과 함께 TDZ(시간상 사각지대)를 도입했다.

//
