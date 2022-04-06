'use strict';
// Object-oriented programming(OOP)
// class: template
// object: instance of a class
// JavaScript classes
// -introduced in ES6
// -syntactical sugar over prototype-based inheritance

//1. Class declarations (클래스 선언)
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
    //methods
  }
  speak() {
    console.log(`${this.name}: hello!`);
  }
}
const cong = new Person('cong', 20);
console.log(cong.name); //cong
console.log(cong.age); //20
cong.speak(); //cong: hello!

// 2.Getter and Setters
class User {
  constructor(fisrtName, lastName, age) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
    this.age = age;
  }
  //this.age라는 메모리에 올라간 데이터를 읽어오는 것이 아니라 getter를 호출
  // = age 값을 할당할때, 바로 메모리의 값을 할당하는 것이 아니라 setter를 호출
  // 그러면 또 setter의 내부에서 = value를 할당할때 바로 할당하는 것이 아니라 setter를 호출
  // 이게 무한정 반복되기 떄문에 callstack 에러가 발생-> 이런 상황을 방지하기 위해서
  // getter와 setter 안에서 사용되는 변수의 이름을 다르게 수정-> 보통 앞에 언더바_를 넣어준다.
  get age() {
    return this._age;
  }
  // 값을 설정, 그렇기 때문에 인자로 value를 받아와야 함
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }

    // 위와 같이 공격적으로 써도 되고 아래처럼 삼항연산자를 통해 해도 됨
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('kang', 'kim', -1);
console.log(user1.age);

// 3. Fields (public, private)

// Too soon! 최근에 추가되었다고 함-> 많은 개발자가 사용하고 있지는 않음
// 최신 브라우저에서 지원하지 않는 경우가 많음 쓰려면 BABEL을 사용해야 합니다.

// constructor 를 사용하지 않고 field를 정의할 수 있음
// 퍼블릭은 외부에서 접근 가능, 프라이빗은 앞에 해시기호를
// 붙이고 외부 접근 불가(조작 전부 불가)- 클래스 내부에서만 값 조작가능
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// too soon!
// 알아두면 좋은 개념
// 새로 생성되는 객체의 데이터값과 연관있는 것 X
// 클래스 자체에서 사용되는 동일한 메소드가 있을 때 사용
// static 키워드를 붙이면 obj와 상관없이 class 자체에 연결되어 있음, obj마다 할당되는 것이 아님
// 사용할 때: 생성되는 obj와 상관없이 class 자체의 공통 기능이라면
// static과 static메소드로 지정해서 사용-> 메모리 사용 감소 효과
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publicsher); // undefined, static 키워드를 통해만들었기 떄문에 obj로 접근 X
console.log(Article.publisher); //Dream Coding, 정상출력
Article.printPublisher(); //Dream Coding

// 5.Inheritance 상속
// a way for one class to extends another class.
// extends 라는 키워드를 이용해서 부모 클래스에서 자식클래스로 모든 프로퍼티를 상속받는다.
// 필요한 함수만 내용을 재정의해서 사용할 수 있음 = 오버라이딩 이라고 부름

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('🔺');
  }
  getArea() {
    //필요한 함수만 재정의 - 오버라이딩
    return (this.width * this.height) / 2;
  }
}
const rect1 = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 30, 'pink');
rect1.draw();
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// obj는 class를 통해 만들어진 새로운 인스턴스이다.
// objName instanceOf className
// 왼쪽의 obj가 오른쪽의 class 인스턴스인지 확인할 수 있다.
// 왼쪽의 obj가 오른쪽의 class를 통해서 만들어진 obj인지 판별가능
// ture 와 false 리턴
console.log(rect1 instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); // t
