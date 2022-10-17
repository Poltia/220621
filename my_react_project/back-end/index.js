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

const options = {
    // 허용 해줄 주소 ㄱ
    origin: "http://localhost:3000",
};

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

app.use(cors(options));

// 토큰 확인하는 미들웨어 함수
const check_token = (req, res, next) => {
    const { access_token, refresh_token, id } = req.session;
    // access_token 확인
    jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err, acc_decoded) => {
        if (err) {
            // access_token이 만료 되었으면
            jwt.verify(
                refresh_token,
                process.env.REFRESH_TOKEN_KEY,
                (err, ref_decoded) => {
                    if (err) {
                        console.log("refresh token 불량");
                    } else {
                        // DB에 refresh token 확인
                        User.findOne({
                            where: { user_id: id },
                        }).then((e) => {
                            if (e?.refresh_token === refresh_token) {
                                // refresh token이 정상(똑같)이면 ㄱ
                                const access_token = jwt.sign(
                                    { user_id: ref_decoded.user_id },
                                    process.env.ACCESS_TOKEN_KEY,
                                    { expiresIn: "1d" }
                                );
                                req.session.access_token = access_token;
                                next();
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

// 로그인 //
app.post("/login", async (req, res) => {
    let { id, password } = req.body;
    const users = await User.findOne({
        where: { user_id: id },
    }).then((e) => {
        if (e) {
            bcrypt.compare(password, e.password, (err, same) => {
                if (same) {
                    console.log(id + " 로그인");
                    res.send(true);
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
                    // DB에 refresh token 저장
                    User.update(
                        // 바꿀 내용의 객체
                        {
                            refresh_token: refresh_token,
                        },
                        // 찾을 곳의 객체
                        {
                            where: { user_id: id },
                        }
                    );
                    // 세션에 각 토큰값을 할당. express-session에 저장
                    req.session.access_token = access_token;
                    req.session.refresh_token = refresh_token;
                    req.session.id = id;
                    // console.log("access token : " + access_token);
                    // console.log("refresh token : " + refresh_token);
                } else res.send(false);
            });
        } else {
            res.send(false);
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
