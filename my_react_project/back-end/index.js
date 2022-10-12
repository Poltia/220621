const express = require("express");
const cors = require("cors");
const { sequelize, User } = require("./public");
const bcrypt = require("bcrypt");

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

app.use(cors(options));

// 로그인 //
app.post("/login", async (req, res) => {
    let { id, password } = req.body;
    const users = await User.findOne({
        where: { user_id: id },
    })
        .then((e) => {
            bcrypt.compare(password, e.password, (err, same) => {
                if (same) {
                    console.log(id + " 로그인");
                    res.send(true);
                }
            });
        })
        .catch(() => {
            res.send(false);
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
