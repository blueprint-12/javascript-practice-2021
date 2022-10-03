import { start } from 'repl';
import { Z_RLE } from 'zlib';

//ES6 Class에 대한 기본 지식을 기반으로 합니다.
{
  class Car {
    //🔥타입스크립트에서 클래스를 작성할 때는 멤버변수는 미리 선언해줘야 한다.
    //color: string;
    //멤버변수 미리 선언말고 다른 방법 2가지
    //1. 접근제한자, 2. readonly 사용

    constructor(public color: string) {
      this.color = color;
    }
    start() {
      console.log('start');
    }
  }

  const bmw = new Car('red');
}
//ES6는 아니지만 타입스크립트에서는 접근 제한자를 지원합니다.
// 정적(static) 멤버변수 호출할 때는 this 키워드가 아니라 클래스명을 통해서 호출한다.
{
  //접근 제한자(Access modifier)- public, private, protected
  //멤버 변수 name앞에 public이라고 기본값 안 적어줘도 암시적으로 public임
  // private 또 다른 표기법 #멤버변수 e.g.) #name (기능 차이는 없으니 편한대로 쓰기)
  // protected 와 public 의 차이점?
  // 아래와 같이 부모 클래스와 자식 클래스 내부에서는 해당 멤버변수 접근이 가능하다.
  // 하지만 클래스 외부의 인스턴스에서 .name으로 접근하면 에러가 난다.
  //즉, 클래스 외부에서는 접근 불가능

  // public - 자식 클래스, 클래스 인스턴스 모두 접근 가능(아무것도 안쓰면 public 디폴트값)
  // protected - 자식 클래스에서 접근 가능
  // private - 해당 클래스 내부에서만 접근 가능
  class Car {
    //private name: string = 'car';
    // #name: string = 'car';
    // protected name: string = 'car';
    static wheels = 4;
    readonly name: string = 'car';
    color: string;
    constructor(color: string, name: string) {
      this.color = color;
      this.name = name;
    }
    start() {
      console.log('start~!');
      console.log(this.name); //name이라는 멤버변수가 private하기 때문에
      //Car class내부에서만 사용가능
      console.log(Car.wheels);
    }
  }

  // Car 즉, super의 name 멤버변수가 public이라 자식에서도 접근가능
  class Bmw extends Car {
    constructor(color: string, name: string) {
      super(color, name);
    }
    showName() {
      console.log(super.name);
    }
  }

  const z4 = new Bmw('black', '호롤로');
  //   z4.name = '우라랄라';
  // 만약에 이름을 변경하지 못하게하려면 멤버변수 앞에 readonly 키워드를 붙여주면 된다.
  // 만약에 readonly가 있고 그 값을 변경할 수 있게 하려면 constructor 내부에서 조작해줘야 한다.
  console.log(z4.name); //호롤로
  console.log(Car.wheels); //정적 메소드나 멤버변수는 외부에서 호출할떄도 마찬가지 클래스명으로 호출해야 한다.
}

// 👾추상 클래스
// class 앞에 abstract 키워드를 붙여준다.
//주의점: new 키워드를 사용해서 객체를 만들 수 없다.
//추상화란 프로퍼티의 메소드나 이름만 선언해주고 구체적인 구현은
//구체적인 기능은 상속받는 쪽에서 만들어주는 것을 의미한다.
{
  abstract class Car {
    color: string;
    constructor(color: string) {
      this.color = color;
    }
    start() {
      console.log('달려라~~@');
    }
    //이렇게 메소드에 abstract키워드를 붙이면
    //반드시 상속받은 쪽에서 함수를 구현해줘야 한다.
    abstract dosomthing(): void;
  }

  // const car1 = new Car('red'); //Cannot create an instance of an abstract class

  // 상속을 통해서만 만들 수 있다.
  class Bmw extends Car {
    constructor(color: string) {
      super(color);
    }
    dosomthing(): void {
      alert(3);
    }
  }
}
