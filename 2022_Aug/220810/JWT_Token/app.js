
const express = require("express");
// express-session 모듈 가져오고
const session = require("express-session");
// session-file-store모듈을 가져오면서 함수 실행
const FileStore = require("session-file-store")(session);

const app = express();
const page = require("./view/page");
const verify = require("./verify");
const createToken = require("./token")

// 설치할 모듈
// -------------------------------
// npm i express-session
// 저장된 세션의 정보를 파일로 보기 위해
// npm i session-file-store
// -------------------------------

// 루트로 절대경로 설정
app.use(express.static(__dirname));

app.use(
  session({
    // 세션을 발급할때 사용되는 키 소스코드 노출 안되게 하자. 세션의 암호화
    secret: "key",
    // 세션을 저장할고 불러올때 다시 저장할지 여부
    resave: false,
    // 세션에 저장할 때 초기화 여부
    saveUninitialized: true,
    // 저장소를 만들지 여부
    store: new FileStore(),
  })
);

// 앞에 url이 있으면 해당 URL 요청에서 사용할 것이라는 뜻
// 모든 요청에서 사용
app.use(page);
app.use(createToken);
app.use("/userview", verify);

// express session
const PORT = 3000;
app.listen(PORT, () => {
  console.log(PORT,"번 포트 열림");
});
