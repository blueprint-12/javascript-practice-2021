'use strict';

// Array🧁

// 1. 선언방법
const arr = new Array();
const arr2 = [1, 2];

// 2. Index position
// 인덱스를 통해서 배열에 접근하기
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0], fruits[1]);
// 인덱스는 0이 처음, 마지막 인덱스는 array.length -1 하면 된다.
console.log(fruits[fruits.length - 1]); // banana

// 3. Looping over an array
// 배열 순회하는 방법

console.clear();

// 1. for loop 사용하기
// 2. for ...of 사용하기
// 3. forEach API 사용하기 제일 간단
for (let fruit of fruits) {
  console.log(fruit);
}
//forEach는 인자로 콜백함수를 받는데 콜백함수는 3가지 인자를 받을 수 있음,
// value, index, array 근데 array자체는 굳이 안받아와서 씀
// forEach함수는 콜백함수를 배열의 각각의 요소마다 실행시킴
// callback함수를 익명함수로 작성하면 화살표함수 형식으로 써서 간편하게 표현가능

/*
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});
*/
// 참고로 화살표함수의 경우에 한줄짜리 코드이면 중괄호랑 세미콜론이 필요없음, 위의 코드를 아래와 같이 표현가능
//forEach는 배열의 요소(value)마다 내가 전달한 함수를 출력한다.
fruits.forEach((fruit) => console.log(fruit));

// 4. 배열에 더하기, 삭제, 복사 하는법(Addition, deletion, copy)
// push: 배열의 맨 뒤에 아이템을 넣음
fruits.push('딸기', '복숭아');
// pop: 배열의 맨 뒤에서부터 아이템을 삭제
fruits.pop(); //맨 뒤에 있던 복숭아 삭제
console.log(fruits); // apple, banana, 딸기

// unshift: 배열의 맨 앞부터 아이템을 넣음
fruits.unshift('앞과일1', '앞과일2');
// shift: 배열의 맨 앞부터 아이템을 삭제
fruits.shift(); // 앞과일1 삭제
console.log(fruits); //['앞과일2', 'apple', 'banana', '딸기']

// note!! shift와 unshift 는 pop과 push보다 훨씬 느리다! 그래서 잘 안쓰나봄;
// 제일 뒤에서 아이템을 접근하는 것은 데이터를 빈공간에 할당하고 삭제하고 하는 것이라서 하나만 움직이면되지만
// 맨앞에서 아이템을 수정하는 것은 배열 전체가 재정렬을해야하기 때문에 배열의 크기가 클수록 성능 저하를 불러온다.

// 인덱스를 사용해서 원하는 아이템을 삭제 추가하는 방법

//splice 를 사용하면 지정된 위치에서 아이템을 삭제할수있음
// splice(start, deleteCount? ) 어떤 param 뒤에 "?"가 붙으면 optional
// start num에 해당하는 index부터(얘도 포함되서 삭제), 원하는 숫자까지 삭제함
// 얼마나 지울지 지정하지 않으면 해당 index부터 뒤를 쫙다 삭제함

console.clear();
fruits.push('과일1', '과일2', '과일3');
console.log(fruits); // ['앞과일2', 'apple', 'banana', '딸기', '과일1', '과일2', '과일3'] 7개의 item이 담겨있음
fruits.splice(1, 1); // index 1 부터 1개만 즉, apple만 삭제
console.log(fruits); // ['앞과일2', 'banana', '딸기', '과일1', '과일2', '과일3']
// splice(start, deleteCount?, ...items)
// 3번째 인자로 추가할 아이템들을 주면 삭제되는 첫번째 즉, start 부터 3번 인자로 준 아이템들이 삽입된다.
fruits.splice(0, 1, 'new앞과일1', 'new앞과일2');
console.log(fruits); //['new앞과일1', 'new앞과일2', 'banana', '딸기', '과일1', '과일2', '과일3']

// 2개의 배열을 합치기, concat(합칠 item 혹은 array)
// 원래배열명.concat(합치려는 Item or Array) 합치려는 아이템이나 배열은 원래배열의 뒤에 붙는다.
const fruits2 = ['배', '샤인머스캣'];
const combinedFruits = fruits.concat(fruits2);
console.log(combinedFruits);
//['new앞과일1', 'new앞과일2', 'banana', '딸기', '과일1', '과일2', '과일3', '배', '샤인머스캣']

console.clear();
// 5. Searching (배열 검사)
// find the index

// indexOf() 사용하기 -> 해당 데이터가 있는 index를 리턴한다.
console.log(fruits); // ['new앞과일1', 'new앞과일2', 'banana', '딸기', '과일1', '과일2', '과일3']
console.log(fruits.indexOf('new앞과일1')); //0
console.log(fruits.indexOf('과일1')); //4
//indexOf()는 배열에 없는 요소를 찾고자하면 -1 을 반환한다.
console.log(fruits.indexOf('없는과일')); // -1

//includes() 사용하기 -> 해당 데이터(element)가 있으면 true, 없으면 false 리턴
console.log(fruits.includes('없는과일')); //f
console.log(fruits.includes('딸기')); //t

console.clear();
//lastIndexOf
// 중복데이터가 있을 경우?
fruits.push('new앞과일1');
console.log(fruits); //['new앞과일1', 'new앞과일2', 'banana', '딸기', '과일1', '과일2', '과일3', 'new앞과일1'
console.log(fruits.indexOf('new앞과일1')); // 0이라고 뜸 indexOf의 경우는 맨처음 만나는 데이터를 return하고
console.log(fruits.lastIndexOf('new앞과일1')); // 7 lastIndexOf의 경우는 마지막에 만나는 데이터를 return

// H.W Array 관련 lib 읽어보기(lib.es5.d.ts)
// 윈도우(ctrl키) 맥(command키) 누르고 해당 api누르면 됨

console.clear();
const poped = fruits.pop();
console.log(fruits, poped);
const modifiedFruits = fruits.concat(poped);
//다시 원상복구 시킴
console.log(modifiedFruits); //['new앞과일1', 'new앞과일2', 'banana', '딸기', '과일1', '과일2', '과일3', 'new앞과일1'];

//join() API
// string 타입의 seperator를 optional param으로 정의
// 만약에 그냥 ()으로 생략된 채로 쓰면 "," 콤마로 구분한 string을 반환함
// 저는 (' ') 공백을 넣어서 구분했음
const joinedArr = modifiedFruits.join(' ');
console.log(joinedArr); //new앞과일1 new앞과일2 banana 딸기 과일1 과일2 과일3 new앞과일1 <- 배열아니라 그냥 string

console.clear();
//reverse() - element를 역순으로 정렬해서 반환
const reveredFruits = fruits.reverse();
console.log(reveredFruits);

//sort()
// 디폴트는 오름차순인데 아스키값을 토대로 정렬한다고 함-> 모든 element를 문자열로 취급
// 즉 내부에서 작동하는 비교함수를 작성해줘야함
// 배열의 요소 2개를 param으로 받아서 이를 비교하고 return 값에 따라 정렬
// 리턴값이 0보다 작을 경우 a가 b보다 앞으로 오게 정렬하고 (오름차순: 작은값 -> 큰값 )
// 0보다 클 경우 b가 a 앞으로 오게 정렬 (내림차순: 큰값 -> 작은값)
// 0을 리턴할 경우 재정렬하지 않음
// 주의) 때, 원본 배열인 arr가 정렬이 되고, 리턴하는 값 또한 원본 배열인 arr을 가리키고 있음
// 즉, 원본의 내용도 같이 변경됩니다.
// sortedArr numArr sortedArr2 모두 같은 내용으로 변경됨
console.clear();
const numArr = [2, 6, 114, 6453, 23, 461, -1];
const sortedArr = numArr.sort((a, b) => a - b); //오름차순
const sortedArr2 = numArr.sort((a, b) => b - a); //내림차순
console.log(sortedArr, sortedArr2);

const sortedFruits = fruits.sort();
console.log(sortedFruits);
/*0: "banana"
1: "new앞과일1"
2: "new앞과일2"
3: "과일1"
4: "과일2"
5: "과일3"
6: "딸기"
*/
