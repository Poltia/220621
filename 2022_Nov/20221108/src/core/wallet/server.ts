// 지갑 서버

import express from "express";
import { Wallet } from "./wallet";
import axios from "axios";
// /////////////////////////
// npm i axios
// npm install @types/axios
// /////////////////////////
import nunjucks from "nunjucks";
// /////////////////////////
// npm i nunjucks
// npm install @types/nunjucks
// /////////////////////////

const app = express();

nunjucks.configure("view", {
    express: app, // express 속성에 우리가 만든 express를 연결해준 것
    watch: true, // watch 옵션은 true면 html파일이 변경되면 템플릿 엔진이 리로드 시켜줌
    // chokidar 깔음
});
app.set("view engine", "html");

// axios 사용할 때 디폴트값 세팅
const baseURL = "http://localhost:3000";
const baseAuth = Buffer.from("chan" + ":" + "1234").toString("base64");
const request = axios.create({
    baseURL,
    headers: {
        // API 서버에서 데이터를 요청 응답할때 HTTP Authorization 헤더에
        // 유저의 아이디와 비밀번호를 base64형태로 인코딩한 문자열을 추가해서 인증하는 방식
        // base64로 인코딩 되어 전송 되기 때문에 중간에 공격에 취약하기는 하다...
        Authorization: "Basic" + baseAuth,
        "Content-type": "application/json",
    },
});

app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/newWallet", (req, res) => {
    res.json(new Wallet());
});

app.listen(4000, () => {
    console.log("서버 4000번에 열림");
});
