const express = require("express");
const { sequelize, User } = require("./public");

// 서버 객체 생성
const app = express();

// sequelize 연결 및 테이블 생성
sequelize
    .sync({ force: false })
    .then(() => {
        console.log("DB 연결");
    })
    .catch((error) => {
        console.log(error);
    });

app.listen(8000, () => {
    console.log("8000번 포트 사용중");
});
