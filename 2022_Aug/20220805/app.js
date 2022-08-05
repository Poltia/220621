
/* 경매소 만들기
소켓 ejs 활용해서 경매소 만들기

사용할 모듈
express, ejs, socket.io, fs, nodemon

1. packjson 설치 하고
2. express 서버 세팅
3. 페이지 라우터 분리해서 보여주기
4. nodemon 개발 버전으로 설치

/루트경로 페이지 하나
/shop 페이지 하나
*/

const express = require("express");
const ejs = require("ejs");
const socketio = require("socket.io");
const fs = require("fs");

const app = express();

// 상품의 번호를 정해줄 변수
let counter = 0;

// 생성자 함수
function Product(name, image, price, count) {
    // 번호가 증가 할 수 있도록 증감 연산자 사용 count++
    this,index = counter++;
    this.name = name;
    this.omage = image;
    this.price = price;
    this.count = count;
}

// 동적 할당으로 new를 붙여서 생성자 함수 사용
//console.log(new Product("사과", "/", 2000, 20));

// 상품을 가지고 있을 박스
// 상품들 전부 가지고 있다.
const products = [
    new Product("사과", "/", 2000, 20),
    new Product("수박", "/", 2000, 20),
    new Product("초코바", "/", 2000, 20),
    new Product("비타민", "/", 2000, 20),
    new Product("커피", "/", 2000, 20)
];

console.log();

const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(PORT+" port server start");
});

// 소켓 생성 및 실행
const io = socketio(server);

// html에서 css, js 불러올때 쓰는거 (express.static)
app.use(express.static(__dirname+"/")); // "기본으로 설정할 경로"
/**
use 함수 사용해서 설정 추가
이름도 사용하겠다는 뜻
express static 함수 사용
app.use(express.static("/기본으로 설정할 경로의 이름 설정",__dirname + "/기본으로 설정할 경로"))
여러개 만들어서 사용 가능
*/

app.get("/", (req, res) => {
    fs.readFile("page.html", "utf-8", (err, data) => {
        res.send(data);
    });
});

app.get("/shop", (req, res) => {
    // fs.readFileSync("shop.html", "utf-8"); 이렇게 쓰고 반환값을 받으면
    // html 파일을 읽어서 utf-8 인코딩하고 반환 해준다.
    const page = fs.readFileSync("shop.html", "utf-8");
    res.send(page);
});