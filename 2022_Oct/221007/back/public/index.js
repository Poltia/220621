// 필요한 모듈
// sequelize, mysql2
// npm i sequelize mysql2

const Sequelize = require("sequelize");
const config = require("../config");
const user = require("./user");

const sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev);

const db = {};

db.sequelize = sequelize;
db.user = user;

user.init(sequelize);

module.exports = db;
