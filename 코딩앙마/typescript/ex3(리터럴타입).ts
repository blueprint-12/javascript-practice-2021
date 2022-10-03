// Literal Types

{
  const userName1 = 'bob';
  let userName2: string | number = 'tom';

  userName2 = 334;

  //const 는 재할당이 불가능하기 때문에 앞서 배운 enum처럼 활용할 수 있다.
  //이렇게 고정값을 리터럴타입이라고 하는데
  // 숫자형도 리터럴타입으로 만들 수 있다.
  type Job = 'police' | 'dev' | 'doctor';

  interface User {
    name: string;
    job: Job;
  }
  const user: User = {
    name: 'bob',
    job: 'dev',
  };

  interface HighSchoolStudnt {
    name: string;
    grade: 1 | 2 | 3; // 여기서 |(세로줄)은 union 타입이다.
  }
}

// 🔥Union Types (|)

{
  interface Car {
    name: 'car';
    color: 'blue';
    start(): void;
  }
  interface Mobile {
    name: 'mobile';
    color: 'white';
    call(): void;
  }

  // 아래의 예시처럼 동일한 속성의 타입을 다르게해서 구분할 수 있는 것을
  // 식별가능한 유니언 타입이라고 말한다.
  function getGift(gift: Car | Mobile) {
    console.log(gift.color); //두 인터페이스 모두 color를 가지고 있어서
    // 얘는 문제가 안되지만
    //gift.start(); start메소드는 Car인터페이스에만 있기 때문에 에러를 반환한다.
    //이럴 때는 Car인지 Mobile인지 먼저 확인을 해줘야한다.
    //현재는 if문을 활용했지만 검사항목이 많을경우는 switch case문을 사용하는게 좋다.
    if (gift.name === 'car') {
      gift.start(); //여기에 gift에 마우스를 올려보면 타입이 Car라고 나와있다.(string이 아님)
    } else {
      gift.call();
    }
  }
}

//(Intersection Types) 교차 타입
// 앞서 배운 유니언이 | OR를 나타낸다면
// ⭐교차타입은 AND를 나타낸다!
// 교차타입의 역할: 여러 개의 타입을 하나로 합쳐주는 역할 -> 필요한 모든 기능을 가진 하나의 타입이 만들어지는 것
//e.g.)Toy & Car
{
  interface Car {
    name: string;
    start(): void;
  }
  interface Toy {
    name: string;
    color: string;
    price: number;
  }
  // 이렇게 되면 모든 속성(각 인터페이스가 가지고 있는)을 다 기입해줘야 한다.
  const toyCar: Toy & Car = {
    name: '타요',
    start() {
      console.log('달려');
    },
    price: 2500,
    color: 'blue',
  };
}
