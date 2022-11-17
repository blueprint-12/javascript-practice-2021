// Generic
//선언할 때는 타입 파라미터만 설정해주고
//생성할 시점에 사용할 타입을 결정하는 것임
{
  function getSize<T>(arr: T[]): number {
    return arr.length;
  }

  const arr1 = [1, 2, 3];
  getSize<number>(arr1);

  const arr2 = ['a', 'b', 'c'];
  getSize(arr2);
}
