{
  function foo() {
    try {
      return 42;
    } finally {
      console.log('hello iam finally');
    }
    console.log('실행될 리 없어');
  }
  console.log(foo());
}
//결과는 아래와 같다.
//hello iam finally
//42

{
  function foo() {
    try {
      throw 42;
    } finally {
      console.log('안녕하세요? 파이널리 입니다.');
    }
    console.log('여긴 출력되지않아여');
  }
  console.log(foo());
}
// 안녕하세요? 파이널리입니다.
// Uncaught 42
{
  function foo() {
    try {
      throw 42;
    } catch (e) {
      console.error(e);
    } finally {
      console.log('안녕하세요? 파이널리 입니다.');
    }
    console.log('하이하이');
  }
  foo();
}
// 42
// 안녕하세요? 파이널리입니다.
// 하이하이
{
  for (let i = 0; i < 10; i++) {
    try {
      console.log(`컨티뉴문 전에 ${i}`);
      continue;
    } finally {
      console.log(i);
    }
  }
}
//0 1 2 3 4 5 6 7 8 9
