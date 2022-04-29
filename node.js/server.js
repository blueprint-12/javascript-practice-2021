//웹 서버 만들어보기

//package-lock.json파일에 들어가보면 nodemailer 외에도 여러가지가 추가된 것을 볼 수 있다.
// express 하위 목록을 보면 해당 모듈을 만들기 위해 사용된 여러가지 npm모듈들을 볼 수 있다.
/*
Express 공홈에 가면 상세 설명이 있으니 참고 
원하는 경로에 Express를 설치한 후 종속 항목 목록에 저장하려면 아래와 같이 입력
익스프레스 설치하기 명령어: npm install express --save 임시로 설치하고 종속 항목 목록에 
추가하지 않으려면, --save 옵션을 생략하면 된다. 
[ --save 옵션을 통해 설치된 Node 모듈은 package.json 
파일 내의 dependencies 목록에 추가됩니다. 
이후 app 디렉토리에서 npm install을 실행하면
 종속 항목 목록 내의 모듈이 자동으로 설치됩니다. ]

*/

//1.설치한 모듈 가져오기
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('Start Server : localhost: 3000');
});
// 위 상태에서 서버 실행해보기 ->명령어: node server.js
// 정상 실행된 것을 확인하고 웹에 localhost:3000 을 해보면
// Cannot GET/ 이라는 문구를 표시하는 화면이 출력된다.
//-> 해당 화면의 의미는 웹서버는 정상실행됐다라는 것입니다. 연결이 안된다면
// "사이트에 연결할 수 없음" 이라고 뜹니다.

//화면에 내용을 표시하기 위해서 라우터를 통해
/*app.get(라우터 또는 루트URL(/), (req, res)=> {
    //서버에서 전달해줄 내용 
    res.send('화면에 표시할 내용');
});*/

//앱은 서버를 시작하며 3000번 포트에서 연결을 청취한다. 앱은 루트 URL(/) 또는 라우트에 대한 요청에 응답한다.
// 다른 경로에 대해서는 404 Not Found로 응답한다.
// req(요청) 및 res(응답)은 Node가 제공하는 동일한 obj이다. 관련 메소드를 사용할 수 있음

//아래 render()를 하기 위한 셋팅 .set()
//__dirname은 현재 디렉토리를 뜻한다.
// ejs는 JSP랑 비슷한 개념, html안에서 자바스크립트를 쓸 수 있게해주는 템플릿(즉, npm을 통해 설치해야 됨)
// 명령어: npm i ejs --save를 통해 설치한다.

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html');
});
/* app.get('/about', function (req, res) {
   res.send('about page');
 });
 */
//위의 코드를 아래처럼 변경하면 ejs를 사용하여 렌더할 수 있습니다.
app.get('/about', function (req, res) {
  res.render('about.html');
});
//주의) 코드의 내용을 변경했다면 새로고침한다고 바로 재반영되지 않습니다.
//다시 서버를 재실행시켜줘야 변경된 내용 확인가능

// DB랑 연결해보기(찍먹)
// maria DB사용, (mysql에서 나온 거라서 mysql 모듈을 다운하면 호환된다.)
// npm install mysql --save

//결론 express모듈을 통해 웹서버 구축, mysql모듈을 통해 데이터베이스 연결
