
// jwt, express, router
// jsonwebtoken 모듈 가져오기
const jwt = require("jsonwebtoken");
// express 모듈 가져오기
const express = require("express");
// express 라우터 설정을 위해 express.Router() 반환값 변수에 담기
const router = express.Router();
const fs = require("fs");
const dot = require("dotenv");
dot.config();

const secretkey = process.env.SECRETKEY;

router.post("/login", (req, res) => {
    const name = "soon";
    token = jwt.sign({
        //타입
        type : "JWT",
        name : name,
    },
    secretkey, {
        // 토큰의 유효시간
        expiresIn : "5m",
        // 토큰을 발급한 사람
        issuer : "soon",
    }
    );
    //console.log(token)
    req.session.token = token;
    //console.log(req.session)
    let temp = {
        msg : "토큰 발급됨",
        token,
    }
    fs.readFile("view/page2.html", "utf-8", (err, data) => {
        res.send(data);
    })
});

// 설정한 라우터 내보내기
module.exports = router;
