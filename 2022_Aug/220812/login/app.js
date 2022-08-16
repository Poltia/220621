/*
로그인 만들기

express, dotenv, fs, jsonwebtoken, express-session, mysql2
개발용 nodemon

npm 초기화
packjson 생성
-------------
npm init -y
-------------

모듈 설치
---------------------------------------------------------------
npm i express dotenv jsonwebtoken express-session mysql2
---------------------------------------------------------------
npm i --save-dev nodemon
---------------------------------------------------------------
*/

// express 모듈 가져오기
const express = require("express");
// .env파일을 사용하기위해 모듈 가져오면서 설정
const dot = require("dotenv").config();
// jsonwebtoken 모듈 가져오기
const jwt = require("jsonwebtoken");
// express-session 모듈 가져오기
const session = require("express-session");
// mysql2 모듈 가져오기
const mysql = require("mysql2");
// fs 모듈 가져오기
const fs = require("fs");

// mysql 로컬 데이터베이스 연결
// !! mysql.server start !!
// mysql.createConnection()를 이용해서 연결 및 생성
const client = mysql.createConnection({
    // 데이터베이스 계정의 이름
    user: "root",
    // root 계정의 비밀번호
    password: "12345678",
    // 연결할 데이터베이스의 이름
    database : "test7",
    // multipleStatements 다중 쿼리문을 사용할 수 있도록 하는 옵션
    multipleStatements: true
});

// 서버 객체 생성
const app = express();

// req.body 객체를 사용 준비
// express가 버전업되면서 express설정으로 body객체를 사용하게 설정할 수 있다. body-parser를 사용하지 않아도됨
app.use(express.urlencoded({extended:false}));
// 세션도 사용준비
app.use(session({
    // 세션발급할 때 사용할 키
    secret : "",
    // 세션을 저장하고 불러올 때 세션을 다시 저장할지 여부
    resave : false,
    // 세션에 저장할 때 초시화 여부를 설정
    saveUninitialized : true,
}))

app.get("/", (req, res) => {
    fs.readFile("view/login.html", "utf-8", (err, data) => {
        // login.html 파일을 utf-8 인코딩을 해서 send()를 이용해서 data를 보내줌(응답해줌)
        res.send(data);
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(PORT,"번 포트 열림");
});
