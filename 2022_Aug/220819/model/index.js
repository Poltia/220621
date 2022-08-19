/* model안에 있는 js파일들을 모아서 사용하는 곳 */ //이라고 생각하면 된다!

const _sequelize = require("sequelize");

// config.js에서 module.exports = config 를 해서 내보내기를 하고
// require("../config/config") 로 받아온다.
const config = require("../config/config");
const User = require("./users");
const Post = require("./posts");

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

// 내보내기 위해 db의 키값에 추가
db.sequelize = sequelize;
db.User = User;
db.Post = Post;

// 이 구문이 없으면 테이블이 생성되지 않는다.
User.init(sequelize);
Post.init(sequelize);

// 관계형으로 맺어주는 함수 사용
User.associate(db);
Post.associate(db);

// 보내고싶은 값을 다 넣은 객체를 export
module.exports = db;