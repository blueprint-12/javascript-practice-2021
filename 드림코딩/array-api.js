// Q1. make a string out of an array -> join()API
{
  const fruits = ['apple', 'banana', 'orange'];
  const stringedfruits = fruits.join();
  console.log(stringedfruits); //apple,banana,orange
}
// Q2. make an array out of a string -> split()API 구분자를 통해 string -> array로 만들어준다.
// 2개의 param을 받는데 1은 string타입 구분자, 2는 number타입 limit, 2의 경우 optional이라 써도되고 안 써도 된다.
// 원하는 수로 쪼개서 반환가능하단 소리
{
  const foods = '🍕,🍔,🍟,🌭';
  const foodsArr = foods.split(',', 2);
  console.log(foodsArr);
  /*(4) ['🍕', '🍔', '🍟', '🌭']
    0: "🍕"
    1: "🍔"
    length: 2
    [[Prototype]]: Array(0)
    */
}

console.clear();
// Q3.make this array look like this: [5,4,3,2,1]
// .reverse()API -주의) 원본도 같이 변형됨 sort처럼..
{
  const array = [1, 2, 3, 4, 5];
  const reversedArr = array.reverse();
  console.log(array, reversedArr); //(5) [5, 4, 3, 2, 1] (5) [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
// splice() 는 배열 자체를 수정
// slice()는 새로운 배열을 리턴해주는 것 (주의할 것이 있다면 strat, end 에서 end index는 exclusive배제되기 때문에
// end + 1 의 index를 해줘야 함
// 나는 그냥 splice()쓰고 원본 array를 복사해서 새로 만들었음 -> slice 를 쓰는게 덜 복잡할듯 end param만 유의

{
  /* 내 answer 
  const array = [1, 2, 3, 4, 5];
  const copiedArr = [...array];
  console.log(copiedArr); // [1,2,3,4,5]
  console.log(copiedArr.splice(0, 2)); // 잘린값 반환[1,2]
  console.log(copiedArr); // [3,4,5]
   */
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(array, result); // [1, 2, 3, 4, 5] ,  [3, 4, 5]
  // 원본도 유지되고 앞의 2엘레멘트가 삭제된 새 배열을 만들었다.
}
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 99),
];

// 05. find a student with the score 90
// find()API를 사용하면 간편하게 할 수 있다. -> 내용은 전혀 간편하지않았음;
// 2개의 param을 받는데 predicate 와 thisArg? 가 있다.
// predicate는 콜백함수를 말함 이 콜백함수의 인자로 (value: T, index: number, obj: T[]) 가 온다.
// 콜백함수는 boolean 타입을 리턴해야하는데 true일 때는 값을 return하고 아니라면 return하지않음
// true를 반환하는 첫번째 element만 반환
{
  const result = students.find((student) => {
    return student.score === 90;
  });
  console.log(result); //Student {name: 'C', age: 30, enrolled: true, score: 90}
}
// 06. make an array of enrolled students

// enrolled 값이 true인 애들만 모아서 새로운 배열을 만들기
// filter() API , 얘도 callback함수 true인 경우만 값을 반환해서 새로운 배열을 만들어줌
// 조건을 콜백함수로 정의하고 그걸로 엘리먼트들을 거른 다음에 새로운 배열로 반환하고 싶으면 filter를 쓰면 된다.
/* The filter() method creates a new array with all elements 
  that pass the test implemented by the provided function. */
{
  const enrolled = students.filter((student) => student.enrolled);
  console.log(enrolled);
}

// 07. make an array containing only the student's scores
// result should be: [45, 80, 90, 66, 88]
// map() API 사용
/*
The map() method creates a new array populated 
with the results of calling a provided function 
on every element in the calling array.
*/
// 주어진 배열이 있으면 각각의 요소를 콜백함수를 한번씩 돌면서 새롭게 다른 값으로 맵핑되어서 반환된다.
// 즉, 콜백함수로 가공되어진 새로운 값을 가진 배열을 가질 수 있게 됨
{
  const result = students.map((student) => student.score);
  console.log(result); //[45, 80, 90, 66, 99]
}
console.clear();
// 08. check if there is a student with the score lower than 50
// some() API는 콜백함수의 결과로 true가 되는 엘리먼트가 하나라도 존재한다면 true를 리턴하고 아니라면 false
// 즉, 리턴값이 boolean이고 콜백함수를 각각의 엘리먼트마다 돌려서 확인합니다.

// every() API는 some과 다르게 모든 element가 콜백함수의 결과로 true여야만 합니다.
// 결론적으로 some()은 엘리먼트의 조건이 하나라도 만족하는 경우, every()는 모든 엘리먼트가 조건에 만족해야할 경우를 판단
{
  const result = students.some((student) => student.score < 50);
  console.log(result); //t
  //some을 이용해서 50보다 낮은 애가 있는지 확인하는 것,
  // 즉 every 구문이 true를 반환한다면(모든 학생이 50점 이상이라면) 전체에 !not 연산자를 붙여서 false
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); //t
}

console.clear();
// 09. compute student's average score
// reduce() API사용하면 됨 -> 나만 어려운가 너무 어려움 죽여줘.
// 콜백함수의 리턴값은 누적된 결과값이다.
// 배열에 있는 모든 요소들의 값을 누적하거나 모아놓을 때 쓰는 것!
//reduce 의 인자로는 콜백함수와 초기값을 넣을 수 있다.
// 콜백함수의 인자로는 prev(이전값), curr(현재값) 을 받을 수 있으며 이 함수는 return값을 줘야한다.
// + reduceRight() API는 역순서로 계산하는 기능
// redece의 콜백함수의 인자 prev는 이전에 누적된 값이 출력되는 것이고 currnet는 배열의 아이템을 순차적으로 전달받는 것
{
  /*
    const result = students.reduce((prevValue, currStudent) => {
    console.log('--------');
    console.log(prevValue);
    console.log(currStudent);
    return prevValue + currStudent.score;
  }, 0);
  */
  //아래는 위의 코드를 간단하게 작성한 것
  const result = students.reduce(
    (prevValue, currStudent) => prevValue + currStudent.score,
    0,
  );
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be : '45, 80, 90, 66, 99'
// map()과 join() 이용하기
// map을 이용하면 새로운 배열이 리턴된다.
{
  const result = students
    .map((student) => student.score)
    // 50점 이상인 것들만 가져오고 싶다면 filter()로 걸러주면됨
    .filter((score) => score >= 50)
    .join();
  console.log(`the answer of Q10 is ${result}`);
}
// Q10의 결과를 -> Q11 오름차순 정렬하기
// result should be: '45, 66, 80, 88, 90'
{
  const sortedStringResult = students
    .map((student) => student.score)
    // sort에서 a-b가 오름차순인 이유: a가 b보다 작으니까 음수값을 리턴 return value가 0보다 작으면 오름차순 정렬
    // 반대로 내림차순을 하려면 b-a 를 하면 된다.
    .sort((a, b) => a - b)
    .join();
  console.log(sortedStringResult); //45,66,80,90,99
}
// sort 추가정리
// sort의 콜백함수는 첫번째(이전값) element와 두번째(현재값) element를 매개변수로 받는데
// 둘을 계산한 리턴값이 마이너스(음수)라면 첫번째가 두번째 arg보다 작다고 간주되어 정렬된다.
/* 
return value > 0	    sort b before a 양수일 때 b->a 순서
return value < 0	    sort a before b 음수일 때 a->b 순서 
return value === 0	  keep original order of a and b
*/
