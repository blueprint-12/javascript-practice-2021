//bash를 사용해서 node test.js가 안먹힐때에는 폴더위치를 유의해서 보면된다.
//나는 해당 경로 폴더에 바로 test.js파일을 만든것이 아니라 폴더의 내부폴더 안에 작성했기 때문에
// cd(cange direction)을 통해 경로를 바꿨더니 node test.js가 정상실행됐다.

//npm - 오픈소스가 가득 들어있는 곳이라고 생각하면 편하다
// node에서 어떤 기능을 구현하고 싶다면 'npm 내가 원하는 기능'을 google에 검색하면 원하는 기능을 찾을 수 있다.
// email 기능을 구현하고 싶으면 nodemailer 를 사용하면 된다.
//https://nodemailer.com/about/
// node에서는 필요한 모듈을 설치할 때, 명령어: npm install 설치하려는 모듈명
// 모듈을 설치하고 나면 여러 파일들이 생기는데 그 중
// package-lock.json에 설치된 모듈의 정보가 들어있다.

const nodemailer = require('nodemailer');
