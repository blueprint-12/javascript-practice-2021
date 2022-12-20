{
  //객체 리터럴
  const myObj = {
    key: value,
  };
}
{
  //생성자 형식
  const myObj = new Object();
  myObj.key = value;
}
{
  const strPrimitive = '나는 문자열';
  typeof strPrimitive; // "string"
  strPrimitive instanceof String; //false

  const strObj = new String('나는 문자열');
  typeof strObj; //"object"
  strObj instanceof String; //true

  //객체 하위 타입 체크
  Object.prototype.toString.call(strObj); //'[object String]'
}
{
  const myArray = ['foo', 42, 'bar'];
  myArray['3'] = 'baz';
  myArray.length; //4
  myArray[3]; //"baz"
}
{
  const myObject = {
    a: 2,
  };
  myObject.a; //2
}
