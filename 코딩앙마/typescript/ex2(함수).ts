//함수

//매개변수의 타입을 입력해주고
//()소괄호 뒤에는 리턴값에 대한 타입을 명시해준다.
//아무 것도 리턴해주지 않는다면 void라고 명시해주면 된다.
{
  function add(num1: number, num2: number): void {
    //   return num1 + num2;
    console.log('d안녕');
  }

  function isAdult(age: number): boolean {
    return age > 19;
  }
}
//인터페이스처럼 함수의 매개변수도 optional 로 지정해줄 수 있다.
{
  function hello(name?: string) {
    return `hello, ${name || 'world'}`;
    // 값이 없을 떄 world 를 넣어주라고
    // 처리되어있지만 TS에서는 좀 더 명시적으로 처리해야 한다.
    // 즉, 매개변수에 뒤에 ?를 붙여줘서 선택적 매개변수로 만들어준다.
    //옵셔널이여도 데이터타입은 꼭 지켜줘야 에러가 나지 않는다.
    //예시로 숫자를 인자값으로 넘기면 에러가난다.
  }
  const result = hello();
  const result2 = hello('안뇽');
  //const result3 = hello(333); 타입에러

  //외에도 JS에서 매개변수에 디폴트 값을 줄 수 있다.
  // 함수에 마우스를 올려보면 위의 hello함수와 같은 형태임을 알 수 있다.
  //자동으로 옵셔널 파라미터로 되기 때문에 값이 없어도 된다.
  function hello2(name = '기본 값') {
    return `hello, ${name}`;
  }
}

{
  //선택적 매개변수 주의사항, 선택적 매개변수가 필수 매개변수보다 앞에 오게 되면 에러가 뜬다.
  //당연함-> 만약에 맨 앞의 매개변수를 선택적 매개변수로 하고 싶다면.
  //(age: number | undefined, name: string) 이렇게 작성해야 한다.
  function helloEx(name: string, age?: number): string {
    if (age !== undefined) {
      return `hello, ${name}. you are ${age}`;
    } else {
      return `hello, ${name}`;
    }
  }

  console.log(helloEx('sam'));
  console.log(helloEx('cong', 20));
}
{
  //rest parameter 나머지 매개변수
  //전달받은 매개변수가 고정적이지 않고 예상불가능할 떄 씁니다.
  //전달받은 매개변수를 배열로 반환합니다. -> 그래서 타입에 : number[]로 기입해주면 된다.
  function addTest(...nums: number[]) {
    return nums.reduce((result, num) => result + num, 0);
  }

  addTest(1, 3, 4);
  addTest(1, 2, 3, 4, 1, 4, 2);
}

//👾THIS! this와 관련된 내용에 대해서 알아봅시다.
{
  interface User {
    name: string;
  }
  const Sam: User = { name: 'Sam' };

  // 타입스크립트에서 this의 타입을 함수의 첫번째 매개변수로 지정해준다. this: User
  // 함수에 매개변수가 있는경우
  function showNameEx(this: User, age: number, gender: 'm' | 'f') {
    console.log(this.name, age, gender); //여기서 this에러가 남 타입이 any
  }
  const a = showNameEx.bind(Sam);
  a(30, 'm');
}
{
  interface User {
    name: string;
    age: number;
  }

  function join(name: string, age: string): string;
  function join(name: string, age: number): User;
  function join(name: string, age: number | string): User | string {
    //age의 값에 따라 리턴값이 객체거나 string 임
    // sam,jane을 만들때 에러가 뜨는데 해결방법은 오버로드하는것이다.
    if (typeof age === 'number') {
      return {
        name,
        age,
      };
    } else {
      return '나이는 숫자로 입력해주세요';
    }
  }
  const sam: User = join('Sam', 30);
  const jane: string = join('jane', '30');
}
