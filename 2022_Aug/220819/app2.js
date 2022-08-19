
// 사용할 모듈
// express ejs dotenv sequelizw mysql2 (내장모듈 path) 개발용 nodemon
// path : 기본경로를 다룰수 있게 도와주는 모듈

const express = require("express");
const ejs = require("ejs");
const path = require("path");
// 폴더 경로까지만 잡으면 index를 탐색하고 찾은 index파일을 기본으로 가져옴
const { sequelize } = require("./model"); // 키값만 빼서 샤용

// 서버 객체 생성
const app = express();

// app.set()로 express에 값을 저장
// path.join() : 매개변수로 받은 문자열들을 주소처럼 합쳐준다.
// ex) path.join('a','b') => a/b
app.set("views", path.join(__dirname, "view")); // __dirname : 현재 파일까지의 경로
// views폴더까지의 경로가 기본값. 랜더링할 파일을 모아둔 폴더

// 랜더링하는 기본 엔진을 ejs처럼 사용한다고 알려준다.
/*app.get("/", (req, res) => {
    // fs모듈로 파일을 가져오고 //
    res.send(ejs.render(data,{e}));
});*/
// 을 생략 가능하게 함?
app.engine("html", ejs.renderFile);

// view engine을 html을 랜더링할 때 사용하겠다고 설정
app.set("view engine", "html");

// body 객체 사용하겠다고 설정.
app.use(express.urlencoded({ extended : false }));

// sequelize를 구성 해보자!
// 연결 및 테이블 생성. 여기가 처음 매핑
// sync() : 데이터베이스 동기화 하는데 사용
// 여기서 필요한 테이블들이 다 생기고 매핑된다. 절대 어긋날 일이 없다.
// 테이블의 내용이 다르면 오류가 난다.
// 여기서 CREATE TABLE 문이 여기서 실행된다.
sequelize.sync({force:false}) // force : 강제로 초기화 시킬지 여부
    .then(() => {
        // 연결 성공시
        console.log("DB 연결");
    }).catch((err) => {
        // 연결 실패시
        console.log(err);
    });

// 서버 연결
const PORT = 3001;
app.listen(PORT, () => {
    console.log(PORT, "번 포트 사용중");
});