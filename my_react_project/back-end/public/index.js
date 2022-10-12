const Sequelize = require("sequelize");

const config = require("../config");
const User = require("./user");

// sequelize 객체 생성
const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const DB = {};
DB.sequelize = sequelize;
DB.User = User;

User.init(sequelize);

module.exports = DB;
