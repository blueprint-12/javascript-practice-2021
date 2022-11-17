//ES6에 추가된 새로운 원시값
{
  const mysym = Symbol('내꺼임');
  console.log(mysym); //Symbol(내꺼임)
  mysym.toString(); //'Symbol(내꺼임)'
  typeof mysym; //'symbol'
  const a = {};
  a[mysym] = 'hello';
  Object.getOwnPropertySymbols(a); //[Symbol(내꺼임)]
}
