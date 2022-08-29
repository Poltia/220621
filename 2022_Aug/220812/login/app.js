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

const bcrypt = require("bcrypt");
/* bcrypt
처음부터 단방향으로 암호화시켜주는 해시함수
bcrypt는 값이 4등분.
algorithm : 알고리즘앞에 "$2a$"는 bcrypt 라는 것이다.
cost factor : 키 스트레칭한 횟수. 2의 n제곱으로 반복시킨다. (10이면 1024번 반복)
salt : 128비트의 솔트 22자 base64로 인코딩
hash : 솔트 기법과 키 스트레칭을 한 해쉬값

const pw = "880423"
bcrypt.hash(pw, 10, (err, data) => {
  console.log(data);
});
*/


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
    // 세션발급할 때 사용할 키. 노출되면 안되니까 .env파일에 값을 저장해놓고 사용
    secret : process.env.SESSION_KEY,
    // 세션을 저장하고 불러올 때 세션을 다시 저장할지 여부
    resave : false,
    // 세션에 저장할 때 초기화 여부를 설정
    saveUninitialized : true,
}))

app.get("/", (req, res) => {
    fs.readFile("view/login.html", "utf-8", (err, data) => {
        // login.html 파일을 utf-8 인코딩을 해서 send()를 이용해서 data를 보내줌(응답해줌)
        res.send(data);
    });
});
/*
//id 는 AUTO_INCREMENT PRIMARY KEY 컬럼값을 추가하지 않아도 자동으로 증가하는 숫자
//user_id 이름으로 컬럼을 만들고 VARCHAR(255) 문자 255자 까지 허용
const sql = "create table users (id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(255), password VARCHAR(255), refresh VARCHAR(255))";
// client 객체안에 query()로 쿼리문 실행
client.query(sql);
*/

app.get("/join", (req, res) => {
    fs.readFile("view/join.html", "utf-8", (err, data) => {
        // join.html 파일을 utf-8 인코딩을 해서 send()를 이용해서 data를 보내줌(응답해줌)
        res.send(data);
    });
});

app.post("/join", (req, res) => {
    // req.body 객체에 있는 키값으로 변수에 할당
    // req.body.userId가 userId에 담긴다.
    // req.body.password가 password에 담긴다.
    // {이 안에 키값} 객체 구문으로 묶어서 변수를 받으면 해당 객체의 키값의 밸류를 받을 수 있다.
    const {userId, password} = req.body;
    // 쿼리문 INSERT INTO users = users테이블에 추가한다.
    // 값을 넣어서 추가하는 컬럼은 (user_id, password) 두개
    // VALUES(?,?)값의 밸류는 옵션으로 전달한다.

  bcrypt.hash(password, 10, (err, data) => {
    const sql = "INSERT INTO users (user_id, password) VALUES (?,?);"
    client.query(sql, [userId, data], () => {
        // redirect()로 매개변수 url 해당 경로로 페이지를 이동시켜준다.
        res.redirect("/");
    });
  });

});

// 로그인
app.post("/login", (req, res) => {
    const {userId, password} = req.body;
    //res.send("ID : " + userId + "<br>password : " + password);
    // SELECT * FROM users => users 테이블을 찾고,
    // WHERE user_id=? => WHERE user_id로 검색

  bcrypt.hash(password, 10, (err, data)=>{
    console.log(data);
  })
    const sql = "SELECT * FROM users WHERE user_id=?;"
    client.query(sql, [userId], (err, result) => {
        if (err) {
            res.send("계정 없음");
        } else {
            // result[0]에 값이 있으면 계정이 존재한다는 뜻. 아니면 계정이 없다.
            // ?. 구문 뒤에 키값이 있는지 먼저 보고 값을 참조한다. 그래서 없으면 터지는일(크래쉬)를 방지.
            if (result[0]) {
              bcrypt.compare(password, result[0]?.password, (err, same) => {
                if (same) {
                  // 로그인 성공했으니까 토큰 발급
                  // access token 발급
                  const accessToken = jwt.sign({
                      // payload값. 전달할 값
                      userId : result[0].user_id,
                      mail : "mymail",
                      name : "myname"
                  },
                  // ACCESS_TOKEN 비밀키
                  process.env.ACCESS_TOKEN, {
                      expiresIn: "5s",
                  });
                  const refreshToken = jwt.sign({
                      // payload값. 전달할 값
                      userId : result[0].user_id
                  },
                  // REFRESH_TOKEN 비밀키
                  process.env.REFRESH_TOKEN, {
                      expiresIn: "1m"
                  });
                  // UPDATE users SET refresh => users 테이블의 refresh 값을 수정
                  // WHERE user_id=? => user_id 값으로 검색
                  const sql = "UPDATE users SET refresh=? WHERE user_id=?;"
                  client.query(sql, [refreshToken, userId]);
                  // 세션에 accessToken값을 access_token키값에 밸류로 할당
                  req.session.access_token = accessToken;
                  // 세션에 refreshToken값을 refresh_token키값에 밸류로 할당
                  req.session.refresh_token = refreshToken;
                  res.send({access : accessToken, refresh : refreshToken});
                } else {
                  res.send("비밀번호 틀림")
                }
              })
            } else {
                res.send("계정 없음");
            }
        }
    });
});

/* 미들웨어란?

로그인을 해서 어서오세요/환영합니다. 로그인이 유지되어 있는 페이지에 접속되고
로그인이 유지되고 있는 동안에만 동작해야하는 페이지들이 있는데, 로그인 유지를 확인하고 요청을 보내야 한다.
어떻게 해야할까?

미들 웨어란, 간단하게 클라이언트에게 요청이 오고 그 요청을 보내기 위해 응답하는 중간(미들)에 목적에 맞게 처리해주는 중간단계.
요청에 응답이 도달하기 위해서 미들웨어를 통과해야 응답까지 도달할 수 있다. (문지기 같은 역할) 엑세스 권한

구조는
req(요청)객체, res(응답)객체, next()를 이용해서 통과 요청을 넘길 수 있다.
요청을 처리하기전에 중간에 기능을 동작시켜주는 것.
*/

// 매개변수는 (요청객체, 응답객체, next함수)
const middleware = (req, res, next) => {
    // 세션값을 가져온다.
    // const access_token = await req.session.access_token;
    // const refresh_token = await req.session.refresh_token;
    const { access_token, refresh_token } = req.session;
    // access_token 값을 먼져 검증 한다 유효 기간이 끝나지 않았는지 안썩었는지
    jwt.verify(access_token, process.env.ACCESS_TOKEN, (err, acc_decoded) => {
      if (err) {
        // 썩은 토큰 이면
        // 여기서 로그인 페이지로 넘긴다던지
        // 404 500 에러페이지를 만들어서 보여준다던지
        // 본인의 방향성으로 페이지 구성 하시면 됩니다.
        jwt.verify(
          refresh_token,
          process.env.REFRESH_TOKEN,
          (err, ref_decoded) => {
            if (err) {
              res.send("다시 로그인 해주세요");
            } else {
              const sql = "SELECT * FROM users WHERE user_id=?";
              client.query(sql, [ref_decoded.userId], (err, result) => {
                if (err) {
                  res.send("데이터 베이스 연결을 확인해주세요");
                } else {
                  if (result[0]?.refresh == refresh_token) {
                    const accessToken = jwt.sign(
                      {
                        userId: ref_decoded.userId,
                      },
                      process.env.ACCESS_TOKEN,
                      {
                        expiresIn: "5s",
                      }
                    );
                    req.session.access_token = accessToken;
                    // 다음 콜백 실행
                    next();
                  } else {
                    res.send("sdfsdfsdfsd다시 로그인 하세요");
                  }
                }
              });
            }
          }
        );
      } else {
        next();
      }
    });
};

// middleware함수에서 next()를 사용하지 못하면 다음 콜백함수는 실행되지 않는다. (문지기한테 막힘)
// next()를 실행하면 다음 콜백으로 이동해서 요청 및 응답 작업 동작을 한다.
// 로그인이 되어있는 페이지만 요청과 응답을 할 수 있다.
app.get("/check", middleware, (req, res) => {
    res.send("로그인 되어 있음");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(PORT,"번 포트 열림");
});
