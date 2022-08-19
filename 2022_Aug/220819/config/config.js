const dot = require("dotenv").config();

// 데이터베이스 접속에 필요한 설정값 객체
const config = {
    dev : {
        username : "root",
        password : process.env.DATABASE_PASSWORD,
        database : "test",
        host : "127.0.0.1", //여기에 만약 AWS RDS를 쓰거나 지원 데이터베이스 등등을 사용한다면
                            // 이곳에 주소를 넣어주면 됩니다.
        dialect : "mysql"
    },
};

module.exports = config;

// 다수를 내보낼땐 객체로 묶어서 내보내면 된다.