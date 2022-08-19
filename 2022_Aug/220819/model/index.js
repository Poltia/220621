const _sequelize = require("sequelize");

// config.js에서 module.exports = config 를 해서 내보내기를 하고
// require("../config/config") 로 받아온다.
const config = require("../config/config");

// sequelize 객체 생성
const sequelize = new _sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

// export 하기 위해서 빈객체를 만듬.
const db = {};
// 빈객체에 sequelize 키값으로 시퀄라이즈 객체를 만든것을 넣어준다.
db.sequelize = sequelize;

// 보내고싶은 값을 다 넣은 객체를 export
module.exports = db;