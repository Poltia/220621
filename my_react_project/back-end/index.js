const express = require("express");
const session = require("express-session");
const cors = require("cors");
const { sequelize, User } = require("./public");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dot = require("dotenv");
dot.config();

// 서버 객체 생성
const app = express();

// sequelize 연결 및 테이블 생성
sequelize
    .sync({ force: false }) // 초기화 하는 곳!
    .then(() => {
        console.log("DB 연결");
    })
    .catch((error) => {
        console.log(error);
    });

// 리액트 포트 연결
const options = {
    // 허용 해줄 주소 ㄱ
    origin: "http://localhost:3000",
};
app.use(cors(options));

// 전달받은 객체 형태를 해석해서 사용할 수 있게하는 설정
app.use(express.json());

// 세션 사용준비
app.use(
    session({
        secret: process.env.SESSION_KEY,
        resave: false,
        saveUninitialized: true,
    })
);

// 로그인 //
app.post("/login", async (req, res) => {
    let { id, password } = req.body;
    const users = await User.findOne({
        where: { user_id: id },
    }).then((e) => {
        if (e) {
            bcrypt.compare(password, e.password, (err, same) => {
                if (same) {
                    // access token 발급
                    const access_token = jwt.sign(
                        { user_id: id },
                        process.env.ACCESS_TOKEN_KEY,
                        { expiresIn: "1h" }
                    );
                    // refresh token 발급
                    const refresh_token = jwt.sign(
                        { user_id: id },
                        process.env.REFRESH_TOKEN_KEY,
                        { expiresIn: "1d" }
                    );
                    // 세션에 각 토큰값을 할당. express-session에 저장
                    req.session.access_token = access_token;
                    req.session.refresh_token = refresh_token;
                    req.session.id = id;
                    // console.log("access token : " + access_token);
                    // console.log("refresh token : " + refresh_token);
                    console.log(id + " 로그인");
                    res.send({ isLogin: true, session: req.session });
                } else res.send(false);
            });
        } else {
            res.send(false);
        }
    });
});

// 토큰 확인 //
app.post("/tokencheck", (req, res) => {
    let { access, refresh } = req.body;
    // access token 확인
    jwt.verify(access, process.env.ACCESS_TOKEN_KEY, (err, acc_decoded) => {
        if (err) {
            // access token 만료시 ㄱ
            // refresh token 확인
            jwt.verify(refresh, process.env.REFRESH_TOKEN_KEY, (err, ref_decoded) => {
                if ((access === null || access === undefined) && refresh !== undefined) {
                    // access token 이 없으면
                    res.send({ relogin: true });
                } else if (err) {
                    // refresh token 만료시 ㄱ
                    res.send({ relogin: true });
                } else {
                    // refresh token은 만료가 아니면
                    const access_token = jwt.sign(
                        { user_id: ref_decoded.user_id },
                        process.env.ACCESS_TOKEN_KEY,
                        { expiresIn: "1h" }
                    );
                    req.session.access_token = access_token;
                    res.send({ relogin: false, session: req.session });
                }
            });
        } else {
            // access token 이 정상이면 ㄱ (재발급. 로그인연장)
            const access_token = jwt.sign(
                { user_id: acc_decoded.user_id },
                process.env.ACCESS_TOKEN_KEY,
                { expiresIn: "1h" }
            );
            req.session.access_token = access_token;
            res.send({ relogin: false, session: req.session });
        }
    });
});

// 아이디 중복체크 //
app.post("/idcheck", async (req, res) => {
    let { id } = req.body;
    const idcheck = await User.findOne({
        where: { user_id: id },
    }).then((e) => {
        if (e) {
            res.send(true);
        } else res.send(false);
    });
});

// 회원가입 //
app.post("/signup", async (req, res) => {
    let { id, password, phone, email } = req.body;
    const users = await User.findOne({
        where: { user_id: id },
    });
    if (!users) {
        bcrypt.hash(password, 10, (err, data) => {
            User.create({
                user_id: id,
                password: data,
                phone: phone,
                email: email,
            }).then(() => {
                console.log(id + " 가입");
                res.send("회원 가입이 완료 되었습니다.");
            });
        });
    } else {
        res.send("중복된 아이디입니다.");
    }
});

app.listen(8000, () => {
    console.log("8000번 포트 사용중");
});
