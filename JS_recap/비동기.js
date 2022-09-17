// ⭐setTimeout() (WebAPI)
{
  console.log('hello');

  setTimeout(function () {
    console.log('bye');
  }, 3000);

  console.log('hello 2!');

  //결과: hello, hello2, bye 순서로 진행
}

// {
//   //콜백함수를 통해 특정 로직이 끝났을 때 원하는 동작을 실행
//   function getData(callbackfunc) {
//     $.get('https:~~', function (res) {
//       callbackfunc(res);
//     });
//   }
//   // 콜백함수가 호출되는 시점은 데이터가 준비된 시점이라서 콜백을 통해 비동기처리를 할 수 있습니다.
//   getData(function (tableData) {
//     console.log(tableData);
//   });
//   //콜백함수의 단점: 콜백 지옥-> 코드의 가독성도 떨어지고 로직을 변경하기도 어렵다.
// }
//⭐ 콜백지옥을 해결하는 방법 Promise & Async 사용하기!
//{
//   function parseValueDone(id) {
//     auth(id, authDone);
//   }
//   function authDone(result) {
//     display(result, displayDone);
//   }
//   function displayDone(text) {
//     console.log(text);
//   }
//   $.get('url', function (response) {
//     parseValue(response, parseValueDone);
//   });
// }

//⭐ Promise가 무엇인가요?
// 프로미스는 자바스크립트 비동기 처리에 사용되는 객체이다.
// 사용용도: 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용합니다.
{
  function getData(callback) {
    // new Promise() 추가
    return new Promise(function (resolve, reject) {
      $.get('url 주소/products/1', function (response) {
        // 데이터를 받으면 resolve() 호출
        resolve(response);
      });
    });
  }

  // getData()의 실행이 끝나면 호출되는 then()
  getData().then(function (tableData) {
    // resolve()의 결과 값이 여기로 전달됨
    console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
  });
}

{
  function getData(callback) {
    // new Promise() 추가
    return new Promise(function (resolve, reject) {
      $.get('url 주소/products/1', function (response) {
        // 데이터를 받으면 resolve() 호출
        resolve(response);
      });
    });
  }

  // getData()의 실행이 끝나면 호출되는 then()
  getData().then(function (tableData) {
    // resolve()의 결과 값이 여기로 전달됨
    console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
  });
}

// 프로미스 코드 - 쉬운 예제
{
  function getData() {
    return new Promise(function (resolve, reject) {
      $.get('url 주소/products/1', function (response) {
        if (response) {
          resolve(response);
        }
        reject(new Error('Request is failed'));
      });
    });
  }

  // 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
  getData()
    .then(function (data) {
      console.log(data); // response 값 출력
    })
    .catch(function (err) {
      console.error(err); // Error 출력
    });

  // 호출된 메서드에 따라 then() 이나 catch()로 분기하여 응답 결과 또는 오류를 출력할 수 있습니다.
}

//⭐여러 개의 프로미스 연결(Promsie Chaining)
// 프로미스의 또 다른 특징은 여러 개의 프로미스를 연결하여 사용할 수 있다는 점입니다.
// then() 메서드를 호출하고 나면 새로운 프로미스 객체가 반환됩니다.
{
  function getData() {
    return new Promise({
      // ...
    });
  }

  // then() 으로 여러 개의 프로미스를 연결한 형식
  getData()
    .then(function (data) {
      // ...
    })
    .then(function () {
      // ...
    })
    .then(function () {
      // ...
    });
}
{
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(1);
    }, 2000);
  })
    .then(function (result) {
      console.log(result); // 1
      return result + 10;
    })
    .then(function (result) {
      console.log(result); // 11
      return result + 20;
    })
    .then(function (result) {
      console.log(result); // 31
    });
}
// async & await 맛보기
// 일반적으로 자바스크립트의 비동기 처리 코드는 콜백을 사용해야지 코드의 실행 순서가 보장받을 수 있다.
{
  // 비동기 처리를 콜백으로 안해도 된다면..
  function logName() {
    var user = fetchUser('domain.com/users/1');
    if (user.id === 1) {
      console.log(user.name);
    }
  }
}
{
  // async & await 적용 후
  async function logName() {
    var user = await fetchUser('domain.com/users/1');
    if (user.id === 1) {
      console.log(user.name);
    }
  }
}

// async & await 기본 문법
// 함수 앞에 async 라는 예약어를 붙인다.
// 함수 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 await을 붙인다.
{
  async function 함수명() {
    await 비동기_처리_메서드_명();
  }
}

{
  const promise = new Promise((resol, rej) => {
    setTimeout(() => resol('성공!'), 1000);
  });
  promise
    .then((res) => {
      return res;
    })
    .then((res) => console.log(res + '레레레'));
}
