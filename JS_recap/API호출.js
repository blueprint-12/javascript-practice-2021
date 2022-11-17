// json placeholder 사용(open API)

// 프로미스를 리턴하는 함수는 비동기 처리함수이다. 라는 것을 명심
// fetch 역시 Promise를 리턴하고 있다.
// Promise는 then을 통해 사용할 수 있음
let response = fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
  console.log(res),
);
//fetch를 통해서 데이터를 받아오면 데이터가 아니라 성공한 객체 자체를 받아온다.
//Response객체(결과값의 포장지라고 생각하면된다.)

// 포장을 뜯어봅시다^^

async function getData() {
  let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  let jsonRes = await rawResponse.json();
  console.log(jsonRes);
}

getData();
