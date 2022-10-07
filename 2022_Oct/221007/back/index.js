const express = require("express");
const cors = require("cors");
const { sequelize, user } = require("./public");

const app = express();

/* cors 에서 해결 방법
No 'Access-Control-Allow-Origin' header is present on the requested resource. 라는 에러!!
cors 설정을 해줘야한다.

cors란 브라우저 보안정책
cors는 브라우저가 서로 다른 도메인/포트의 서버로 요청했을때 발생한다.
접근을 허용해줘야 한다.

cors 설치
npm i cors
*/
/* app.use(cors({
    origin: '*', // 모든 요청 허용
    origin: true, // 들어오는 요청 도메인/포트가 자동으로 origin에 들어간다.
    origin: '도메인', // 실제 서비스되는 도메인을 입력해줘서 해당 도메인만 접근할 수 있게 허용
    credential: true 또는 false (사용자 인증이 필요한 리소스를 접근허용 할지 안할지 여부. ex)쿠키)
})) */

sequelize
    .sync({ force: false })
    .then(() => {
        console.log("sequelize 연결됨");
    })
    .catch((err) => {
        console.log(err);
    });

const options = {
    // 현재 이 주소를 허용해줬고, 나중에 배포한 이후에 이곳에 그 도메인을 넣어 주면된다.
    origin: "http://localhost:3000",
    // 지금은 로컬에 작업하기 때문에 사용한것
};

// 전달받은 객체 형태를 해석해서 사용할 수 있게 설정
app.use(express.json());

app.use(cors(options));

app.post("/login", async (req, res) => {
    let { id, password } = req.body;
    const users = await user.findOne({
        where: { user_id: id, user_password: password },
    });
    if (users) {
        res.send(true);
    } else {
        res.send(false);
    }
});

app.post("/signup", async (req, res) => {
    let { id, password } = req.body;
    const users = await user.findOne({
        where: { user_id: id },
    });
    if (!users) {
        user.create({ user_id: id, user_password: password }).then(() => {
            console.log(id + " 가입");
            res.send("가입완료");
        });
    } else {
        res.send("아이디 중복");
    }
});

app.listen(8000, () => {
    console.log("express 서버 열림, PORT: 8000");
});
