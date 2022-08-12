
/**
 * 입장 토큰만 사용해서 로그인 검증을 했는데,
 * 
 * Access Token만 쓴 방식은...
 * 1. 이용자가 로그인 시도를 하고.
 * 2. 서버에서 이용자를 확인하고 입장권을 발급하는데 JWT토큰 인증정보를 payload에 할당하고 생성
 * 3. 생성한 토큰을 클라이언트에 반환해주고 클라이언트가 이 토큰을 가지고 있는다.
 * 4. 클라이언트에서 권한을 인증 요청할 때 이 토큰을 같이 보낸다.
 * 5. 서버는 토큰을 확인하고 payload의 값(인코딩되어있는 값)을 디코딩해서 사용자의 권한을 확인하고(입장권이 맞는지) 데이터를 반환한다.
 * 6. 만약 토큰이 정상적인지 확인하고(토큰의 입장권 시간이 지났는지).
 * 7. 기한이 지난 토큰이면 새로 로그인 시킨다. (토큰 재발급)
 * 
 * Refresh Token과 같이 사용하면...
 * Access Token만 쓰면 인증보안에 취약할 수 있고, 다른 사람이 악의적으로 토큰을 취득하면
 * 토큰의 유효기간이 끝나기 전까지는 막을 수 없다.(이미 입장권을 보여주고 입장했기때문)
 * Access Token의 유효기간을 짧게하고, 유효기간이 짧으니까 로그인을 자주해야하는 문제가 생기는데,
 * 이를 Refresh Token으로 해결할 수가 있다.
 * Refresh Token과 Access Token 둘다 JWT토큰이고,
 * Refresh Token은 유효기간을 길게 주고, Access Token이 유효기간이 끝났을 때 발급해주는 역할만 한다.
 * 
 * Ex) Access Toeken의 유효기간을 30분 준다면
 * Refresh Token의 유효기간을 1일 주고,
 * Access Token의 유효기간이 끝나면 Refresh Token의 유효기간을 확인하고 Access Token을 재발급 해준다.
 * 
 * Access Token과 Refresh Token 둘다 이용한 인증방식
 * 1. 이용자 로그인
 * 2. 서버에서 사용자를 확인하고 입장권 권한 인증정보를 payload에 할당해서 생성하고, Refresh Token도 생성해서 서버에 저장하고
 * 두 토큰 모두 클라이언트에 반환한다.
 * 3. 클라이언트도 두 토큰을 저장한다.
 * 4. 클라이언트가 권한 인증이 필요해서 요청하면 Access Token을 전달해서 요청한다.
 * 5. 서버는 전달받은 토큰을 확인하고 payload의 인코딩된 값을 디코딩해서 사용자의 권한을 확인한다.
 * 6. 만약 토큰이 (기한이)정상적인지 확인하고.
 * 7. 유효기한이 지난 토큰이면 새로 로그인 시켜서 토큰을 발급 받게 한다. (만료된 Access Token과 Refresh Token을 해더에 실어서 서버에게 보낸다.)
 * 8. 서버는 Access Token과 Refresh Token을 확인하고 Refresh Token이 만료되지 않았으면 새로운 Access token을 발급해서 클라이언트에 전달한다.
 */

/*
사용할 모듈
dotenv, express, cookie-parser, jsonwebtoken, fs, nodemon

모듈 설치------------------------------------------
npm i dotenv express cookie-parser jsonwebtoken
-------------------------------------------------
*/

// 모듈 가져오기
const express = require("express");
const dot = require("dotenv");
const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken");
const fs = require("fs");

// .env파일을 사용하기위해 설정
dot.config();

// 서버 객체 생성
const app = express();

// body 객체를 사용하기 위해 설정
app.use(express.urlencoded({ extended: false }));

// 헤더에 쿠키를 추가하기 위해서 사용
app.use(cookie());

// /view의 이름으로 view폴더의 경로를 설정
app.use("/view", express.static("view"))

// 사용자 정보 객체 더미
const user = {
    id: "soon",
    password: "123"
}

app.get("/", (req, res) => {
    fs.readFile("view/login.html", "utf-8", (err, data) => {
        res.send(data);
    });
});

app.post("/login", (req, res) => {
    // 아이디, 비밀번호
    // req.body 객체안에 있는
    // 키값으로 아이디 비밀번호 값 받아놓기
    const {userid, password} = req.body;
    // 아이디 비밀번호 맞는지 확인(검증)
    if(userid === user.id && password === user.password) {
        // access token 발급
        const accessToken = jwt.sign({
            id: user.id,
        },
        process.env.ACCESS_TOKEN_KEY, {
            expiresIn: "5m"
        }
        );
        // refresh token 발급
        const refreshToken = jwt.sign({
            id: user.id
        },
        process.env.REFRESH_TOKEN_KEY, {
            expiresIn: "1d"
        });
        // 쿠키의 이름은 refresh, 유효기간은 하루
        res.cookie("refresh", refreshToken, {maxAge : 24 * 60 * 60 * 1000});
        return res.send(accessToken);
    }
    else {
        return res.send("아이디, 비밀번호 오류");
    }
});

app.post("/refresh", (req, res) => {
    // ?. 뒤에 오는 키값이 있는지 먼저 확인하고 값 반환
    // req.cookies?.refresh >> refresh의 키값이 없어도 크래쉬 방지
    if(req.cookies?.refresh) {
        const refreshtoken = req.cookies.refresh;
    } else {

    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(PORT, "번 포트 열림")
});

