{
  let num = 0;

  const increase = function () {
    return ++num;
  };
}
{
  // num의 상태가 유지되지 못함
  const increase = function () {
    let num = 0;

    return ++num;
  };
}
{
  // num의 상태가 유지됨
  const increase = (function () {
    let num = 0;

    return function () {
      return ++num;
    };
  })();
}
{
  // num에 대한 증가, 감소 함수 구현
  const numCounter = (function () {
    let num = 0;

    return {
      increase() {
        return ++num;
      },
      decrease() {
        return num > 0 ? --num : 0;
      },
    };
  })();

  numCounter.decrease();
  numCounter.increase();
}
